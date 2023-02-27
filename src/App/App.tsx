import { Header, Footer } from '../components';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <div>content</div>
            <Footer />
        </div>
    );
}

export default App;
