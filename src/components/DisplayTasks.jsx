import Task from "./Task";
import { useSelector } from "react-redux";

const DisplayTasks = () => {

    const data = useSelector((state) => state) || [];
    console.log(data);
  return (
    <div className="displayTasks">
        <div className="heading-div">
            <h3>Tasks</h3>
        </div>
        <div> 
            {
                data.map((task) => (
                    <Task key={task.id} task={task}/>
                ))
            }
            
        </div>
    </div>
  )
}

export default DisplayTasks