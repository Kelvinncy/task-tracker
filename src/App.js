import Header from './components/Header';
import './index.css'
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        remind: true
    }, 
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        reminder: false
    }
])

//Delete task
  const deleteTask = (id) => {
    console.log("onDelete")
    setTasks(tasks.filter((task) => task.id !== id))
  }

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Toggle Reminder
const ToggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div  className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleReminder}/> : 'No Tasks'
      }
    </div>
  )
}

export default App;
