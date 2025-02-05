import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
 //importing header,tasklistnumbers and tasklist component which is required  in tyhe employee dashboard
const EmployeeDashboard = (props) => { //recieving th above imported data as props

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/> {/*header component is called and change user is passed as props to display on the screen who is the user*/}
        <TaskListNumbers data={props.data} /> {/*tasklistnumbers component is called and data is passed as props to display the number of tasks assigned to the user*/}
        <TaskList data={props.data} /> {/*tasklist component is called and data is passed as props to display the tasks assigned to the user what are the due tasks what are the completed tasks and what are the failed tasks*/}
    </div>
  )
}

export default EmployeeDashboard