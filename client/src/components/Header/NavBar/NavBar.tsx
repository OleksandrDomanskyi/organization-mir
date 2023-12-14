import { FC } from "react";
import { NavLink } from "react-router-dom";
import { items } from "./items";
import styles from './nav-bar.module.scss';

const getActiveLink = ({isActive}: { isActive: boolean }) => {
    return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`
}

const NavBar: FC = () => {

    const elements = items.map((item) => (
        <li key={item.id}>
            <NavLink to={item.to} className={getActiveLink}>
                {item.text}
            </NavLink>
        </li>
    ));

    return (
        <nav>
            <ul className={styles.menu}>
                {elements}
            </ul>
        </nav>
    );
};

export default NavBar;