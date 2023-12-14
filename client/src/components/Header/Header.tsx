import { FC } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import logo from '../../images/logo.jpg';
import styles from './header.module.scss';

const Header: FC = () => {

    return (
        <header>
            <div className={styles.menu}>
                <Link to="/" className={styles.logo}>
                    <p className={styles.text}>ГО 
                        <span>&#32;"МІР"</span>
                    </p>
                    <img src={logo} width="60px" alt="logo" />
                </Link>
                <NavBar/>
            </div>
        </header>
    );
};

export default Header;