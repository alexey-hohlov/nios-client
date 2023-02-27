import { GlassIcon } from '../../../assets';
import styles from './SearchBar.module.scss'

const SearchBar: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <input type="text" />
            <GlassIcon />
        </div>
    )
}

export default SearchBar;