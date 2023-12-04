import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.scss';
import { useState } from 'react';

interface TaskProps {
    task: string,
    deleteTask: (task:string) => void,
    countFinishedTasks: (counter:number) => void,
}

export function Task({ task, deleteTask, countFinishedTasks }: TaskProps) {

    const [textTaskFinished, setTextTaskFinished] = useState('');

    function handleDeleteTask() {
        deleteTask(task);
    }

    function handleClass() {
        let counter = 0;
        if (textTaskFinished === 'textFinished') {
            counter--;
            setTextTaskFinished('');
            countFinishedTasks(counter);
        } else {
            counter++;
            setTextTaskFinished('textFinished');
            countFinishedTasks(counter);
        }
    }
    
    if (task) {
        return (
            <article className={styles.articleTask}>
                <label className={styles.main}>
                    <input type="checkbox" /> 
                    <span onClick={handleClass} className={styles.geekmark}></span> 
                </label>
                <p className={textTaskFinished === 'textFinished' ? styles.textFinished : ''}>{task}</p>
                <button onClick={handleDeleteTask}><Trash size={28} /></button>
            </article>
        );
    } else {
        return null;
    }
}