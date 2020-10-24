import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
//npm i spotify-web-api-js
import { useDataLayerValue } from "./DataLayer";


const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  // same as datalayer.user 

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = ''; // don't show the token
    const _token = hash.access_token; 
    // only take the access_token, hash also contains expires_in and token_type

    if(_token) {
      // getting rid of useState and making dispatch
      //setToken(_token)

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
    }
    
  }, []);
  // Test to see is dispatch works 
  //console.log("human", token);
  //console.log('ALIEN', user);

  return (
    <div className="app">{token ? <Player spotify={spotify}/> : (<Login />)} </div>
  );
}

export default App;
