import styles from "../styles/landing.module.scss";


const Landing = () => {
  return (
    <div className={styles["main"]} >
      <p className={styles["main__paragraph"]}>
        Welcome to my personal website!
        I am thrilled that you are visiting
        and taking the time to learn more about me.
      </p>
    </div>
  );
};

export default Landing;