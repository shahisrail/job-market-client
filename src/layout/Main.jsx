import { Outlet } from "react-router-dom";
import Nav from "../Pages/Navbar/Nav";
import Fotter from "../Pages/Fotter/Fotter";
import Headroom from "react-headroom";


const Main = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Headroom>
        <Nav></Nav>
      </Headroom>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Main;