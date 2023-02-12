import Image from "next/image";
import styles from "../styles/contact.module.scss";

const Contact = () => {

  const infoArr: [string, string, string, boolean][] =
    [
      ["LinkedIn", "https://www.linkedin.com/in/saba-samkharadze-4ab97b22b/", "/logos/linkedin.png", true],
      ["Mobile", "+995 597 90 45 54", "logos/phone.png", false],
      ["E-mail", "samkharadze.saba01@gmail.com", "logos/mail.png", false]
    ];


  return (
    <div className={styles["main"]} >
      <div className={styles["main__content"]} >
        <div className={styles["main__content__linksWrapper"]} >
          {
            infoArr.map((info, i) =>
              <div key={infoArr[i][0]} className={styles["main__content__linksWrapper__linkWrapper"]} >
                <a
                  href={infoArr[i][1]}
                  target="_blank"
                  className={styles["main__content__linksWrapper__linkWrapper__link"]}
                >
                  {!infoArr[i][3] ?
                    `${infoArr[i][0]}:  ${infoArr[i][1]}`
                    :
                    <img src={infoArr[i][2]} alt={""} height="50" />
                  }
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};


export default Contact;