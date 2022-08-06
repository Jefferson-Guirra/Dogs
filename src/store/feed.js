import CreateAsyncSlice from './helper/createAsyncSlice'
import {PHOTOS_GET} from '../api'


const slice = CreateAsyncSlice({
  name:'feed',
  fetchConfig:({page,total,user})=> PHOTOS_GET({page,total,user}),
  initialState:{
    list:[],
    pages:1,
    infinite:true
  },
  reducers:{
    addPhotos(state,action){
      state.list.push(...action.payload)
      if(action.payload.length === 0) state.infinite = false
    },
    addPages(state){
      state.pages++
    },
    resetState(state){
      state.infinite = true
      state.pages = 1
      state.data = null
      state.loading = false
      state.error = null
      state.list = []
    }
  }
})
export const  {addPages,addPhotos, resetState:resetFeedState} = slice.actions

export const fetchFeed = slice.asyncAction

export const loadNewPhotos = ({total = 6, user}) => async (dispatch,getState)=>{
  
  const {feed} = getState()
  const {payload} = await dispatch(fetchFeed({page:feed.pages,total,user}))
  dispatch(addPages())
  dispatch(addPhotos(payload))
}

export default slice.reducer
