import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => {
    return async (dispatch) => {
        const res = await jsonPlaceholder.get('/posts')
        console.log(res);
        
        dispatch({
            type: "FETCH_POSTS",
            payload: res
        })
    }
}




