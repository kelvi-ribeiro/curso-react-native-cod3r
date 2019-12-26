import { ADD_POST, ADD_COMMENT } from './actionTyes'
import axios from 'axios'
export const addPost = post => {
  return dispatch => {
    // https://us-central1-lambe-cod3r-kelvi.cloudfunctions.net/uploadImage
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
          .then(res => console.log(res))
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

