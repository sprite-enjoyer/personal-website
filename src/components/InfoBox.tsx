import styles from "../styles/infoBox.module.scss";
import { Dispatch, ReactNode } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import Landing from "./Landing";

export interface InfoBoxProps {
  section: number,
  setSection: Dispatch<any>
}

const InfoBox = ({ section, setSection }: InfoBoxProps) => {

  const map = new Map<number, ReactNode>(
    [[0, Landing()],
    [1, Projects()],
    [2, Contact()]]
  );
  const reactNode = map.has(section) ? map.get(section) : <>error!</>;

  return (
    <div className={styles["main"]} >
      {reactNode}
    </div>
  );
};
export default InfoBox;