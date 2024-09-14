import TopLeftImg from "./TopLeftImg";
import Header from './Header'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <div className={`page bg-cover bg-no-repeat  text-white relative`}>
      <TopLeftImg />
      <Nav/>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
