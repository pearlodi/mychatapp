/* eslint-disable react/prop-types */

const UserPersonalInfo = ({ firstName, lastName, userName, handleChange }) => {
  return (
    <div>
      <label>First Name:</label>
      <input type="text" name="firstName" value={firstName} onChange={handleChange} className="border border-[black] w-full"/>

      <label className="mt-2">Last Name:</label>
      <input type="text" name="lastName" value={lastName} onChange={handleChange} className="border border-[black] w-full"/>

      <label className="mt-2">User Name:</label>
      <input type="text" name="userName" value={userName} onChange={handleChange} className="border border-[black] w-full"/>
    </div>
  );
};

export default UserPersonalInfo;
