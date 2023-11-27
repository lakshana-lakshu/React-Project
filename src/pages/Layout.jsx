
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="pt-24">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 md:px-20 mt-10 pb-24 text-base whitespace-normal break-words">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
