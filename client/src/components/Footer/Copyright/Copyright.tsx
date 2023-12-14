import { FC } from "react";
import styles from './copyright.module.scss';

const Copyright: FC = () => {

    return (
        <div className={styles.footer}>
            <p className={styles.text}>
                &#169; 2023 &#124; All Rights Reserved &#124; Developed with
            </p>
            <svg
                className={styles.icon}
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="var(--accent-color)"
            >
                <path
                d="M16 30.144l-2.24-2.218c-8.32-7.287-13.76-12.198-13.76-18.218 0-4.911 3.84-8.713 8.8-8.713 2.72 0 5.44 1.267 7.2 3.327 1.76-2.059 4.48-3.327 7.2-3.327 4.96 0 8.8 3.802 8.8 8.713 0 6.020-5.44 10.931-13.76 18.218l-2.24 2.218z"
                ></path>
            </svg>
            <p className={styles.text}>by</p>

            <a
                className={styles.link}
                href="https://t.me/odesskiyshkiper"
                target="_blank"
                rel="noreferrer"
                >Oleksandr
                <span className={styles.item}> Domanskyi</span>
            </a>
        </div>
    );
};

export default Copyright;