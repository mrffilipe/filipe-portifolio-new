import styles from "./styles.module.css";

const Home = () => {
	return (
		<section id="home" className={styles.home}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Olá, sou <span className={styles.highlight}>Filipe</span>!
				</h1>
				<p className={styles.subtitle}>
					Desenvolvedor backend com experiência em frontend, mobile e mais.
				</p>
				<div className={styles.buttons}>
					<a href="#projects" className={`${styles.btn} ${styles.btn_primary}`}>
						Veja Meus Projetos
					</a>
					<a
						href="#contact"
						className={`${styles.btn} ${styles.btn_secondary}`}
					>
						Entre em Contato
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;