import { AddTask } from './Components/AddTask'
import { Header } from './Components/Header'
import { Task } from './Components/Task'
import { TaskCounter } from './Components/TaskCouter'
import './global.scss'
import styles from './App.module.scss';

function App() {

  return (
    <>
      <Header />
      <section className={styles.mainWrapper}>
        <AddTask />
        <TaskCounter />
        <Task />
        <Task />
        <Task />
      </section>
    </>
  )
}

export default App
