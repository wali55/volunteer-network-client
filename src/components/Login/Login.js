import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../images/google.png';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  if (loading || googleLoading) {
    return <Loading></Loading>;
  }

  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  if (error || googleError) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <div className="register-form">
      <div className="container">
        <h2 className="my-4">Please Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-50 mb-3"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <br />
          <input
            className="w-50 mb-3"
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <br />
          <input
            className="w-50 mx-auto btn btn-primary mt-2"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-3">
          New to Volunteer Network?
          <Link
            to="/register"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <div className="w-50">
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
