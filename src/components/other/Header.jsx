import React, { useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  //seting the user data to the props to use it in the application

  // const [username, setUsername] = useState('')

  // if(!props.firstName){
  //   setUsername('Admin')
  // }else{
  //   setUsername(props.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", ""); //when the employee looged out from the application then setting the userdata to empty
    props.changeUser(""); //changing the user data to empty as no one is loggedin
    // window.location.reload() //reloading the page to get the updated data
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello there, <br />{" "}
        <span className="text-3xl font-semibold">{props.firstname} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
