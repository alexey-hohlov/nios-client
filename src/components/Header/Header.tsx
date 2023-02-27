import {
    BurgerIcon,
    CoatIcon,
    EyeIcon,
    NiosIcon,
    RutubeIcon,
    TelegramIcon,
    VKIcon,
} from '../../assets';
import { SearchBar } from '../../components';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <section className={styles.header}>
            <div className={styles.nav}>
                <NiosIcon />
                <BurgerIcon />
            </div>
            <div className={styles.socials}>
                <CoatIcon />
                <RutubeIcon />
                <VKIcon />
                <TelegramIcon />
            </div>
            <div className={styles.search}>
                <SearchBar />
                <div className={styles.visual}>
                    <EyeIcon />
                    <p>Версия для слабовидящих</p>
                </div>
            </div>
        </section>
    );
};

export default Header;
