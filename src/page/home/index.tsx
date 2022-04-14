
type GetProps = {
  title: string,
  text?: string,
}

const Home = ({title,text} : GetProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>{text}</div>
    </div>
  )
}

export default Home;
