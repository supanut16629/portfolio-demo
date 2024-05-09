import React from 'react'
import { useTranslation } from "react-i18next";
import ImageSlider from './ImageSlider';
import img1 from "../image/abstract-bg1.jpg"
import img2 from "../image/abstract-bg2.jpeg"
import img3 from "../image/abstract-bg3.jpeg"
import img4 from "../image/abstract-luxury-bg1.jpg"

const Body = ({aboutMe,contact,project,scrollToSection}) => {
  const imageURLs = [img1,img2,img3,img4];
  const [t, i18n] = useTranslation("global");
  return (
    <div className='text-white body-sec'>
      <section className='firstSec'>
        <ImageSlider imageURLs={imageURLs} scrollToSection={scrollToSection}/>
      </section>
      <section ref={aboutMe} className='aboutMe'><h3>{t("body.aboutMe-sec.title")}</h3></section>
      <section ref={contact} className='contact'><h3>{t("body.contact-sec.title")}</h3></section>
      <section ref={project} className='project'><h3>{t("body.project-sec.title")}</h3></section>
    </div>
  )
}

export default Body