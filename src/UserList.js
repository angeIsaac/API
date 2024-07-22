import { useEffect, useState } from "react";
import axios from 'axios';

function UserList() {

    const [listOfUser, setListOfUser] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function getUser() {
            const apiURL = "https://jsonplaceholder.typicode.com/users";
            try {
                const response = await axios.get(apiURL);
                console.log(response);
                setListOfUser(response.data);
            }
            catch (error) {
                setError(error);
            }
        }
    
        getUser();
    }, [])

    const listOfUserCopy = listOfUser.map((user) => {
        return (
            <li style={{marginBlock: '10px'}} key={user.username}>
                {user.username}
            </li>
        )
    })

  return (
    <div>
        <ul>
            {listOfUserCopy}
        </ul>
    </div>
  )
}

export default UserList;