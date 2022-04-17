import {useEffect, useState} from "react";
import axios from "axios";

interface UserData {
  id:number;
  name:string;
  username:string;
}

const UsersApi = () => {
  const [users, setUsers] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
     useEffect(() => {
       const fetchUsers = async () => {
         try {
           // 요청이 시작 할 때 error 와 users 를 초기화
           setError(null);
           setUsers(null);
           // loading 상태를 true 로 바꿉니다.
           setLoading(true);
           const {data} = await axios.get(
             'https://jsonplaceholder.typicode.com/users',
           );
           setUsers(data);
         } catch (e) {
           setError(e);
         }
         setLoading(false);
       };
       fetchUsers();
   }, []);


   if (loading) return <div>로딩중..</div>;
   if (error) return <div>에러가 발생했습니다</div>;
   if (!users) return null;

   return (
     <ul>
       {users?.map(({ id, name, username } : UserData) => (
          <li key={id}>
            {username} ({name})
          </li>
        ))}
     </ul>
   );
}


export default UsersApi;
