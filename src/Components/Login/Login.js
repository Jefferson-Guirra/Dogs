import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginCreat from './LoginCreat'
import LoginPasswordLost from './LoginPasswordLost'
import LoginForm from './LoginForm'
import LoginPasswordReset from './LoginPasswordReset'
import styles from './Login.module.css'
import NotFound from '../NotFound'
import { useSelector } from 'react-redux'
import Loading from '../Helper/Loading'

const Login = () => {
  
  const {data,loading} = useSelector(state=>state.user)
  if(loading) return <Loading />
  if(data) return  <Navigate to='/conta'/>
  return (
    <section className={styles.login}>
      <div className={styles.form}>
        <Routes>
          <Route path='/' element={<LoginForm />}/>
          <Route path='criar' element={<LoginCreat />}/>
          <Route path='perdeu' element ={<LoginPasswordLost />}/>
          <Route path='resetar' element ={<LoginPasswordReset />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>

    </section>
  )
}

export default Login