import React from 'react'
import { USER_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { userLogin } from '../../store/user'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head'
import { useDispatch } from 'react-redux'

const LoginCreat = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()
  const {error,loading,request} = useFetch()
  const dispatch = useDispatch()


  async function handleSubmit(event){
    event.preventDefault()
    const {url,options} = USER_POST({
      username:username.value,
      email:email.value,
      password:password.value
    })
    const { response } = await request(url,options)
    if(response.ok)dispatch(userLogin({username:username.value,password:password.value}))
  }
  return (
    <section className='animeLeft'>
      <Head title='Crie sua Conta'/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='Email' type='email' name='email' {...email} />
        <Input label='Senha' type='password' name='password' {...password} />
         {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>  } 
         <Error error={error} />
        

      </form>
    </section>
  )
}

export default LoginCreat