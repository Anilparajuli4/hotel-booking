
import { useFormContext } from 'react-hook-form'
import { HotelFormData } from './ManageHotelForm'

function ImageSection() {
    const {register, formState:{errors}} = useFormContext<HotelFormData>()
  return (
    <div>
        <h2 className='text-2xl font-bold mb-3'>Images</h2>
        <div className='broder rounded p-4 flex flex-col gap-4'>
        <input type='file' accept='image/*' className='w-fill text-gray-700 font-normal' multiple  {...register('imagefiles', {
            validate:(imageFiles)=>{
              const totalLength = imageFiles.length 
              if(totalLength === 0){
                return 'At least one message to be added'
              }
              if(totalLength > 6){
                return "Total number of images cannot be more than 6"
              }
              return true
            }
        })}/>
        </div>
      {errors.imagefiles && (<span className="text-red-500 text-sm">{errors.imagefiles.message}</span>)}
    </div>
  )
}

export default ImageSection