import { FormProvider, useForm } from "react-hook-form"
import DetailSecton from "./DetailSecton";
import TypesSection from "./TypesSection";
import HotelFacilities from "./HotelFacilities";
import GuestSection from "./GuestSection";
import ImageSection from "./ImageSection";

export type HotelFormData={
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  pricePerNight: number;
  imagefiles: FileList;
  facilities: string[]; 
  starRating: number;
}

type Props ={
  onSave : (hotelFormData:FormData) => void
  isLoading: boolean

}

function ManageHotelForm({onSave, isLoading}:Props) {
    const formMethods = useForm<HotelFormData>()
    const {handleSubmit} = formMethods

   const onSubmit = handleSubmit((data:HotelFormData)=>{  
    console.log(data);
    
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("city", data.city)
    formData.append("country", data.country)
    formData.append("description", data.description)
    formData.append("type", data.type)
    formData.append("pricePerNight", data.pricePerNight.toString())
    formData.append("starRating", data.starRating.toString())
    formData.append("adultCount", data.adultCount.toString())
    formData.append("childCount", data.childCount.toString())
    data.facilities.forEach((facility, index)=>{
      formData.append(`facilities[${index}]`, facility)
    })


    if(data.imagefiles){
      Array.from(data.imagefiles).forEach((imagefiles)=>{
        formData.append(`imagefiles`, imagefiles)
        })
    }
 
    
     onSave(formData)
   })
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-10">
        <DetailSecton/>
        <TypesSection/>
        <HotelFacilities/>
        <GuestSection/>
        <ImageSection/>
        <span className="flex justify-end">
          <button disabled={isLoading} type="submit" className="bg-blue-600 disabled:bg-gray-500 text-white p-2 font-bold hover:bg-gray-500 text-xl rounded-md">
            {isLoading ? 'Saving...' : 'Saving'}</button>
        </span>
      </form>
    </FormProvider>

  )
}

export default ManageHotelForm