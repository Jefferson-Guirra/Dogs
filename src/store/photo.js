import { PHOTO_GET } from "../api"

//CONSTANTES
const FETCH_PHOTOSTARTED = 'photo/fetchstarted'
const FETCH_PHOTOSUCESS = 'photo/fetchsucess'
const FETCH_PHOTOERROR = 'photo/fetcherror'

//ACTIONS
const fetchPhotoStarted = ()=> ({type:FETCH_PHOTOSTARTED})
const fetchPhotoSucess = (data)=> ({type:FETCH_PHOTOSUCESS,payload:data})
const fetchPhotoError = (error) => ({type:FETCH_PHOTOERROR,payload:error})

//INITIALSTATE

const initialState = {
  loading : false,
  data:null,
  error:null
}
//REDUCER
export default function photo (state=initialState,action){
  switch (action.type){
    case FETCH_PHOTOSTARTED:
      return{
        ...state,
        loading:true,
        data:null,
        error:null
      }
    case  FETCH_PHOTOSUCESS:
      return {
        ...state,
        loading:false,
        data:action.payload,
        error:null
      }
    case FETCH_PHOTOERROR:
      return {
        ...state,
        loading:false,
        data:null,
        error:action.payload
      }
    default:
      return state
    
  }
}


export const fetchPhoto = (id)=> async (dispatch)=>{
  try{
    dispatch(fetchPhotoStarted())
    const {url,options} = PHOTO_GET(id)
    const response = await fetch(url,options)
    const data = await response.json()
    if(response.ok === false) throw new Error(data.message)
    dispatch(fetchPhotoSucess(data))
  }
  catch(error){
    dispatch(fetchPhotoError(error.message))
  }

}