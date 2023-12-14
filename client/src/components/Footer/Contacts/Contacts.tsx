import { FC } from "react";
import tg_qr from '../../../images/tg_qr.jpg';
import fb_qr from '../../../images//fb_qr.jpg';
import insta_qr from '../../../images/insta_qr.jpg';
import styles from './contacts.module.scss';

const Contacts: FC = () => {

    return (
        <>
            <h2 className={styles.title}>Долучайтесь до нас:</h2>
            <ul className={styles.list}>
                <li>
                    <a href="https://t.me/gomiruk" target="_blank" rel="noopener noreferrer">
                        <img src={tg_qr} width="120px" alt="telegram" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/groups/643719016423600/?ref=share" target="_blank" rel="noopener noreferrer">
                        <img src={fb_qr} width="120px" alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/go_mir2022?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer">
                        <img src={insta_qr} width="120px" alt="instagram" />
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Contacts;