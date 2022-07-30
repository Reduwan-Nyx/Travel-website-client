import React, { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import useServices from "../../Hooks/useServices";

const ManageTour = () => {
  const [services, setServices] = useServices();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://mighty-citadel-89364.herokuapp.com/manage-order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleStatus = (id) => {
    console.log("hitted");
    const updateInfo = {
      status: "approved",
    };
    const url = `https://mighty-citadel-89364.herokuapp.com/approve/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Update Successful!",
            "Your order has been updated.",
            "success"
          );
          fetch("https://mighty-citadel-89364.herokuapp.com/manage-order")
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }
      });
  };

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
    <div className="w-3/4 mx-auto">
      <h1 className="mb-8 text-4xl text-center">Manage All Tour</h1>
      <div class="flex bg-gray-800 text-white mb-8">
        <h3 className="flex-1 pl-6 rounded mb-4 mr-2 py-4">Thumbnail</h3>
        <h3 className="flex-1 pl-6 rounded mb-4 mr-2 py-4">Name</h3>
        <h3 className="flex-1 pl-6 rounded mb-4 mr-2 py-4">Tour Title</h3>
        <h3 className="flex-1 pl-6 rounded mb-4 mr-2 py-4">Address</h3>
        <h3 className="flex-1 pl-6 rounded mb-4 mr-2 py-4">Number</h3>
        <h3 className="flex-1 pl-6 rounded mb-4 mr-2 py-4">Date</h3>
        <h3 className="flex-1 pl-6 rounded mb-4 mr-2 py-4">Status</h3>
        <h3 className="flex-1 pl-6 rounded mb-4 mr-2 py-4">Action</h3>
      </div>
      {orders.map((order) => (
        <div
          class="grid md:grid-cols-2 lg:grid-cols-8   mx-auto"
          key={order._id}
        >
          <img
            className="rounded h-14 w-24 mr-2 mb-2"
            src={order.service.img}
            alt=""
          />
          <h3 className="flex-initial border-2 p-2 rounded mb-4 mr-2 py-4">
            {order.userName}
          </h3>
          <h3 className="flex-1 border-2 pl-4 rounded mb-4 mr-2 py-4">
            {order.Name}
          </h3>
          <h3 className="flex-1 border-2 pl-4 rounded mb-4 mr-2 py-4">
            {order.Address}
          </h3>
          <h3 className="flex-1 border-2 pl-4 rounded mb-4 mr-2 py-4">
            {order.Number}
          </h3>
          <h3 className="flex-1 border-2 pl-4 rounded mb-4 mr-2 py-4">
            {order.Date}
          </h3>
          <button
            onClick={() => handleStatus(order._id)}
            className="px-8 flex-none rounded mb-4 mr-2 py-4 bg-green-500"
          >
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
  );
};

export default ManageTour;
