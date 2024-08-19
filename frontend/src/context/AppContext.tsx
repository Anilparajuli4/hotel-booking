type ToastMessage = {
    message:String,
    type: 'SUCCESS' | 'ERROR'
}

type TAppContext ={
    showToast : (toastMessage: ToastMessage) => void
}


const AppContext = React.createContext<TAppContext | undefined>(undefined);



export const AppContextProvider = ({children}: {children: React.ReactNode}) =>{
return(
    <AppContext.Provider>
        {children}
    </AppContext.Provider>
)
}