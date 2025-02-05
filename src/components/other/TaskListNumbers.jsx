import React from "react";
//taskList numbers component is used to display the number of tasks assigned to the user in the employee dashboard
const TaskListNumbers = ({ data }) => {
  //recieving the data as props to display the number of tasks assigned to the user as differentiating the types of task as well
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      {/*task Counts is an array therefore therefore we are extracting the requred field of data from the dot . operator*/}
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-bold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400 ">
        <h2 className="text-3xl text-black font-bold">
          {data.taskCounts.active}
        </h2>
        <h3 className="text-xl mt-0.5 text-black font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
