import styles from '../styles/Home.module.css';
import Location from './Location';
import Redirect from './Redirect';

function Home() {
	return (
		<div className={styles.main}>
			<Location />
			<Redirect />
		</div>
	);
}

export default Home;
