import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from './Firebase/firebase.init';
import './SignUp.css'

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);
  
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
    const navigate = useNavigate();

    let signinError;
  
    if (loading || gLoading || updating) {
      return <Loading></Loading>
    }
  
    if (error || gError || updateError) {
      signinError = (
        <p className="text-red-500">
          <small>
            {error?.message || gError?.message || updateError?.message}
          </small>
        </p>
      );
    }
    if(user || gUser){
      navigate('/home')
    }
  
    const onSubmit = async (data) => {
      console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      console.log("update done");
   
      
    };
    return (
        <div className="flex h-screen justify-center signup items-center">
        <div className="card w-96 bg-white bg-opacity-25 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl">SignUp</h2>
  
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div className="form-control w-full max-w-xs font-bold">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name Is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
  
              {signinError}
  
              <input
                className="btn w-full max-w-xs"
                type="submit"
                value="SignUp"
              />
            </form>
  
            <p>
              <small className='font-bold'>
                Already have an account?
                <Link className="button mx-2" to="/login">
                  Please Login
                </Link>
              </small>{" "}
            </p> 
  
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-accent "
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default SignUp;