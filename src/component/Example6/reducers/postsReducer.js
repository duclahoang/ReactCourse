
export default (state=[], action) => {
    if(action.type==="FETCH_POSTS"){
        return [...state, action.payload]
    }
    return state
}
