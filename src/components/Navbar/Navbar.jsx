import { Link, NavLink } from "react-router-dom";
import userImg from "../../../src/assets/user.png";
import { RiMenu4Line } from "react-icons/ri";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch((err) => err.message);
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/courses"}>Courses</NavLink>
      </li>
      <li>
        <NavLink to={"/team"}>Team</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-violate text-white rounded-b-2xl lg:rounded-b-5xl">
      <div className="navbar container mx-auto duration-700">
        <div className="navbar-start space-x-2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <RiMenu4Line className="text-2xl"></RiMenu4Line>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-base bg-violate space-y-3"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-xl md:text-3xl xl:text-4xl font-semibold logo"
          >
            Quillarium
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex py-4">
          <ul className="menu menu-horizontal px-2 space-x-2 text-base border rounded-full ">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <p className="px-4 py-1 bg-[#8879dc] rounded-full hidden sm:block">
              {user.displayName}
            </p>
          ) : (
            <Link to={"/register"}>
              <button className="btn hidden sm:block btn-sm rounded-full bg-[#8879dc] hover:bg-[#9b8de6] border-none text-white">
                Register Now
              </button>
            </Link>
          )}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 md:w-16 rounded-full ring-2 ring-white outline-offset-8">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user ? user.photoURL : userImg}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-violate space-y-3"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
              <li className="sm:hidden">
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                {user ? (
                  <p onClick={handleSignOut}>Logout</p>
                ) : (
                  <Link to={"/login"}>Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
