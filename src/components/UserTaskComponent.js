import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

const UserTaskComponent = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllUserTasks();
    }, [])
    
    const getAllUserTasks=()=>{
           UserService.getAllUserTasks()
             .then((response) => {
               setTasks(response.data);
               console.log(response.data);
             }).catch((error) => {
               console.log(error);
             });
    }
    const deleteTask=(taskId)=>{
      UserService.deleteTask(taskId).then((response) => {
        if (response.data != null) {
          alert("Task Deleted Successfully!");
          getAllUserTasks();
        }
      });
     
    } 
  return (
    <div className="container">
      <h2 className="text-center">User Task Lists</h2>
      <Link to="/add-userTask" className="btn btn-primary mb-2">
        Add Task
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Task Id</th>
          <th>Task Description</th>
          <th>Task Updated Date</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.description}</td>
              <td>{task.updatedDate}</td>
              <td>
                <Link className="btn btn-info" to={"/edit-task/{task.id}"}>
                  Update
                </Link>
                <button className="btn btn-danger" onClick={() => deleteTask(task.id)}
                style={{marginLeft:'10px'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTaskComponent