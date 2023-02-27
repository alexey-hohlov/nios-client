import { Header, Footer, Resources } from '../components';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <div>content</div>
            <Resources />
            <Footer />
        </div>
    );
}

export default App;
