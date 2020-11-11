export const reloadCartReducer = ( state = 0, action ) =>{
    switch (action.type) {
        case 'RELOADCART':
                state  = action.payload;
                return state;
            break;
    
        default:
            return state;
            break;
    }
}