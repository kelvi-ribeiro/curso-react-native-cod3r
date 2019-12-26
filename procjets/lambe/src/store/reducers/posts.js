import { ADD_POST } from '../actions/actionTyes'

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Kelvi Ribeiro',
      email: 'kelvi.ribeiro@gmail.com',
      image: require('../../../assets/imgs/fence.jpg'),
      comments: [
        {
          nickname: 'Antônio Lima',
          email: 'mathews.kyle@gmail.com',
          comment: 'Stunning!'
        },
        {
          nickname: 'Jackson Pereira',
          email: 'example@gmail.com',
          comment: 'Foto bem legal!'
        }
      ]
    },
    {
      id: Math.random(),
      nickname: 'Kauan Ribero',
      email: 'kauan.ribeiro.testeiro@gmail.com',
      image: require('../../../assets/imgs/bw.jpg'),
      comments: []
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload
        })
      }
    default: return state
  }
}

export default reducer
