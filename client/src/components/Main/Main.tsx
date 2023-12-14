import { FC } from "react";
import ganna from '../../images/team/ganna.jpg';
import inna from '../../images/team/inna.jpg';
import lara from '../../images/team/lara.jpg';
import natalia from '../../images/team/natalia.jpg';
import olena from '../../images/team/olena.jpg';
import sergiy from '../../images/team/sergiy.jpg';
import styles from './main.module.scss';

const Main: FC = () => {

    return (
        <div className="container">
            <h2 className={styles.title}>ВІЗІЯ БЛАГОДІЙНОЇ ОРГАНІЗАЦІЇ «Фонд «МІР»».</h2>
            <p className={styles.text}>
                БО «МІР» - це організація з високою корпоративною культурою, інноваційною освітою та постійним прагненням досконалості.
            </p>
            <h3 className={styles.title}>НАША МІСІЯ</h3>
            <p className={styles.text}>
                Впровадження програми комплексної психологічної реабілітації для подолання наслідків психотрамвування та реадаптації ветеранів на території Одеської області та просування на рівні держави.
            </p>
            <h3 className={styles.title}>НАШІ ЦІННОСТІ</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p>Справедливість</p>
                </li>
                <li className={styles.item}>
                    <p>Солідарність</p>
                </li>
                <li className={styles.item}>
                    <p>Відкритість і прозорість</p>
                </li>
                <li className={styles.item}>
                    <p>Відповідальність</p>
                </li>
                <li className={styles.item}>
                    <p>Співпраця</p>
                </li>
                <li className={styles.item}>
                    <p>Інклюзія</p>
                </li>
                <li className={styles.item}>
                    <p>Соціальна відповідальність</p>
                </li>
                <li className={styles.item}>
                    <p>Громадянська активність</p>
                </li>
            </ul>
            <h3 className={styles.title}>НАША КОМАНДА</h3>
            <ul className={styles.team}>
                <li className={styles.card}>
                    <picture className={styles.photo}>
                        <img src={inna} alt="Taranina Inna" width='340px' height='450px'/>
                    </picture>
                    <h4 className={styles.name}>Тараніна Інна</h4>
                </li>
                <li className={styles.card}>
                    <picture className={styles.photo}>
                        <img src={sergiy} alt="Gvozdev Sergiy" width='340px' height='450px'/>
                    </picture>
                    <h4 className={styles.name}>Гвоздьов Сергій</h4>
                </li>
                <li className={styles.card}>
                    <picture className={styles.photo}>
                        <img src={ganna} alt="Ganna Iliushenkova" width='340px' height='450px'/>
                    </picture>
                    <h4 className={styles.name}>Ганна Ільющенкова</h4>
                </li>
                <li className={styles.card}>
                    <picture className={styles.photo}>
                        <img src={natalia} alt="Natalia Lavrova" width='340px' height='450px'/>
                    </picture>
                    <h4 className={styles.name}>Наталя Лаврова</h4>
                </li>
                <li className={styles.card}>
                    <picture className={styles.photo}>
                        <img src={lara} alt="Lara Pivovarova" width='340px' height='450px'/>
                    </picture>
                    <h4 className={styles.name}>Лара Півоварова</h4>
                </li>
                <li className={styles.card}>
                    <picture className={styles.photo}>
                        <img src={olena} alt="Olena Bilozub" width='340px' height='450px'/>
                    </picture>
                    <h4 className={styles.name}>Олена Білозуб</h4>
                </li>
            </ul>
        </div>
    );
};

export default Main;