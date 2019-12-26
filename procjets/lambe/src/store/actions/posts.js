import { ADD_POST } from './actionTyes'

export const addPost = post => {
  return {
    type: ADD_POST,
    payload: post
  }
}
