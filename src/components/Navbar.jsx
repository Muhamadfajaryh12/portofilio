import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="w-full border-b-1 border-gray-50 p-4 flex justify-between items-center absolute z-2">
        <h5 className="text-blue-500 font-bold">
          Muhamad Fajar Yudhistira Herjanto.
        </h5>
        <ul className="flex gap-4 mr-4 ">
          <li>
            <Link
              to="/"
              className="text-white opacity-70 text-decoration-none text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-white opacity-70 text-decoration-none text-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-white opacity-70 text-decoration-none text-lg"
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
