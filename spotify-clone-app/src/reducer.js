export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null,
    // make null after developing
    token: 'BQDzmTc7sQmxTwS44_23mc7OCbJNnKK91yx8j6qZLPWopXDsBQ…HCFNRpJFPnppbr78lrMKntsrmvgr297uKr3AUXYCcsNX-GCNH'
};

const reducer = (state, action) => {
    console.log(action); 

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user ,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS': 
            return {
                ...state, 
                playlists: action.playlists,
            }
        default: 
            return state;
    }
}

export default reducer;