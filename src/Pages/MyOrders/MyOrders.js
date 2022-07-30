import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../Login/Firebase/firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://mighty-citadel-89364.herokuapp.com/manage-order")
      .then((res) => res.json())
      .then((data) =>
        setOrders(data.filter((item) => item.email === user.email))
      );
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete ?");
    if (proceed) {
      const url = `https://mighty-citadel-89364.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <h1 className="mb-8 text-4xl text-center">My Orders</h1>
        <img className="rounded-full mb-2" src={user.photoURL} alt="" />
        <h1 className="mb-4 text-xl ">
          Welcome to JustGo,{" "}
          <span className="font-bold text-gray-700">{user.displayName}</span>
        </h1>
        <h1 className="mb-8 text-xl ">
          Your Email,{" "}
          <span className="font-bold text-gray-700">{user.email}</span>
        </h1>
        <div class="flex bg-gray-800 text-white mb-8">
          <h3 className="flex-grow pl-6 rounded mb-4 mr-2 py-4">Thumbnail</h3>
          <h3 className="flex-grow pl-6 rounded mb-4 mr-2 py-4">Tour Title</h3>
          <h3 className="flex-grow pl-6 rounded mb-4 mr-2 py-4">Price</h3>
          <h3 className="flex-none pl-6 rounded mb-4 mr-2 py-4">Status</h3>
          <h3 className="flex-grow pl-6 rounded mb-4 mr-2 py-4">Action</h3>
        </div>
        {orders.map((order) => (
          <div
            class="grid md:grid-cols-2 lg:grid-cols-5   mx-auto"
            key={order._id}
          >
            <img
              className="rounded h-14 w-24 mr-2 mb-2"
              src={order.service.img}
              alt=""
            />
            <h3 className="flex-grow border-2 pl-4 rounded mb-4 mr-2 py-4">
              {order.service.name}
            </h3>
            <h3 className="flex-none border-2 px-4 rounded mb-4 mr-2 py-4">
              {order.service.price}
            </h3>
            <button className="px-8 flex-none rounded mb-4 mr-2 py-4 bg-green-500">
              {order.status}
            </button>
            <button
              onClick={() => handleDelete(order._id)}
              className="px-8 flex-none rounded mb-4 py-4 bg-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
