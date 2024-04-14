import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto py-8'>
        <Nav></Nav>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
