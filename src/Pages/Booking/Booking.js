import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../Login/Firebase/firebase.init";

const Booking = () => {
  const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  // React hook form
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.userName = user.displayName;
    data.email = user.email;
    data.service = service;
    data.status = "pending";

    axios
      .post("https://mighty-citadel-89364.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added your tour package");
          reset();
        }
      });
  };

  useEffect(() => {
    const url = `https://mighty-citadel-89364.herokuapp.com/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={service.img}
          />
          {console.log(service.img)}
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {service.name}
          </h1>
          <p className="mb-8 leading-relaxed text-2xl">{service.description}</p>
          <div className="flex justify-center"></div>
        </div>

        {/* REACT HOOK FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm leading-5">
                  <span className="px-2 text-gray-500 bg-white">
                    Place Your Order
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full space-y-6">
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        {...register("Address", {
                          required: true,
                          maxLength: 20,
                        })}
                        type="text"
                        id="search-form-price"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Your Address"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        {...register("Number", {
                          required: true,
                          maxLength: 20,
                        })}
                        type="number"
                        id="search-form-price"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        {...register("Date")}
                        type="date"
                        id="search-form-location"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Your location"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className=" relative ">
                      <textarea
                        {...register("Description")}
                        type="text"
                        id="search-form-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="block w-full rounded-md shadow-sm">
                      <input
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
              <p className="text-xs leading-5 text-gray-500">
                This data are display for information and can change
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
