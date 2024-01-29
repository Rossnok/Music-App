import { useState } from "react"


export default function useMessageModalLogic() {
    const [errorMessage, setErrorMessage] = useState<string>()
    
    const errorManager = (error: any) => {
        const keyPattern = Object.keys(error.errorkeypattern).toString()
        console.log(error)

        keyPattern === 'email'? error.errorcode === 11000? setErrorMessage('Email is already in use'): null 
        :  keyPattern === 'userName'? error.errorcode === 11000? setErrorMessage('Username is already in use'):null
        :setErrorMessage('Known error')

        console.log(error)
    }

    return{
        errorManager,
        errorMessage
    }
}
