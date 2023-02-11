import { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/verticalNavbar.module.scss";

interface VerticalNavbarProps {
  selected: number,
  setSelected: Dispatch<SetStateAction<number>>;
}

const VerticalNavbar = ({ selected, setSelected }: VerticalNavbarProps) => {

  return (
    <div className={styles["main"]} >
      <ul className={styles["main__list"]} >
        <li className={styles["main__list__item"]}>
          <button className={styles["main__list__item__btn"]} onClick={() => setSelected(0)} >
            {selected === 0 ? <div className={styles["circle"]} /> : <span>Home</span>}
          </button>
        </li>
        <li className={styles["main__list__item"]}>
          <button className={styles["main__list__item__btn"]} onClick={() => setSelected(1)} >
            {selected === 1 ? <div className={styles["circle"]} /> : <span>Projects</span>}
          </button>
        </li>
        <li className={styles["main__list__item"]}>
          <button className={styles["main__list__item__btn"]} onClick={() => setSelected(2)} >
            {selected === 2 ? <div className={styles["circle"]} /> : <span>Contact</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default VerticalNavbar;