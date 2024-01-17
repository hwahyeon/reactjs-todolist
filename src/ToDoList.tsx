import React, { useState } from "react";
import { useForm } from "react-hook-form";



function ToDoList() {
  const { register, handleSubmit } = useForm();
  const onValid = (data:any) => {
    console.log(data)
  }; 
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;