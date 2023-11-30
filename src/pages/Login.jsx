import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  // receive create user function from auth provider
  const { signIn, signInIWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // reset input values
    e.target.email.value = "";
    e.target.password.value = "";

    // login with email and password
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Invalid Email/Password");
      });
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    signInIWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("Google Login Succesfull");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((res) => {
        console.log(res.user);
        toast.success("Github Login Succesful");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center my-16 px-3">
        <div className="card w-full max-w-md border">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-2 md:gap-4 p-4 md:p-6"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-block bg-violet-400 text-white hover:bg-violate">
                Login
              </button>
            </div>
          </form>
          <div className="text-center space-y-4">
            <p>Or continue with</p>
            <div className="flex justify-center space-x-4">
              <span
                onClick={handleGoogleSignIn}
                className="text-2xl cursor-pointer"
              >
                <FcGoogle />
              </span>
              <span
                onClick={handleGithubSignIn}
                className="text-2xl cursor-pointer"
              >
                <FaGithub />
              </span>
            </div>
          </div>
          <p className="text-center py-4">
            New Here?{" "}
            <Link className="underline text-teal-500" to={"/register"}>
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
