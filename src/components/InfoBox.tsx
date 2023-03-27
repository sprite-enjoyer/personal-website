import styles from "../styles/infoBox.module.scss";
import { Dispatch, Fragment, ReactNode } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import Landing from "./Landing";

export interface InfoBoxProps {
  section: number,
}

const InfoBox = ({ section }: InfoBoxProps) => {

  const map = new Map<number, ReactNode>(
    [[0, <Landing key={1} />],
    [1, <Projects key={2} />],
    [2, <Contact key={3} />]]
  );
  const reactNode = map.has(section) ? map.get(section) : <Fragment key={4}>error!</Fragment>;

  return (
    <div className={styles["main"]} >
      {reactNode}
    </div>
  );
};
export default InfoBox;