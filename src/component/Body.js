import React from "react";
import { useTranslation } from "react-i18next";
import ImageSlider from "./ImageSlider";
import global_en from "../translations/en/global.json";
import global_th from "../translations/th/global.json";
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
import imgExample from "../image/webAppExample.png";

import { FaRegFileCode } from "react-icons/fa";

const Body = ({ aboutMe, contact, project, scrollToSection }) => {
  const imageURLs = [img1, img2, img3, img4];
  const [t, i18n] = useTranslation("global");

  const lng = t("header.lng");
  const listProjects =
    lng === "en"
      ? global_en.body.projectSec["allProject"]
      : lng === "th"
      ? global_th.body.projectSec["allProject"]
      : global_en.body.projectSec["allProject"];

  const yearBirth = t("body.aboutMe-sec.yearBirth");
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearBirth;
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
            <div className="flex">
              <h6>{t("body.aboutMe-sec.title-name")}</h6>
              <p className="ml-1">
                {t("body.aboutMe-sec.prefix") +
                  " " +
                  t("body.aboutMe-sec.name") +
                  " " +
                  t("body.aboutMe-sec.surname")}
              </p>
            </div>
            <div className="flex">
              <h6>{t("body.aboutMe-sec.title-nickname")}</h6>
              <p className="ml-1">{t("body.aboutMe-sec.nickname")}</p>
            </div>
            <div className="flex">
              <h6>{t("body.aboutMe-sec.titleAge")}</h6>
              <p className="ml-1">
                {age} {lng == "th" ? "ปี" : null}
              </p>
            </div>
            <div className="flex">
              <h6>{t("body.aboutMe-sec.title-bd")}</h6>
              <p className="ml-1">{t("body.aboutMe-sec.text-birthday")}</p>
            </div>

            <div className="flex text-left">
              <h6 className={lng == "en" ? "w-ct-100" : "w-36"}>
                {t("body.aboutMe-sec.title-edu")}
              </h6>
              <p className="ml-1">{t("body.aboutMe-sec.education")}</p>
            </div>
          </div>
        </div>
      </section>
      <section ref={contact} className="contact">
        <div className="title-box">
          <h3>{t("body.contact-sec.title")}</h3>
        </div>

        <div className="flex flex-col text-white text-base text-start">
          <div className="m-1 flex flex-row items-center justify-start">
            <img src={emailLogo} width={30} height={30} />
            <p className="ml-4">{t("body.contact-sec.email")}</p>
          </div>
          <div className="m-1 flex flex-row items-center justify-start">
            <img
              src={phoneLogo}
              width={30}
              height={30}
              style={{ backgroundColor: "#fff", borderRadius: "50%" }}
            />
            <p className="ml-4">{t("body.contact-sec.phone")}</p>
          </div>
          <div className="m-1 flex flex-row items-center justify-start">
            <img src={faceLogo} width={30} height={30} />
            <a href={t("body.contact-sec.link-facebook")} target="_blank" className="ml-4 cursor-pointer hover:text-slate-300">{t("body.contact-sec.facebook")}</a>
          </div>
          <div className="m-1 flex flex-row items-center justify-start">
            <img src={lineLogo} width={30} height={30} />
            <p className="ml-4">{t("body.contact-sec.line")}</p>
          </div>
          <div className="m-1 flex flex-row items-center justify-start">
            <img
              src={githubLogo}
              width={30}
              height={30}
              style={{ backgroundColor: "#fff", borderRadius: "50%" }}
            />
            <a href={t("body.contact-sec.link-github")} target="_blank" className="ml-4 cursor-pointer hover:text-slate-300">{t("body.contact-sec.github")}</a>
          </div>
          <div className="m-1 flex flex-row items-center justify-start">
            <img
              src={addressLogo}
              width={30}
              height={30}
              style={{ backgroundColor: "#fff", borderRadius: "50%" }}
            />
            <a href={t("body.contact-sec.linkAddressMap")} target="_blank" className="ml-4 cursor-pointer hover:text-slate-300">{t("body.contact-sec.address")}</a>
          </div>
        </div>
        {/* end contact section */}
      </section>

      <section ref={project} className="project">
        <div className="title-box">
          <h3>{t("body.projectSec.title")}</h3>
        </div>
        <div className="text-black text-base text-start frame-pj">
          {listProjects.map((item, index) => (
            <div className="m-2 rounded bg-zinc-200 flex flex-row min-h-72 ">
              <div className="image-pj rounded min-w-72 max-w-72 min-h-72 max-h-72 border bg-zinc-800">
                <img src={imgExample} alt="Project Image" width={"100%"} height={"100%"} style={{borderRadius:"0.25rem", width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
              <div className="box-pj p-2 border w-full">
                <h1>{item.namePj}</h1>
                <p className="italic text-gray-700 mb-2">{item.duration}</p>
                <p className="mb-2">{item.description}</p>
                <div className="flex flex-row flex-wrap mb-2">{item.listTools.map((tool,indexTool)=>(
                  <div className="style-tool">{tool}</div>
                ))}</div>
                { item.linkSourceCode && <a title={item.linkSourceCode} href={item.linkSourceCode} target="_blank" className="custom-btn-sc"><FaRegFileCode/>{ lng === "en" ? "View Source Code": "ดูซอร์สโค้ดที่นี่"}</a>}

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Body;
