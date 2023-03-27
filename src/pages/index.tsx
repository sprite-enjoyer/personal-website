import { useState } from "react";
import styles from "../styles/index.module.scss";
import VerticalNavbar from "@/components/VerticalNavbar";
import InfoBox from "@/components/InfoBox";
import Head from "next/head";


export default function Home() {
  const [section, setSection] = useState(0);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="google-site-verification" content="wjpeI_KoPBnmi1kCFd_pDp_ylKntjhtCnCWjbhwPY2o" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Saba Samkharadze - Fullstack/Frontend developer personal website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Saba Samkharadze" />
        <meta property="og:title" content="Saba Samkharadze" />
        <meta property="og:description" content="Fullstack/Frontend developer" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <title>{"Saba Samkharadze"}</title>
        <link rel="shortcut icon" href="favicon.svg" />
        <meta charSet="utf-8" />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:locale" content="en" />
      </Head>
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
          <InfoBox section={section} />
          <VerticalNavbar selected={section} setSelected={setSection} />
        </div>
      </div>
    </>
  );
}
