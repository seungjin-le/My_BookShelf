import axios from "axios";
import {useEffect, useState} from "react";

const Posts = () => {

  const [users, setUsers] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      //데이터는 response.data 안에 들어있습니다.
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  //
  useEffect(() => {
    fetchUsers();
  }, []);

  return users;
}

export default Posts();
