import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../utils/api';
import { setUser } from '../services/reducers/UserReducer'; 

const Index = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users); 

  useEffect(() => {
    fetchUsers().then(data => {
      dispatch(setUser(data));
    }).catch(error => {
      console.error('Error fetching users:', error);
    });
  }, [dispatch]); 

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>{user.first_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;

