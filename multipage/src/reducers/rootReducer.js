const initState = {
  posts: [
    {id: '1', title: 'Hello', body: 'wow oh my god this is so awesome'},
    {id: '2', title: 'Well well well', body: 'please lord show my how to redux'},
    {id: '3', title: 'Goodbye', body: 'ok this was fun'}
  ]
}

const rootReducer= (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    })
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;