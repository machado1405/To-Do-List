import { AddTask } from './Components/AddTask'
import { Header } from './Components/Header'
import { Task } from './Components/Task'
import { TaskCounter } from './Components/TaskCouter'
import './global.scss'
import styles from './App.module.scss';
import { useState, useEffect } from 'react';

function App() {

  const [addTask, setAddTask] = useState(['']);
  const [counterTask, setCounterTask] = useState(0);
  const [finishedTasks, setFinishedTasks] = useState(0);

  function countFinishedTasks(counter:number) {
    setFinishedTasks(finishedTasks + counter);
  }

  function createNewTask(task:string) {
    setAddTask([...addTask, task]);
  }

  function deleteTask(taskText:string) {
    const taskWithoutDeletedOne = addTask.filter(task => {
      return task !== taskText;
    });
    
    setAddTask(taskWithoutDeletedOne);
  }
  
  useEffect(() => {
    if (addTask.length < 1) {
      setCounterTask(0);
    } else {
      setCounterTask(addTask.length - 1);
    }
  }, [addTask]);

  return (
    <>
      <Header />
      <section className={styles.mainWrapper}>
        <AddTask createNewTask={createNewTask} />
        <TaskCounter numberOfTasks={counterTask} numberOfFinishedTasks={finishedTasks} />
        {
          addTask.map(task => {
            return <Task key={task} task={task} deleteTask={deleteTask} countFinishedTasks={countFinishedTasks}  />
          })
        }

      </section>
    </>
  )
}

export default App
