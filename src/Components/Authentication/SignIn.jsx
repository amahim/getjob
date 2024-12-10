import React, { useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import loginLottie from '../../assets/login.json'
import Lottie from "lottie-react";

const SignIn = () => {
    const { setUser, userSignIn } = useContext(AuthContext);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!");
        navigate(location?.state?.from || "/");
      })
      .catch((err) => {
        setError("Failed to login with Google. Please try again.");
        setUser(null);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!");
        navigate(location?.state?.from || "/");
      })
      .catch((err) => {
        setError("Please input your email and password correctly");
      });
  };

  return (
    <div className="mx-auto w-4/5 pb-10">
      <div>
        <h1 className="text-center font-bold text-2xl text-primary">
          Login to your account
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-center">
        <div className="w-3/5">
            <Lottie animationData={loginLottie}></Lottie>
        </div>
      <form
        onSubmit={handleLoginSubmit}
        className="border-primary card-body border-2 mt-10 rounded-xl shadow-xl"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <label className="label">
            <Link
              to="/forget-password"
              state={{ email }}
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-primary text-white">
            Login
          </button>
        </div>
        <div>
          <h1>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </h1>
        </div>
        <div className="flex w-full flex-col">
          <div className="divider">Or</div>
        </div>
        <div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full btn border-primary btn-outline"
          >
            Login With Google <FaGoogle />
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
