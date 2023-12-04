import { PlusCircle } from '@phosphor-icons/react';
import styles from './AddTask.module.scss';
import { FormEvent } from 'react';

export interface NewTaskProps {
    createNewTask: (task:string) => void,
}

export function AddTask({ createNewTask }: NewTaskProps) {

    function handleTask(event: FormEvent) {
        event?.preventDefault();
        const newTask = event.target.taskInput.value;
        
        createNewTask(newTask);
    }

    return (
        <div className={styles.divAddTask}>
            <form onSubmit={handleTask}>
                <input name="taskInput" type="text" placeholder='Adicione uma nova tarefa' />
                <button type='submit'>
                    Criar 
                    <PlusCircle size={16} />
                </button>
            </form>
        </div>
    );
}