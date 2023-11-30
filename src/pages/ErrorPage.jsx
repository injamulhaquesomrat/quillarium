import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-[#7A6AD8] h-screen font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center py-40 text-white text-center space-y-6">
        <p className="text-3xl font-semibold">
          {error.status} {error.statusText}
        </p>
        <h4 className="text-2xl">{error.data}</h4>
        <Link to={"/"}>
          <button className="btn btn-sm md:btn-sm lg:btn-md">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
