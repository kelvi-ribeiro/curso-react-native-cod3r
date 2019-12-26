import {
  SET_POSTS,
  ADD_COMMENT,
  CREATING_POSTS,
  POSTS_CREATED
} from '../actions/actionTyes'

const initialState = {
  posts: [],
  isUploading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(
                action.payload.comment
              )
            } else {
              post.comments = [action.payload.comment]
            }
          }
          return post
        })
      }
    case CREATING_POSTS:
      return {
        ...state,
        isUploading: true
      }
    case POSTS_CREATED:
      return {
        ...state,
        isUploading: false
      }
    default: return state
  }
}

export default reducer
