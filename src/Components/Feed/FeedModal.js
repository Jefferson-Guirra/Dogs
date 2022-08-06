import React from 'react'
import styles from './FeedModal.module.css'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../store/ui'


const FeedModal = () => {
  const {data,error,loading} = useSelector(state=>state.photo)
  const {modal} = useSelector(state=> state.ui)
  const dispatch = useDispatch()
  let wait = false

  React.useEffect(()=>{
    if(!wait){
      dispatch(closeModal())
    }
    wait = true
  },[dispatch,wait])
  


  function handleOutsideClick(event){
    if(event.target === event.currentTarget){
      dispatch(closeModal())
    }
  }

  if(!modal) return null
  return (
    <div onClick={handleOutsideClick} className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent  />}

    </div>
  )
}

export default FeedModal