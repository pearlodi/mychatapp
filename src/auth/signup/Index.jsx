import { useState } from "react";
import { addUser } from "../../services/reducers/UserReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const users = useSelector((state) => state.users); 


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Make API request
      const response = await axios.post('http://localhost:80/api/user.save', {
        firstName,
        lastName,
        userName,
        email,
        password
      });
  
      console.log(response.data);
  
      // Dispatch addUser action with the response data to update Redux store
      dispatch(addUser(response.data));
  
      // Assuming you're using React Router, navigate to a different route
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error here, show error message to user, etc.
    }
  };
  return (
    <div>
          <form onSubmit={handleSubmit}  className="flex flex-col mt-8 w-[400px]">
        <label>First Name:</label>
        <input type="text" onChange={(e => setFirstName(e.target.value))}  name="firstName"  className="border border-[black] w-full"/>

        <label className="mt-2">Last Name:</label>
        <input onChange={(e => setLastName(e.target.value))} type="text" name="lastName"  className="border border-[black] w-full"/>

        <label className="mt-2">User Name:</label>
        <input onChange={(e => setUserName(e.target.value))} type="text" name="userName"  className="border border-[black] w-full"/>

        <label className="mt-2">Email:</label>
        <input onChange={(e => setEmail(e.target.value))} type="text" name="email"  className="border border-[black] w-full"/>

        <label className="mt-2">Password:</label>
        <input onChange={(e => setPassword(e.target.value))} type="text" name="password"  className="border border-[black] w-full"/>

         <button className="bg-[black] w-full text-white mt-2">save</button>
      </form> 
    </div>
  )
}

export default Signup