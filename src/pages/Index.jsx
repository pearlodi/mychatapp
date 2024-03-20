import { useEffect, useState } from "react";
import { fetchUsers } from '../utils/api';

const Index = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>
            list of names in the database to fetch
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
