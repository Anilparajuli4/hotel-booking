import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import * as apiClient from '../api.client'
import { Link, useNavigate } from "react-router-dom"
import { UseAppContext } from "../context/AppContext"


export type TSignIn = {
  email: string,
  password: string
}


function Login() {
  const {register, handleSubmit, formState:{errors}} = useForm<TSignIn>()
  const navigate = useNavigate()
  const {showToast} = UseAppContext()
  const queryClient = useQueryClient()



  const onSubmits  = handleSubmit((data)=>{
  mutation.mutate(data)

  })
  const mutation = useMutation(apiClient.login, {
    onSuccess:async()=>{
      await queryClient.invalidateQueries('validateToken')
      navigate('/')
      showToast({message:'successfully login', type:"SUCCESS"})
    },
      onError:(error:Error)=>{
        showToast({message:error.message, type:"ERROR"})
      }
  })
  return (
    <form onSubmit={onSubmits} className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold ">
       Sign in
      </h2>
      <label className="text-gray-700 text-sm font-bold flex-1">
           Email
            <input type='email'  className="border rounded w-full py-1 px-2 font-normal" {...register('email', {required: 'Email is required'})}/>
            {errors.email && <h2 className="text-red-500 tex-sm">{errors.email.message}</h2>}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
           Password
            <input type='text' className="border rounded w-full py-1 px-2 font-normal" {...register('password', {required: 'Password is required', minLength:{
                value:6,
                message: "Password must be at least 6 character long"
            }}) }/>
              {errors.password && <h2 className="text-red-500 tex-sm">{errors.password.message}</h2>}
        </label>
        <span className="flex items-centr justify-between">
          <span className="text-sm">
            Not Registered <Link className="underline" to='/register'>create an account</Link>
          </span>
            <button type='submit' className="bg-blue-600 rounded-md text-white p-2 font-bold hover:bg-blue-500 text-xl">
                Login
            </button>
        </span>
    </form>
  )
}

export default Login