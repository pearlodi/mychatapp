import axios from "axios";

 const fetchUsers = () => {
    return axios.get('http://localhost:80/api/user/')
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching users:', error);
            return []; 
        });
};

export { fetchUsers };
