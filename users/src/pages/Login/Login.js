import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./Login.css"

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) =>{
   e.preventDefault()

      sessionStorage.setItem("userLoginDetails", JSON.stringify({...form}))

      toast.success(`"Welcome" ${form.email}`)

      setTimeout(() => {
        window.location="/profile"
      }, 3000);
 
  }

  return (
    <div className='form-wrapper'>
        <ToastContainer />
      <div className='form-div'>

        <form onSubmit={handleSubmit}>
          <h4>User Sign In</h4>

          <input type="email" 
            className='input' 
            name='email' 
            placeholder='Email address'
            required
            onChange={handleChange}
            
          />

          <input type="password" 
            className='input' 
            name='password' 
            placeholder='Password'
            required
            onChange={handleChange}

          />
          
          <button onChange={handleChange}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login