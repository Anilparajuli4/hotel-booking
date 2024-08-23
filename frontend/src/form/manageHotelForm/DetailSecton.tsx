import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

function DetailSecton() {
  const {register, formState:{errors}} = useFormContext<HotelFormData>()
  return (
    <div className="flex flex-col gap-4">
    <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
    <label className="text-gray-700 text-sm font-bold flex-1">
           Name
            <input type='text'  className="border rounded w-full py-1 px-2 font-normal" {...register('name', {required: 'Email is required'})}/>
            {errors.name && <h2 className="text-red-500 tex-sm">{errors.name.message}</h2>}
        </label>
        <div className="flex flex-col md:flex-row gap-5 ">
        <label className="text-gray-700 text-sm font-bold flex-1">
            City
            <input type='text' className="border rounded w-full py-1 px-2 font-normal" {...register('city', {required: 'city is required'})}/>
          {errors.city && <h2 className="text-red-500 tex-sm">{errors.city.message}</h2>}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
           Country
            <input type='text' className="border rounded w-full py-1 px-2 font-normal" {...register('country', {required: 'country is required'})}/>
            {errors.country && <h2 className="text-red-500 tex-sm">{errors.country.message}</h2>}
        </label>
    
    </div>

    <label className="text-gray-700 text-sm font-bold flex-1">
          Description
            <textarea rows={10}  className="border rounded w-full py-1 px-2 font-normal" {...register('description', {required: 'Description is required'})}/>
            {errors.description && <h2 className="text-red-500 tex-sm">{errors.description.message}</h2>}
        </label>

        <label className="text-gray-700 text-sm font-bold max-w-[50%]">
           Price Per Night
            <input type='number'  className="border rounded w-full py-1 px-2 font-normal" {...register('pricePerNight', {required: 'price is required'})}/>
            {errors.pricePerNight && <h2 className="text-red-500 tex-sm">{errors.pricePerNight.message}</h2>}
        </label>
        <label className="text-gray-700 text-sm font-bold max-w-[50%]">
           Price Per Night
           <select {...register("starRating", {
            required:'Rating is required'
           })} className="broder rounded w-full p-2 text-gray-300 font-normal">
            <option value='' className="text-sm font-bold">
              Select a rating
            </option>
            {[1, 2, 3, 4, 5].map((data, i)=>{
              return <option key={i} value={data}>
                {data}
              </option>
            })}
           </select>
            {errors.pricePerNight && <h2 className="text-red-500 tex-sm">{errors.pricePerNight.message}</h2>}
        </label>
    </div>
  )
}

export default DetailSecton 