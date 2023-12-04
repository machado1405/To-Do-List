import styles from './TaskCounter.module.scss';

export function TaskCounter({ numberOfTasks, numberOfFinishedTasks }) {
    return (
        <div className={styles.divCounterTasks}>
            <p className={styles.createdTasks}>Tarefas criadas <span>{numberOfTasks}</span></p>
            <p className={styles.finishedTasks}>
                Concluídas <span>{numberOfFinishedTasks} de {numberOfTasks}</span>
            </p>
        </div>
    );
}