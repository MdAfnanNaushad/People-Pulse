//AllTask will be visible to admin ton the admin dashboard to see the task status of all the employees that is which task is completed and due tasks as well
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider' //importing the authcontext from the authprovider to use the user data in the application

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext) //INITILIZING USESTATE ON THE BASIS OF aUTHcONTEXT

   
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(elem,idx){ //mapping from the auth Cpontext to get the data of all the users nd running a function to get the data of all the users to use in the specified place
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'> {/*since the data is required is stored in the array form therefore using key*/}
            <h2 className='text-lg font-medium  w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}

export default AllTask