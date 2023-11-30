import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  // receive create user function from auth provider
  const { createUser, signInIWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const img = form.get("img");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, img, email, password);

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{1,5}|.{7,})$/.test(password)
    ) {
      setError("Use combination of number, capital and special characters");
      toast.error("Invalid Password");
      return;
    } else {
      setError("");

      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          toast.success("Succesfully Sign Up");
        })
        .catch((err) => console.log(err.message));

      // updateUser()
      //   .then((res) => console.log(res.user))
      //   .catch((err) => console.log(err.message));

      // navigate after login
      navigate(location?.state ? location.state : "/");
    }

    // reset input values
    e.target.name.value = "";
    e.target.img.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    signInIWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("Google Sign In Succesful");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  //   github sign in
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((res) => {
        console.log(res.user);
        toast.success("Github Sign In Succesful");
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div className="container mx-auto flex items-center justify-center my-16 px-3">
        <div className="card w-full max-w-md border">
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-2 md:gap-4 p-4 md:p-6"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Address</span>
              </label>
              <input
                name="img"
                type="text"
                placeholder="Enter your photo address"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-block bg-violet-400 text-white hover:bg-violate">
                Register
              </button>
            </div>
          </form>
          <p className="text-sm text-red-500 text-center px-2 pb-4">{error}</p>
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
            Already have an account?{" "}
            <Link className="underline text-teal-500" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
