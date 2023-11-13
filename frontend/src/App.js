import styles from './AppNew.module.css'
import SidebarNew from './components/SidebarNew';
import MainNew from './components/MainNew';
import PlayBar from './components/Playbar';
import './api/axiosDefaults';

const App = () => {

    return (
        <div className={styles.outerWrap}>
            <div className={styles.AppNew}>
                <SidebarNew />
                <MainNew />
            </div>
            <div className={styles.musicControls}>
                <PlayBar />
            </div>
        </div>
    );
}

export default App;