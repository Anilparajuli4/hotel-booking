import { useMutation } from "react-query"
import ManageHotelForm from "../form/manageHotelForm/ManageHotelForm"
import * as apiClient from "../api.client"
import { UseAppContext } from "../context/AppContext"


function AddHotel() {
  const {showToast} = UseAppContext()
  const {mutate, isLoading} = useMutation(apiClient.addMyHotel, {
    onSuccess:()=>{
      showToast({message:'successfully  added hotel', type:"SUCCESS"})
    },
    onError:(error:Error)=>{
      showToast({message:'error in addHotel', type:"ERROR"})
      console.log(error);
      
    }
  })

  const handleSave = (hotelFormData:FormData) =>{
    mutate(hotelFormData)
  }
  return (
    <>
    <ManageHotelForm onSave={handleSave} isLoading={isLoading}/>
    </>
  )
}

export default AddHotel