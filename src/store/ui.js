import { createSlice } from "@reduxjs/toolkit";

const slice  = createSlice({
  name :'ui',

  initialState:{
    modal:false
  },
  reducers:{
    openModal(state){
      state.modal = true
    },
    closeModal (state){
      state.modal = false
    }
  }

})

export default slice.reducer
export const {openModal,closeModal} = slice.actions