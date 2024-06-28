import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';

const EditForm = (task) => {
  const dispatch = useDispatch();

    const [taskName, setTaskname] = useState(task.task);

    useEffect(() => {
      setTaskname(task.task);
    },[task])

    const handleEdit = (e) => {
      e.preventDefault();
      dispatch(editTask(taskName));
    }
  return (
    <div>
        <form onSubmit={handleEdit}>
            <input
             type="text" 
             value={taskName}
             placeholder="Enter Task Name"
             onChange={e => setTaskname(e.target.value)}
            />
        </form>
    </div>
  )
}

export default EditForm