import { PlusCircle } from '@phosphor-icons/react';
import styles from './AddTask.module.scss';

export function AddTask() {
    return (
        <div className={styles.divAddTask}>
            <form action="">
                <input type="text" placeholder='Adicione uma nova tarefa' />
                <button type='submit'>
                    Criar 
                    <PlusCircle size={16} />
                </button>
            </form>
        </div>
    );
}