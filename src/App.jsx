import './App.css';
import AddForm from './components/AddForm';
import DisplayTasks from './components/DisplayTasks';

function App() {

  return (
    <div>
      <h1 className='dashboard'>Task Management Dashboard</h1>
      <AddForm/>
      <DisplayTasks/>
    </div>
  )
}

export default App
