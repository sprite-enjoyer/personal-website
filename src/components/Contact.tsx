import styles from "../styles/contact.module.scss";
import Image from 'next/image';

const Contact = () => {

  const infoArr: [string, string, string][] =
    [
      ["GitHub", "https://github.com/sprite-enjoyer", "/logos/github.svg"],
      ["LinkedIn", "https://www.linkedin.com/in/saba-samkharadze-4ab97b22b/", "/logos/linkedin.png"],
      ["Mobile", "+995 597 90 45 54", "logos/phone.png"],
      ["E-mail", "samkharadze.saba01@gmail.com", "logos/mail.png"]
    ]



  return (
    <div className={styles["main"]} >
      <div className={styles["main__content"]} >
        <div className={styles["main__content__buttonsWrapper"]} >
          <div >
            <a href={infoArr[0][1]} target="_blank" className={styles["main__content__buttonsWrapper__btn"]} >
              <Image
                className={styles["main__content__imgContainer__img"]}
                src={infoArr[0][2]}
                alt={""}
                width={50}
                height={50}
              />
            </a>
          </div>
          <div >
            <a href={infoArr[1][1]} className={styles["main__content__buttonsWrapper__btn"]} target="_blank">
              <Image
                width={60}
                height={50}
                className={styles["main__content__imgContainer__img"]}
                src={infoArr[1][2]}
                alt={""}
              />
            </a>
          </div>
        </div>
        <div className={styles["main__content__linksWrapper"]} >
          <div className={styles["main__content__linksWrapper__linkWrapper"]} >
            <a
              className={styles["main__content__linksWrapper__linkWrapper__link"]}
              href="tel:+995-597-904-554">
              {infoArr[2][0]}{":  "}{infoArr[2][1]}
            </a>
          </div>
          <br />
          <div className={styles["main__content__linksWrapper__linkWrapper"]} >
            <a
              className={styles["main__content__linksWrapper__linkWrapper__link"]}
              href="mailto:samkharadze.saba01@gmail.com">
              {infoArr[3][0]}{":  "}{infoArr[3][1]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;