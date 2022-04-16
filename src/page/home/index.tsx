type GetProps = {
  title: string;
  text?: string;
  children?: JSX.Element | JSX.Element[]
};

const Home = ({ title, text,children }: GetProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{text}</h3>
        {children}
    </div>
  );
};

export default Home;
