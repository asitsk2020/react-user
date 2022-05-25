import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState,useEffect } from "react";
import UserService from "../services/UserService";

const AddUserTaskComponent = () => {
  const [description, setDescription] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const navigate = useNavigate();
  //const { id } = useParams();

  const saveUserTask = (e) => {
    e.preventDefault();
    const task = { description, createdDate };
    UserService.saveUserTask(task)
      .then((response) => {
        console.log(response.data);
        navigate("/users");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  /* useEffect(() => {
    
    UserService.getUserTaskById(id).then((response)=>{
            setDescription(response.data.description)
            setUpdatedDate(response.data.updatedDate)
    }).catch(error=>{
        console.log(error);
    })
  },)
  
   const title= ()=>{
      if(id){
          return <h2 className="text-center"> Update Task</h2>
      }else{
           return <h2 className="text-center"> Add Task</h2>;
      }
  } */
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="card col-md-6 offset-mb-3 offset-md-3">
          <h2 className="text-center"> Add Task</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> Description : </label>
                <input
                  type="text"
                  placeholder="Enter Task Description"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label"> Date : </label>
                <input
                  type="date"
                  placeholder="Enter Date"
                  name="createdDate"
                  className="form-control"
                  value={createdDate}
                  onChange={(e) => setCreatedDate(e.target.value)}
                ></input>
              </div>
              <button
                className="btn btn-success"
                onClick={(e) => saveUserTask(e)}
              >
                Submit
              </button>
              <Link
                to="/users"
                className="btn btn-danger"
                style={{ marginLeft: "10px" }}>
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserTaskComponent;
