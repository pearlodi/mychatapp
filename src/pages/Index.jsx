import axios from "axios"
import { useEffect, useState } from "react";

const Index = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/user/').then(function(response) {
            setUsers(response.data);
        });
    }

    return (
        <div>
            <h1>
            list of names in the database
            </h1>
                    {users.map((user, key) =>
                        <div key={key}>
                            <ul>
                            <li>{user.first_name}</li>
                            </ul>
                        </div>
                    )}
        </div>
    )
}

export default Index
