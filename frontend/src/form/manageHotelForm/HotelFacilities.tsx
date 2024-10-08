import {  useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"
import { hotelFacilties } from "../../config/hotel-option-config"


function HotelFacilities() {
    const{register, formState:{errors}} = useFormContext<HotelFormData>()
  return (
    <div>
        <h2 className="text-2xl font-bold mb-3">Facilities</h2>
        <div className="grid grid-cols-5 gap-3">
            {hotelFacilties.map((data, i)=>{
                return <label key={i} className="text-sm flex gap-1 text-gray-700">
                    <input  type="checkbox" value={data} {...register('facilities', {
                        validate:(facilties)=>{
                            if(facilties && facilties.length > 0){
                                return true
                            }else{
                                return 'At least one facilities is required'
                            }
                        }
                    })}/>
                    {data}
                </label>
            })}
        </div>
        {
            errors.facilities && (
                <span className="text-red-500 text-sm font-bold">{errors.facilities.message}</span>
            )
        }
    </div>
  )
}

export default HotelFacilities