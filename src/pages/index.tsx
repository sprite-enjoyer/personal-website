import { useState } from "react";
import styles from "../styles/index.module.scss";
import VerticalNavbar from "@/components/VerticalNavbar";
import InfoBox from "@/components/InfoBox";

export default function Home() {
  const [section, setSection] = useState(0);

  return (
    <div className={styles["wrapper"]} >
      <div className={styles["main"]} >
        <div className={styles["main__header"]}>
          <h1 className={styles["main__header__name"]} >
            Saba Samkharadze
          </h1>
          <span className={styles["main__header__subscript"]} >
            FullStack/Frontend Developer
          </span>
        </div>
        <InfoBox section={section} setSection={setSection} />
        <VerticalNavbar selected={section} setSelected={setSection} />
      </div>
    </div>
  );
}
