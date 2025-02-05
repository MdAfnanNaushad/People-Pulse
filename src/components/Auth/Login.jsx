//login page for both admin and user
import React, { useState } from "react";

const Login = ({ handleLogin }) => { //function to login which will acceptr login creedentials i.e,email and password and open the required dashboardas required (admin or user)
  const [email, setEmail] = useState("");//initializimng usestate for email and password
  const [password, setPassword] = useState(""); //initializimng usestate for email and password

  const submitHandler = (e) => { //function named submit handler for form handling purpose
    e.preventDefault(); //preventing default behaviour of form (tata is emtypingh the console after the form submission)
    handleLogin(email, password);//handle login is a function which will accept email and password and open the required dashboard
    setEmail(""); //after the form submission the email will be empty
    setPassword(""); //after the form submission the password will be empty
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => { //on form submission the submit handler function will be called
            submitHandler(e); //caling submit handler function
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email} //recieving email value
            onChange={(e) => { //on changing anything in the input field that is login page email field the value will be changed
              setEmail(e.target.value);//setting email by extracing only the val;ue from the target
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password} //recieving password value
            onChange={(e) => { //on changing anything in the input field that is login page password field the value will be changed
              setPassword(e.target.value); //setting password by extracing only the val;ue from the target
            }}
            required //passowrd is mandatiory field to accces any oif the dashboard
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
