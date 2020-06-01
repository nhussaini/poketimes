const initState ={
    posts:[
        {id: '1', title: 'Squirtle Laid an egg', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
        {id: '2', title:'Charmander laid on egg', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
        {id: '3', title: 'A helix fossil was found', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
    ]
}
const rootReducer = (state=initState, action) =>{
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post =>{
            return action.id !== post.id;
        });
        return {
            ...state,
            posts : newPosts
        }
    }
    return state;
}

export default rootReducer;