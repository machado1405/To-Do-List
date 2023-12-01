import { AddTask } from './Components/AddTask'
import { Header } from './Components/Header'
import { Task } from './Components/Task'
import { TaskCounter } from './Components/TaskCouter'
import './global.scss'

function App() {

  return (
    <>
      <Header />
      <AddTask />
      <TaskCounter />
      <Task />
      <Task />
      <Task />
    </>
  )
}

export default App
