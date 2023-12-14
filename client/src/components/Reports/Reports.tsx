import { FC } from "react";
import yaremche from '../../images/yaremche.jpg'
import styles from './reports.module.scss';

const Reports: FC = () => {

    return (
        <div className="container">
            <h2 className={styles.title}>ЗВІТИ</h2>
            <h3 className={styles.text__title}>Один з проєктів це Психологічна реабілітація родин ветеранів</h3>
            <p className={styles.text}>
                Багато військових отримали поранення, були в полоні, втратили своїх побратимів та зазнали ПТСР. Ці люди зі зміненою психікою потребують дбайливого специфічного відношення спрямованого на їх успішну соціалізацію та соціально-психологічну адаптацію до умов нового мирного життя.
            </p>
            <p className={styles.text}>
                Згідно офіційних даних,великий відсоток (до20%) здійснили самогубство. До 80% осіб з діагнозом ПТСР не отримують своєчасної та кваліфікованої допомоги, починають вживати алкоголь та ПАР.
            </p>
            <p className={styles.text}>
                Все частіше до статистичних даних потрапляють злочини, скоєні військовими. Втричі збільшилась кількість звернень на «гарячу лінію» від жінок, які постраждали від насильства в сім’ях військових.
            </p>
            <p className={styles.text}>
                Ця статистика вимагає втручання держави і суспільства в ситуацію. Але, за даними військової прокуратури, рівень забезпечення психологічної реабілітації з боку держави склав лише 10% від загальної кількості.
            </p>
            <p className={styles.text}>Психологічної реабілітації потребує 80% ветеранів і їхніх родин.</p>
            <h4 className={styles.text__title}>Цілі проєкту:</h4>
            <p className={styles.text}>
                Підвищення рівня якості життя в сім’ях ветеранів, загиблих, полонених і зниклих безвісті, волонтерів ЗСУ Одеського регіону через:
            </p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p>Стабілізацію психо-емоційного стану</p>
                </li>
                <li className={styles.item}>
                    <p>Адаптацію і ресоціалізацію</p>
                </li>
                <li className={styles.item}>
                    <p>Зміцнення сімейних відносин</p>
                </li>
            </ul>
            <p className={styles.text}>
                В нашій організації є база в Яремчі, куди запланований виїзд людей яким потрібна реабілітація, де спеціалісти ГО «Святого Павла» проведуть заплановані активності згідно підписаного договору між нашими організаціями.
            </p>
            <picture>
                <img src={yaremche} alt="Yaremche Base" />
            </picture>
        </div>
    );
};

export default Reports;