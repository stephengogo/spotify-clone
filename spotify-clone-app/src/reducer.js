export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null,
    // make null after developing
    token: 'BQDDTgCK2o2gi1N8XL8DaGXPJF4FwGsFNL-bS8IDUSVpnqc8RMUWqHTeKw4PxlEkTuyEk23h6d-srrSHLB-PpbX2tszglrhMv5lgYOhV3iJp3DBJqWdmeaSDMoYS5FItB0g_mo9VwStL47J9KE5heS7GknPyggZ5BuH46pm1GxWcV6IY'
};

const reducer = (state, action) => {
    console.log(action); 

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user 
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default: 
            return state;
    }
}

export default reducer;