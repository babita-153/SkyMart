import { Mail, Lock, Eye } from "lucide-react";
import { useContext } from "react";
import {useForm} from 'react-hook-form'
import { Auth } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import MainDashboard from "../components/MainDashboard";


const LoginForm=()=>{
    let navigate=useNavigate()
    let {loggedUser,setLoggedUsser,registerUser}=useContext(Auth)
  
let {
    register,
    formState:{errors},
    reset,
    handleSubmit
}=useForm({
    mode:"onChange"
})

const formSubmit=(data)=>{



let validUser=registerUser.find((user)=>{
    return user.email===data.email && user.password===data.password
})
if(validUser){
  setLoggedUsser(data);
localStorage.setItem("LoggedUser",JSON.stringify(validUser))
    toast.success("user are loggedIn")
   navigate('/main')
   return
}
else{
toast.error("invalid user")
}
}



  return (
       <div className="h-screen flex p-5 items-center bg-black gap-10">

  
          <MainDashboard/>
          <div className=" w-90 bg-black text-white  flex-col gap-5 border-2 p-6  rounded-2xl border-gray-600 flex">
      <div>
        <h1 className="text-xl font-bold">Sign in</h1>
        <p className="text-gray-400">Enter your credentials to continue</p>
      </div>
     <form onSubmit={handleSubmit(formSubmit)} className="  flex flex-col gap-5">
        <input
        {...register("email",{required:"email is required",
            pattern:{
                value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message:"enter valid email"
            }
        })}
        className="p-3 border rounded-md text-white border-lime-400" type="email" placeholder="Email"/>
       
        {errors.email &&  <p className="text-red-800">{errors.email.message}</p> }
        <input
        {...register("password",{required:"password is required",
            minLength:{
                value:8,
                message:"minimum 8 digits require"
            },
            maxLength:{
                value:8,
                message:"maximum 8 digit require"
            }
        })}
        className="p-3 border rounded-md text-white border-lime-400" type="password" placeholder="Password"/>
         
        {errors.password &&  <p className="text-red-800">{errors.password.message}</p> }
        <button className="p-2 rounded bg-lime-400 text-black">Sign In</button>
          <p className="text-center text-gray-400 ">
            Don't have an account?{" "}
            
             
        <NavLink  className='text-lime-400 cursor-pointer' to={'/register'}> Create one</NavLink>
          </p>
     </form>
    
      
    </div>
       </div>
 
  );
}
export default LoginForm
