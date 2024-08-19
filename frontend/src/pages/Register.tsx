
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import * as apiClient from '../api.client'


export type RegisterFormData= {
    firstName: string,
    lastName : string,
    email: string,
    password: string,
    confirmPassword: string
}

function Register() {
    const {register, watch, handleSubmit, formState:{errors}} = useForm<RegisterFormData>()

    const onSubmit =  handleSubmit((data)=>{
      mutation.mutate(data)
     
    })

    const mutation = useMutation(apiClient.register, {
        onSuccess:()=>{
            console.log("regestration successfull");
              },
          onError: (error:Error)=>{
             console.log(error.message);
             
          }     
    })
  return (
 <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <h2 className="text-3xl font-bold">Create an Account</h2>
    <div className="flex flex-col md:flex-row gap-5 ">
        <label className="text-gray-700 text-sm font-bold flex-1">
            First Name
            <input type='text' className="border rounded w-full py-1 px-2 font-normal" {...register('firstName', {required: 'First Name is required'})}/>
          {errors.firstName && <h2 className="text-red-500 tex-sm">{errors.firstName.message}</h2>}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
           Last Name
            <input type='text' className="border rounded w-full py-1 px-2 font-normal" {...register('lastName', {required: 'Last Name is required'})}/>
            {errors.lastName && <h2 className="text-red-500 tex-sm">{errors.lastName.message}</h2>}
        </label>
    
    </div>
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
        <label className="text-gray-700 text-sm font-bold flex-1">
           Confirm Password
            <input type='text' className="border rounded w-full py-1 px-2 font-normal"  {...register('confirmPassword', {
                validate:(val) =>{
               if(!val){
                return 'Confirm Password is required'
               }else if(watch('password') !== val){
                return 'Password didnot match'
               }
                }
            }) }/>
              {errors.confirmPassword && <h2 className="text-red-500 tex-sm">{errors.confirmPassword.message}</h2>}
        </label>
        <span>
            <button type='submit' className="bg-blue-600 rounded-md text-white p-2 font-bold hover:bg-blue-500 text-xl">
                Create Account
            </button>
        </span>
 </form>
  )
}

export default Register