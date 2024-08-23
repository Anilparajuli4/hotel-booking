import React, { useContext, useState } from "react"

type TSearchContext = {
    destination: string,
    checkIn: Date,
    checkOut: Date,
    adultCount: number,
    childCount: number,
    hotelId: string,
    saveSearchValues : (
        destination:string,
        checkIn: Date,
        checkOut: Date,
        adultCount:number,
        childCount:number
    )=> void
}


const SearchContext = React.createContext<TSearchContext | undefined>(undefined)


type SearcContextProviderProps ={
    children: React.ReactNode
}

export const SearchContextProvider = ({children}:SearcContextProviderProps) =>{
    const [destination, setDistination] = useState<string>("")
    const [checkIn, setCheckIn] = useState<Date>(new Date())
    const [checkOut, setCheckOut] = useState<Date>(new Date())
    const [adultCount, setAdultCount] = useState<number>(1)
    const [childCount, setChildCount] = useState<number>(1)
    const [hotelId, setHotelId] = useState<string>('')

    const saveSearchValues =(destination:string, checkIn:Date, checkOut:Date, adultCount:number, childCount:number,  hotelId?: string) =>{
        setDistination(destination)
        setCheckOut(checkOut)
        setCheckIn(checkIn)
        setAdultCount(adultCount)
        setChildCount(childCount)
        if(hotelId){
            setHotelId(hotelId)
        }

    }

    return(
        <SearchContext.Provider value={{
            destination,
            checkIn,
            checkOut,
            childCount,
            adultCount,
            hotelId,
            saveSearchValues,
         
        }}>
          {children}
        </SearchContext.Provider>
    )
}


export const useSearchContext = () => {
    const context = useContext(SearchContext)
    if (!context) {
        throw new Error("useSearchContext must be used within a SearchContextProvider");
    }
    return context as TSearchContext
}