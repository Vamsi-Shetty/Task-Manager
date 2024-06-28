import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action";

const AddForm = () => {
    // const [tasks, setTasks] = useState([]);
    const [taskName, setTaskname] = useState("");
    const [taskStatus, setTaskStatus] = useState("Yet to start");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            task: taskName,
            status: taskStatus
        }
        dispatch(addTask(newTask));
        setTaskname("");
    }

  return (
    <div className="addForm">
        <form onSubmit={handleSubmit}>
            <input
             type="text" 
             value={taskName}
             placeholder="Enter Task Name"
             onChange={e => setTaskname(e.target.value)}
            />
            <input type="submit"/>
        </form>
    </div>
  )
}

export default AddForm