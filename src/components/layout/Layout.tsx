

type Children = {
  children? : JSX.Element | JSX.Element[]
}

const Layout = ({children} : Children) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Layout;
