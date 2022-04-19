//import './layout.sass'

type Children = {
  children? : JSX.Element | JSX.Element[]
}

const Layout = ({children} : Children) => {
  return (
    <div className='layoutBody'>
      <div className='contentBox'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
