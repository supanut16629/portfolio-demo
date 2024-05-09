import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const ImageSlider = ({ imageURLs,scrollToSection }) => {
  // imageURLs = [url1,url2 ....,url n]
  const [imageIndex, setImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setImageIndex((prevIndex) => (prevIndex + 1) % imageURLs.length);
      setTimeout(() => {
        setTransitioning(false);
      }, 300); // Adjust the duration as needed
    }, 60000); // 1 min interval

    return () => clearInterval(interval);
  }, [imageURLs]);

  const BackGroundImageStyle = {
    display: "block",
    width: "100%",
    aspectRatio: " 10 / 4", //y/x
    // height: 500,
    zIndex:200,
    minHeight: 300,
    backgroundImage: `url(${imageURLs[imageIndex]})`,
    backgroundSize: "cover",
    // transition: "opacity 0.3s ease-in-out",
    backgroundColor: "black",
    opacity: transitioning ? 0 : 1,
    flexShrink: 0,
    flexGlow: 0,
  };
  return (
    <div style={BackGroundImageStyle}>
      <div className="wrapper-image">
        <div className="text-center-image">
          <p>{t("body.welcome-sec.welcome")}</p>
          <h1>{t("body.welcome-sec.pfo")}</h1>
          <h2>
            {t("body.welcome-sec.prefix") +
              " " +
              t("body.welcome-sec.name") +
              " " +
              t("body.welcome-sec.surname")}
          </h2>
          <p>
            {t("body.welcome-sec.pos-job") + t("body.welcome-sec.spec-text")}
          </p>
        </div>
        <div className="wrapper-btn">
          <button onClick={()=>scrollToSection("project")} className="btn-pj">{t("body.welcome-sec.btn-pj")}</button>
          <button onClick={()=>scrollToSection("contact")} className="btn-ct">{t("body.welcome-sec.btn-ct")}</button>
        </div>
      {/* end wrapper image */}
      </div>
      
    </div>
  );
};

export default ImageSlider;
