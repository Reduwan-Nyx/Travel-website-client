import React from "react";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "./Firebase/firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let errorMessage 

  if(error || gError){
    errorMessage = <p className="text-red-500">{error?.message || gError?.message}</p>
  }

  if(loading || gLoading){
    return <Loading></Loading>
  }


  if (user) {
    console.log(user);
  }


  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email , data.password)
  };

 

  return (
    <div className="flex h-screen justify-center login items-center">
      <div className="card w-96 bg-white bg-opacity-25 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">Login</h2>

          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <div className="form-control w-full max-w-xs font-bold">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* password */}
            <div className="form-control w-full max-w-xs font-bold">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password Is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "must be 6 character or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
              {errorMessage}

            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="Login"
            />
          </form>
                  
          <p>
            <small className="font-bold">
              New To Doctors Portal{" "}
              <Link className="button mx-2" to="/signup">
                Create New Account
              </Link>
            </small>{" "}
          </p>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent"
          >
            Continue With Google
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
