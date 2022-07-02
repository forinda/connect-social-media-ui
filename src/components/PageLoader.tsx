import styles from './../scss/loader.module.scss';
const PageLoader = () => (
	<div className={styles.wrapper_loader}>
		<span className={styles.loader}></span>
	</div>
);
export default PageLoader;
