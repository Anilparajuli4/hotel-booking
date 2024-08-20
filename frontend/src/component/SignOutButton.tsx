import { useMutation, useQueryClient } from "react-query"
import * as apiClient from '../api.client'
import { UseAppContext } from "../context/AppContext"

function SignOutButton() {
    const queryClient = useQueryClient()
    const {showToast} = UseAppContext()
    const mutation = useMutation(apiClient.LogOut, {
        onSuccess: async()=>{
            await queryClient.invalidateQueries('validateToken')
         showToast({message:'successfully logout', type:"SUCCESS"})
        },
        onError: (error:Error) =>{
            showToast({message:error.message, type:"SUCCESS"})
        }
    })

    const handleClick = async() =>{
        mutation.mutate()
    }
  return (
     <button onClick={handleClick} className='text-blue-600 px-3 font-bold hover:bf-gray-100 bg-white'>Sign Out</button>
  )
}

export default SignOutButton