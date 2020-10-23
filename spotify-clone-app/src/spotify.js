// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "8446d97e18f447a7908c0afd7bc53e1e";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// arrow function
export const getTokenFromUrl = () => {
    // http://localhost:3000/#access_token=TOKEN12324134&token_type=Bearer&expires_in=3600
    // Go to # and split it at the &

    // split 3 times 
    // access_token=TOKEN12324134
    // token_type=Bearer
    // expires_in=3600

    // then reduce
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
    // sample
    //access_token: "TOKEN12324134"
    //expires_in: "3600"
    //token_type: "Bearer"
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_diaglog=true`;

