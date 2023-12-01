import styles from './TaskCounter.module.scss';

export function TaskCounter() {
    return (
        <div className={styles.divCounterTasks}>
            <p className={styles.createdTasks}>Tarefas criadas <span>5</span></p>
            <p className={styles.finishedTasks}>Concluídas <span>2 de 5</span></p>
        </div>
    );
}