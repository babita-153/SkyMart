import { createContext, useState } from "react";

export const Auth=createContext();
export const AuthProvider=({children})=>{

const [registerUser,setRegisterUser]=useState(JSON.parse(localStorage.getItem("RegisterUser"))||[])
const [loggedUser,setLoggedUsser]=useState(JSON.parse(localStorage.getItem("LoggedUser"))||null)
    return <Auth.Provider value={{registerUser,setRegisterUser,loggedUser,setLoggedUsser}}>
        {children}
    </Auth.Provider>
}