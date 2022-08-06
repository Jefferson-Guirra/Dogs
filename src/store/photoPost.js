import { PHOTO_POST } from "../api";
import CreateAsyncSlice from "./helper/createAsyncSlice";

const slice = CreateAsyncSlice({
  name:'photoPost',
  fetchConfig:({formData,token}) => PHOTO_POST({formData,token})
})

export const {resetState:resetPhotoPost} = slice.actions
export const fetchPhotoPost = slice.asyncAction
export default slice.reducer