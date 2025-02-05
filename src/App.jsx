import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
//importing the required data so that it can be used in the application where veer required
const App = () => {

  const [user, setUser] = useState(null) //firstly setting the user as null
  const [loggedInUserData, setLoggedInUserData] = useState(null) //setting the loggedinuserdata as null
  const [userData,SetUserData] = useContext(AuthContext) //INITILIZING USESTATE ON THE BASIS OF aUTHcONTEXT

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser') // getting the data of the logged in user from the local storage
    
    if(loggedInUser){ //if the required loggedin user data is present then it will be parsed and set to the user data
      const userData = JSON.parse(loggedInUser) //parsing the data in JSON format
      setUser(userData.role) //getting the role of user from the data
      setLoggedInUserData(userData.data) //setting the data of the user the data we fgot from the local storage
    }

  },[]) //empty array is passed as the second argument to run the useeffect only once


  const handleLogin = (email, password) => {// handle login is a function that is used to handle the login of the user
    if (email == 'admin@me.com' && password == '123') { //if the login credentials match with then admin admin dashboard will open
      setUser('admin')//setv user as admin
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' })) //setting the data of the logged in user in the local storage
    } else if (userData) {//if userdata is present then it would be checked if the email and password is presnt or not in the local storage file
      const employee = userData.find((e) => email == e.email && e.password == password) //if the email and password is present then the employee data will be set to the user data
      if (employee) { //if tyhe correct credentials are found then the employee dashboard will open
        setUser('employee')
        setLoggedInUserData(employee) //user logged in data in the frontend part localstorage is set to employee with the data of the employee recieved above
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials") ;//if no results matched then the invalid credentials will be shown
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App