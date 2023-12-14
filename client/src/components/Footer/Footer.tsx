import { FC } from "react";
import styles from './footer.module.scss';
import Copyright from "./Copyright";
import Contacts from "./Contacts";

const Footer: FC = () => {

    return (
        <footer>
            <div className="container">
                <div className={styles.footer}>
                    <Contacts/>
                </div>
                <Copyright/>
            </div>
        </footer>
    );
};

export default Footer;