import logo from '../assets/logo-todo.svg';
import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.headerMain}>
            <img src={logo} alt="Logo To Do List" />
        </header>
    );
}