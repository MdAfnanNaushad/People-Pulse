import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider' //recieving the authcontext from the authprovider to use the user data in the application

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext) //INITILIZING USESTATE ON THE BASIS OF aUTHcONTEXT
     //for setting up the task to an employeee few use state has been initialized
    const [taskTitle, setTaskTitle] = useState('') // setting up the title of the task
    const [taskDescription, setTaskDescription] = useState('') //setting up the description of the task
    const [taskDate, setTaskDate] = useState('') //setting up the date of the task  
    const [asignTo, setAsignTo] = useState('') //setting up the employee to whom the task is assigned
    const [category, setCategory] = useState('') //setting up the category of the task

    const [newTask, setNewTask] = useState({}) //sice the new task in contained in as an array therefore we have used braces in the usestate for new task

    const submitHandler = (e) => {  //form handling is required as we will have to assign the task to someone and then we will have to set the task to the user data
        e.preventDefault() //preventing the default behaviour of the form

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }) //seting the new task as per the required data

        const data = userData //storing all the data of the user in the data variable

        data.forEach(function (elem) { //since all the tasks are stored in the array form therefore we are using foreach loop to get the data of all the users and then running a function to get the data of all the users to use in the specified place
            if (asignTo == elem.firstName) { //if the task is assigned to the employee then the task will be pushed to the employee data
                elem.tasks.push(newTask) //pushing the new task to the employee data
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1 //since the count of the new task will be increased by 1 it should be eflected in the above tasklist
            }
        })
        setUserData(data) //after performing operations we are setting the data to the user data
        console.log(data); //and also logging the data for immediate clarification
     //after performing all the operation setion the tasks creation fields to empty
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value) //setting the task title by recvieving only the values
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value) //setting the task date by recvieving only the values
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value) //setting the task to the employee by recvieving only the values
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value) //setting the task category by recvieving only the values
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value) //setting the task description by recvieving only the values
                        }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask