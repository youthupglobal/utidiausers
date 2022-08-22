import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./Login.css"
import axios from 'axios';



const Login = () => {

  const LOGIN_URL = "https://api.users.utidia.com/api/talents/login"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) =>{
   e.preventDefault()

   try{
     await axios.post(LOGIN_URL, 
      {email, password}
    )
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("talent", JSON.stringify(res.data));
       
        toast.success(`Welcome ${email}`)

        setTimeout(() => {
          window.location="/dashboard/profile"
        }, 3000);
    }
    return res.data;
    })
      //Error handling
    }catch(err){
      if(!err?.res){
        toast.error("Invalid Login Details");
      }else if(err.res?.status === 400){
        toast.error("Missing username or password");
      }else if(err.res?.status === 401){
        toast.error("Unauthorized");
      }else{
        toast.error("Login failed");
      }
    }
 
  }

  return (
    <div className='form-wrapper'>
        <ToastContainer />
      <div className='form-div'>

        <form onSubmit={handleSubmit}>
          <h4>Talent Sign In</h4>

          <input type="email" 
            className='input' 
            name='email' 
            placeholder='Email address'
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input type="password" 
            className='input' 
            name='password' 
            placeholder='Password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login