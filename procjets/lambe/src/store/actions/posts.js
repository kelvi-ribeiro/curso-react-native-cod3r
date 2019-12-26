import {
  SET_POSTS,
  ADD_COMMENT,
  CREATING_POSTS,
  POSTS_CREATED
} from './actionTyes'
import axios from 'axios'
export const addPost = post => {
  return dispatch => {
    dispatch(creatingPosts())
    axios({
      url: 'uploadImage',
      baseURL: 'https://us-central1-lambe-cod3r-kelvi.cloudfunctions.net',
      method: 'post',
      data: {
        image: post.image.base64
      }
    })
      .catch(err => console.log(err))
      .then(resp => {
        post.image = resp.data.imageUrl
        axios.post('/posts.json', { ...post })
          .then(() => {
            dispatch(fetchPosts())
            dispatch(postsCreated())
          })
          .catch(err => console.log(err))
      })
  }
  /* return {
    type: ADD_POST,
    payload: post
  } */
}

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  }
}

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export const fetchPosts = () => {


  return dispatch => {
    axios.get('/posts.json')
      .then(res => {
        const rawPosts = res.data

        const posts = []
        for (const key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key
          })
          dispatch(setPosts(posts.reverse()))
        }
      })
      .catch(err => console.log(err))
  }
}

export const creatingPosts = () => {
  return {
    type: CREATING_POSTS
  }
}

export const postsCreated = () => {
  return {
    type: POSTS_CREATED
  }
}


