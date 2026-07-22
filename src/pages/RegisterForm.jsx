
import { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { Auth } from '../context/AuthContext'
import { NavLink } from 'react-router';



const RegisterForm = () => {
let {registerUser,setRegisterUser}=useContext(Auth);

  let{register,
    reset,
    handleSubmit,
    formState:{errors}
  }=useForm({
    mode:"onChange"
  })

const formSubmit=(data)=>{
   
    let user=[...registerUser,data]
    setRegisterUser(user)
    localStorage.setItem("RegisterUser",JSON.stringify(user))
    reset()
    alert("you are register successfully")
}


  return (
    <div className=' h-screen flex items-center justify-center'>
      <div className='border-2 rounded-xl border-lime-400 w-100 p-6 flex flex-col gap-6'>
       <div className='flex flex-col gap-2'>
         <h1 className='text-white font-bold text-3xl'>Create account</h1>
        <p className='text-gray-400'>Join SkyMart and start shopping</p>
       </div>
        <form onSubmit={handleSubmit(formSubmit)}  className='flex flex-col gap-5'>
            <input
            {...register("name",{required:"Name is required",
            pattern:{
              value:/^[A-Za-z][A-Za-z0-9_]{2,19}$/,
              message:"enter valid name"
            }
            })}
            className='p-3 border border-lime-400 rounded text-white' type="text" placeholder='FullName'/>
            {errors.name &&  <p className='text-red-800'>{errors.name.message}</p>}
            <input
            {...register("email",{required:"email is required",
              pattern:{
                value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message:"enter valid email"
              }
            })}
            className='p-3 border border-lime-400 rounded text-white' type="email" placeholder='Email Address'/>
            {errors.email &&  <p className='text-red-800'>{errors.email.message}</p>}
            <input
            {...register("password",{required:"password is required",
              minLength:{
                value:8,
                message:"minimum 8 characters required"
              }
            })}
            className='p-3 border border-lime-400 rounded text-white' type="password" placeholder='Password (min 8 chars)'/>
            {errors.password && <p className='text-red-800'>{errors.password.message}</p>}
           
            <button className='p-2 bg-lime-400 text-black font-bold rounded-xl'>Create Account</button>
            <p className="text-center text-gray-400 ">
            Already have an account?{" "}
          <NavLink className='text-lime-400 cursor-pointer' to={'/'}>Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
