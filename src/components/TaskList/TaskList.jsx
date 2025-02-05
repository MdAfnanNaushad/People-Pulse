import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => { //these are the total number of tasks and history of the tasks which are assigned to the user and tyhe pe4rformance of the user qith respect to thecurrent tasks assigned to the user
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => { //mapping the tasks to display the task details as tasklist is an array in the localstorage file therefore only we are using map function as well as 
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} /> //elem to the required task details
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
        </div>
    )
}

export default TaskList