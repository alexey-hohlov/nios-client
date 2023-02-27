import { CopyrightIcon } from '../../assets';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <section className={styles.footer}>
            <p className={styles.age}>12+</p>
            <div className={styles.copyright}>
                <CopyrightIcon />
                <div>
                    <p>
                        2004-2021 Новосибирский информационно-образовательный
                        сайт
                    </p>
                    <p>
                        По заказу департамента образования мэрии города
                        Новосибирска
                    </p>
                </div>
            </div>
            <div>
                <p>Электронный адрес редакции: egida@yandex.ru</p>
                <p>Телефон: 314-03-03, 8-905-952-89-10</p>
            </div>
        </section>
    );
};

export default Footer;
