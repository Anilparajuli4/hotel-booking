import React from 'react'
import { useFormContext } from 'react-hook-form'
import { hotelType } from '../../config/hotel-option-config'
import { HotelFormData } from './ManageHotelForm'

function TypesSection() {
    const {register, watch, formState:{errors}} = useFormContext<HotelFormData>()
    const typeWatch = watch("type")
  return (
    <div>
        <h2 className='text-2xl font-bold mb-2'>Type</h2>
        <div className='grid grid-cols-5 gap-2 '>
            {hotelType.map((data, i)=>{
              return   <label key={i} className={typeWatch === data ? "cursor-pointer p-2 bg-blue-300 text-sm rounded-full font-semibold" :
               "cursor-pointer p-2 bg-gray-300 text-sm rounded-full font-semibold"
   }>
                    <input  type="radio" value={data} {...register('type', {
                        required:'Type is required'
                    })} className='hidden'/>
                    <span>{data}</span>
                </label>
                
            })}
        </div>
        {errors.type && (
            <span className='text-red-500 tex-sm font-bold'>{errors.type.message}</span>
        )}
    </div>
  )
}

export default TypesSection