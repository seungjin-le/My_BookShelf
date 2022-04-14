type GetProps = {
  title: string;
  text?: string;
};

const Home = ({ title, text }: GetProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{text}</h3>
    </div>
  );
};

export default Home;
