import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTask, editTask } from "../redux/action";
import EditForm from "./EditForm";

const Task = ({task}) => {

    const [editing, setEditing] = useState(false);
    const [status, setStatus] = useState("Yet to Start");

    const dispatch = useDispatch();

    const handleEdit = (task) => {
      setEditing(!editing);
      dispatch(editTask(task));
    }

    const handleDelete = () => {
      dispatch(deleteTask(task.id));
    }



  return (
    <div className="task-row">
        {editing ? <EditForm task={task.task}/> : <p>{task.task}</p>}
        <button onClick={() => handleEdit(task)}>{editing ? "Submit" : "Edit"}</button>
        {editing ? <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Yet to Start">Yet to Start</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
        </select> :
        <p>{task.status}</p>}
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Task