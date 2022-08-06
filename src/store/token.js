import CreateAsyncSlice from "./helper/createAsyncSlice";
import {TOKEN_POST} from "../api"

const slice = CreateAsyncSlice({
  name:'token',
  fetchConfig:(user)=> TOKEN_POST(user),
  initialState:{
    data:{
      token:window.localStorage.getItem('token') || null
    }
  }

   
})

export const {resetState : resetTokenState} = slice.actions

export const fetchToken = slice.asyncAction
export default slice.reducer