import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from 'react-toastify';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async(data) => {
    setIsSubmitting(true);
    try{
      const response = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      if(!response.ok){
        throw new Error("No such user exists. Please sign up.");
      }
      const result = await response.json();
      toast.success( result.message);
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-md mx-auto p-8 m-10 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <p className="mb-4 text-center">
        Don&apos;t have an account yet? 
        <NavLink to="/signup" className="text-purple-500 hover:underline"> Create it here</NavLink>
      </p>
      <div className="mb-4">
        <input
          {...register("email", {
            required: { value: true, message: "This field is required" },
          })}
          type="text"
          placeholder="Email or Username"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {errors.username && <div className="text-red-500 mt-1">{errors.username.message}</div>}
      </div>
      <div className="mb-4">
        <input
          {...register("password", {
            required: { value: true, message: "This field is required" },
          })}
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {errors.password && <div className="text-red-500 mt-1">{errors.password.message}</div>}
      </div>
      <a href="#" className="text-purple-500 hover:underline mb-6 block text-right">Forgot your password?</a>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300"
      >
       {isSubmitting ? "Submitting..." : "Login →"} 
      </button>
    </form>
  );
};

export default Signin;

  