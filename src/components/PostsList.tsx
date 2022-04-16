import {useContext, useEffect, useState} from "react";
import {UserApi} from "../App";

const PostsList = () => {

  const datas = useContext(UserApi)

  useEffect(() => {
    console.log(datas);
  }, [datas]);


  return (
    <div>
      <div>
        {datas}
      </div>
      PostsList
    </div>
  );
}

export default PostsList
