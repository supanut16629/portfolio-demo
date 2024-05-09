import React from "react";
import { useTranslation } from "react-i18next";
import ImageSlider from "./ImageSlider";
import img1 from "../image/abstract-bg1.jpg";
import img2 from "../image/abstract-bg2.jpeg";
import img3 from "../image/abstract-bg3.jpeg";
import img4 from "../image/abstract-luxury-bg1.jpg";
import myImg from "../image/2.jpg";
import faceLogo from "../image/Facebook_Logo.png";
import phoneLogo from "../image/phone_icon.png";
import lineLogo from "../image/line_icon.png";
import emailLogo from "../image/email_icon_2.png";
import githubLogo from "../image/github_icon.png";
import addressLogo from "../image/address_icon.png";

const Body = ({ aboutMe, contact, project, scrollToSection }) => {
  const imageURLs = [img1, img2, img3, img4];
  const [t, i18n] = useTranslation("global");
  return (
    <div className="text-white body-sec">
      <section className="firstSec">
        <ImageSlider imageURLs={imageURLs} scrollToSection={scrollToSection} />
      </section>
      <section ref={aboutMe} className="aboutMe">
        <div className="title-box">
          <h3>{t("body.aboutMe-sec.title")}</h3>
        </div>
        <div className="body-box">
          <div className="my-image-box">
            <img src={myImg} width={200} height={200} />
          </div>
          <div className="about-me-box">
            <p>
              {t("body.aboutMe-sec.title-name") +
                " " +
                t("body.aboutMe-sec.prefix") +
                " " +
                t("body.aboutMe-sec.name") +
                " " +
                t("body.aboutMe-sec.surname")}
            </p>
            <p>
              {t("body.aboutMe-sec.title-nickname") +
                " " +
                t("body.aboutMe-sec.nickname")}
            </p>
            <p>
              {t("body.aboutMe-sec.title-bd") +
                " " +
                t("body.aboutMe-sec.text-birthday")}
            </p>
            <p>
              {t("body.aboutMe-sec.title-edu") +
                " " +
                t("body.aboutMe-sec.education") +
                " ," +
                t("body.aboutMe-sec.education2")}
            </p>
          </div>
        </div>
      </section>
      <section ref={contact} className="contact">
        <div className="title-box">
          <h3>{t("body.contact-sec.title")}</h3>
        </div>

        <div>
          <div>
            <img src={emailLogo} width={30} height={30} />
            <img
              src={phoneLogo}
              width={30}
              height={30}
              style={{ backgroundColor: "#fff", borderRadius: "50%" }}
            />
            <img src={faceLogo} width={30} height={30} />
            <img src={lineLogo} width={30} height={30} />
            <img src={githubLogo} width={30} height={30} />
            <img src={addressLogo} width={30} height={30} />
          </div>
        </div>
      </section>
      <section ref={project} className="project">
      <div className="title-box"><h3>{t("body.project-sec.title")}</h3></div>
        
      </section>
    </div>
  );
};

export default Body;
