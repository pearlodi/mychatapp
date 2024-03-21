import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/reducers/UserReducer";
import { useNavigate } from "react-router-dom";
import UserBasicInfor from "./UserBasicInfor";
import UserPersonalInfo from "./UserPersonalInfo";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:80/api/user.save", {
        ...formData
      });

      dispatch(addUser(response.data));

      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div>
      hello
      {step === 1 && (
        <UserBasicInfor
          firstName={formData.firstName}
          lastName={formData.lastName}
          userName={formData.userName}
          handleChange={handleChange}
        />
      )}
      {step === 2 && (
        <UserPersonalInfo
          email={formData.email}
          password={formData.password}
          handleChange={handleChange}
        />
      )}
      {step === 2 && <button onClick={handlePrev}>Previous</button>}
      <button onClick={step === 2 ? handleSubmit : handleNext}>
        {step === 2 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Signup;
