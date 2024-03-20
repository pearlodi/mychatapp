import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({})


  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({...inputs, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:80/api/user.save', inputs).then(function(response){
      console.log(response.data);
      navigate('/');
    }); 
   
  }
  
  return (
    <div className="flex flex-col h-full justify-center items-center">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-[400px]">
        <label>First Name:</label>
        <input type="text"  name="firstName" onChange={handleChange} className="border border-[black] w-full"/>

        <label className="mt-2">Last Name:</label>
        <input type="text" name="lastName" onChange={handleChange} className="border border-[black] w-full"/>

        <label className="mt-2">User Name:</label>
        <input type="text" name="userName" onChange={handleChange} className="border border-[black] w-full"/>

        <label className="mt-2">Email:</label>
        <input type="text" name="email" onChange={handleChange} className="border border-[black] w-full"/>

        <label className="mt-2">Password:</label>
        <input type="text" name="password" onChange={handleChange} className="border border-[black] w-full"/>

         <button className="bg-[black] w-full text-white mt-2">save</button>
      </form> 
    </div>
  )
}

export default Signup