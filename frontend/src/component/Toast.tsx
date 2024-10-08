import { useEffect } from "react"

type ToastProps = {
    message: string,
    type: 'SUCCESS' | 'ERROR',
    onClose : () => void
}

function Toast({message, type, onClose}: ToastProps) {
 

    const styles = type === "SUCCESS" ? "fixed top-4 reght-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md" 
    : "fixed top-4 reght-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md"

    useEffect(()=>{
     const timer = setTimeout(() =>{
      onClose()
     }, 5000)
     return () =>{
        clearTimeout(timer)
     }
    },[onClose])
  return (
    <div className={styles}>
    <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">
            {message}
        </span>
    </div>
    </div>
  )
}
 
export default Toast