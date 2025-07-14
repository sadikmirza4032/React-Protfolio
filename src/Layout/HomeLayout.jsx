
import Navbar from "../Components/layout-component/Navbar";
import ContactMe from "../Components/layout-component/ContactMe";
import { Outlet } from "react-router-dom";







const HomeLayout = () => {
  return (
    <div className="">
      <header className="w-11/12 mx-auto">
        <Navbar ></Navbar>
      </header>

      <main className="w-11/12 mx-auto">
      <Outlet></Outlet>
      </main>

      <footer className="w-11/12 mx-auto">
        <ContactMe ></ContactMe>
      </footer>
    </div>
  );
};

export default HomeLayout;