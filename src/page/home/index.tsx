import Layout from "../../components/layout/Layout";
import UsersApi from "../../utils/api/UsersApi";
import React from "react";

type GetProps = {
  // ?가 붙으면 값이 없어도 상관없음
  title?: string;
};

const Home = ({ title }: GetProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <Layout>
        {/* Counter */}
        {/*<CounterContainer />*/}
        <hr />
        {/* Todo */}
        {/* <TodoApp /> */}

        {/* UsersData Api */}
        <UsersApi />

        {/* Post Api */}
        {/* <PostsList /> */}
      </Layout>
    </div>
  );
};

export default Home;
