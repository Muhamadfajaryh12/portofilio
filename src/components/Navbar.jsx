import { Link, useLocation, useParams } from "react-router-dom";

const NavBar = () => {
  const nav = useLocation();
  console.log(nav.pathname);
  return (
    <>
      <div className="w-full border-b-1 border-gray-50 p-4 flex justify-center sm:justify-between items-center absolute z-2 text-black">
        <h5 className=" font-bold hidden sm:block">
          Muhamad Fajar Yudhistira Herjanto.
        </h5>
        <ul className="flex gap-4 mr-4 ">
          <li>
            <Link
              to="/"
              className={` text-decoration-none  text-black text-lg ${
                nav.pathname == "/" ? `opacity-100 font-bold ` : `opacity-70 `
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={` text-decoration-none  text-black text-lg ${
                nav.pathname == "/about"
                  ? `opacity-100 font-bold `
                  : `opacity-70 `
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className={` text-decoration-none  text-black text-lg ${
                nav.pathname == "/project"
                  ? `opacity-100 font-bold `
                  : `opacity-70 `
              }`}
            >
              Project
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
