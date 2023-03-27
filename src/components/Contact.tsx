import styles from "../styles/contact.module.scss";
import { Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ToolTipInfos {
  email: string,
  emailBackgroundColor: string,
  phone: string,
  phoneBackgroundColor: string,
}

const Contact = () => {
  const [toolTipContent, setToolTipContent] = useState<ToolTipInfos>({
    email: "Click to copy!",
    emailBackgroundColor: "rgb(200, 200, 200)",
    phone: "Click to copy!",
    phoneBackgroundColor: "rgb(200, 200, 200)",
  });

  const onClickHandler = (content: "email" | "phone") => {
    setToolTipContent({
      email: content === "email" ? "copied!" : "Click to copy!",
      emailBackgroundColor: content === "email" ? "#5cb85c" : "rgb(200, 200, 200)",
      phone: content === "phone" ? "copied!" : "Click to copy!",
      phoneBackgroundColor: content === "phone" ? "#5cb85c" : "rgb(200, 200, 200)"
    });
    if (content === "email") navigator.clipboard.writeText("samkharadze.saba01@gmail.com");
    else navigator.clipboard.writeText("+995 597 90 45 54");
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setToolTipContent({
        email: "Click to copy!",
        emailBackgroundColor: "rgb(200, 200, 200)",
        phone: "Click to copy!",
        phoneBackgroundColor: "rgb(200, 200, 200)",
      });
    }, 5000);

    return () => clearTimeout(timeOutId);
  }, [toolTipContent]);

  return (
    <div className={styles["main"]} >
      <div className={styles["main__content"]} >
        <div className={styles["main__content__wrapper"]} >
          <a
            className={styles["main__content__wrapper__info-piece"]}
            href="https://www.linkedin.com/in/saba-samkharadze-4ab97b22b/"
          >
            <img src="/logos/linkedin.png" height={70} />
          </a>
          <Tooltip
            placement="left"
            style={{ width: "100%", font: "inherit" }}
            content={toolTipContent.email}
            css={{ backgroundColor: toolTipContent.emailBackgroundColor }}
            hideArrow
          >
            <button
              className={styles["main__content__wrapper__info-piece"]}
              onClick={() => onClickHandler("email")}
            >
              E-mail: samkharadze.saba01@gmail.com
            </button>
          </Tooltip>

          <Tooltip
            placement="left"
            style={{ width: "100%", font: "inherit" }}
            css={{ backgroundColor: toolTipContent.phoneBackgroundColor }}
            content={toolTipContent.phone}
            hideArrow
          >
            <button
              onClick={() => onClickHandler("phone")}
              className={styles["main__content__wrapper__info-piece"]}
            >
              Mobile: +995 597 90 45 54
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};


export default Contact;