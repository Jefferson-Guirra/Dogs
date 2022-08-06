import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'
import NotFound from '../NotFound'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { useSelector } from 'react-redux'
import componentLoader from './ComponentLoader'

const User = () => {
  const UserStatsGraphs = React.lazy(componentLoader('./UserStatsGraphs'))
  const {data} = useSelector(state=>state.user) 
 
  
  
  return (
    <section className='container'>
      <Head title='Minha Conta'/>
      <UserHeader />
      <Routes>
        <Route path='/' element={ data.id &&<Feed user={data.id} />}/>
        <Route path='postar' element={<UserPhotoPost />}/>
        <Route path='estatisticas' element={<UserStats />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </section>
  )
}

export default User