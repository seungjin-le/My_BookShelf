import React from "react";

type GetProps = {
  // ?가 붙으면 값이 없어도 상관없음
  title?: string;
};

const Home = ({ title }: GetProps) => {
  return (
    <div>
      asd
      <h1>{title}</h1>
    </div>
  );
};

export default Home;
