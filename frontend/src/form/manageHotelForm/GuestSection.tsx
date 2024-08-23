import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"


function GuestSection() {
    const {register, formState:{errors}} = useFormContext<HotelFormData>()
  return (
    <div >
        <h2 className="text-xl font-bold mb-2">Guests</h2>
    <div className="bg-gray-300 p-6 flex flex-col md:flex-row items-center gap-5">
        <label className=" flex-1 text-sm font-semibold" >
            Adults
            <input type="number" min={1} className="w-full broder rounded px-3 py-1 font-normal" {...register('adultCount', {
            required:'Adult count is required'
        })}/>
            {errors.adultCount && (<span className="text-red-500 text-sm">{errors.adultCount.message}</span>)}
        </label>
        <label className=" flex-1 text-sm font-semibold">
            Children
            <input className="w-full broder rounded px-3  py-1 font-normal" min={0} type="number" {...register('childCount', {
            required:'Child count is required'
        })}/>
            {errors.childCount && (<span className="text-red-500 text-sm">{errors.childCount.message}</span>)}
        </label>
    </div>
    </div>
  )
}

export default GuestSection