import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://volunteer-network-server-st9g.onrender.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="my-3">Add a Service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-3" placeholder="Name" {...register("name")} />
        <input
          className="mb-3"
          placeholder="Photo URL"
          type="text"
          {...register("picture")}
        />
        <input className="btn btn-primary" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
