/* eslint-disable react/prop-types */

const UserBasicInfor =  ({ email, password, handleChange }) => {
  return (
    <div>
      <label>Email:</label>
      <input type="text" name="email" value={email} onChange={handleChange} className="border border-[black] w-full"/>

      <label className="mt-2">Password:</label>
      <input type="text" name="password" value={password} onChange={handleChange} className="border border-[black] w-full"/>
    </div>
  );
};

export default  UserBasicInfor