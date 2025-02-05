import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
 //importing header,create task and all task component which is required  in tyhe admin dashboard
const AdminDashboard = (props) => { //admindashboard is a function which is recieving the all the above imported data as props
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser}  /> {/*header component is called and change user is passed as props*/}
            <CreateTask /> {/*create task component is called to assign everyday task to the respective employees*/}
            <AllTask /> {/*all task component is called(to list all the tasks) of all the employees working*/}
        </div>
    )
}

export default AdminDashboard