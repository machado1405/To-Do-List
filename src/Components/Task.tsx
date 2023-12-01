import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.scss';

export function Task() {
    return (
        <article className={styles.articleTask}>
            <label className={styles.main}>
                <input type="checkbox" /> 
                <span className={styles.geekmark}></span> 
            </label>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button><Trash size={32} /></button>
        </article>
    );
}