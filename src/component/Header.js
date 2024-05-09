import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import global_en from "../translations/en/global.json";
import global_th from "../translations/th/global.json";

import { MdOutlineLanguage } from "react-icons/md";
import { RiArrowDownSLine ,RiArrowUpSLine  } from "react-icons/ri";

const Header = ({ scrollToSection }) => {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const listLng = ["en", "th"];

  const [t, i18n] = useTranslation("global");
  const lng = t("header.lng");
  const menuNav =
    lng === "en"
      ? global_en.header["menu-nav"]
      : lng === "th"
      ? global_th.header["menu-nav"]
      : global_en.header["menu-nav"];

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangDropdown(false);
  };
  return (
    <header className="header-bar-height w-full header-bar-bg flex items-center fixed">
      <div className="mx-8 cursor-pointer">
        <svg
          onClick={() => scrollToSection(null)}
          title="Portfolio"
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#fff">
            <path d="m10.4714 12.3566v3.8454c.1608.0125.3094.0187.4457.0186h.6129c.4496.0066.8976-.056 1.3282-.1857.3681-.1093.6971-.3222.9477-.6131.2594-.3401.3879-.762.3621-1.1889.0099-.3593-.0836-.7139-.2694-1.0217-.1952-.2975-.4773-.5278-.808-.6594-.4318-.1679-.8931-.2469-1.3561-.2323-.2972 0-.5603.0031-.7894.0093-.2295.0064-.3874.0157-.4737.0278z" />
            <path
              clip-rule="evenodd"
              d="m32 0h-32v32h32zm-12.4755 15.2826-1.3088-.0386c-.0868-.0123-.1302-.0558-.1302-.13v-1.6293c-.0025-.0177-.0008-.0357.0048-.0526.0057-.017.0152-.0323.0278-.045.0127-.0126.028-.0221.045-.0277.0169-.0057.0349-.0073.0526-.0048l1.3088.0144v-.0364c-.0027-.5558.0282-1.1111.0926-1.6631.0567-.3247.1567-.6402.2974-.9382.2402-.499.6048-.9276 1.0588-1.24466.5422-.34557 1.1783-.51431 1.8205-.48294.18-.00094.3599.00835.5388.02782.1821.01571.3621.04997.5372.10223.0387.01299.0722.03803.0956.07145s.0355.07346.0345.11426v1.83914c0 .0868-.0496.1177-.1488.0929-.0867-.0123-.2895-.0186-.3885-.0186h-.2785c-.2517-.0039-.5018.0403-.7369.13-.1738.0943-.3062.25-.3715.4366-.0902.2659-.1312.546-.1208.8267v.7428h1.8151c.074 0 .1206.0123.1392.0371.0209.0332.0307.0723.028.1114v1.6351c0 .0868-.0558.1301-.1672.13h-1.8151l.0145 6.8959c-.0004.0388-.0099.077-.0277.1114-.0186.0372-.065.0558-.1395.0558h-2.1146c-.0993 0-.1486-.0558-.1486-.1672zm-11.5245 6.8454v-11.8705c0-.0865.03726-.13.11154-.13.19782 0 .34081-.0029.61342-.0093.27236-.0061.56654-.0123.88254-.0185.31575-.0061.6501-.0124 1.0031-.0186s.7029-.0093 1.0495-.0094c.807-.0207 1.6115.0988 2.3777.3531.5811.1965 1.1111.5202 1.5513.9474.3732.3702.6616.817.8453 1.3095.1736.4794.2616.9856.2599 1.4955.0351.8694-.2055 1.7276-.6874 2.4521-.4611.6465-1.1095 1.136-1.8575 1.4025-.8338.3002-1.7147.4481-2.6008.4366-.2726 0-.4645-.0031-.5756-.0093-.1116-.0061-.2788-.0093-.5016-.0093v3.6596c.0032.0227.0011.0458-.0061.0676-.0073.0217-.0195.0415-.0357.0577-.0163.0162-.036.0285-.0578.0357-.0217.0073-.0449.0094-.0676.0062h-2.17401c-.0868 0-.13019-.0496-.13019-.1486z"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </div>
      <nav className="flex w-full text-white">
        {menuNav.map((menu, indexMenu) => (
          <li
            onClick={() => scrollToSection(menu.value)}
            className="list-none mx-8 underline-hover-effect cursor-pointer"
            key={indexMenu}
          >
            {menu.label}
          </li>
        ))}
      </nav>
      <div className="px-8">
        <button
          className="flex items-center border px-1 text-white w-16"
          onClick={() => setShowLangDropdown(!showLangDropdown)}
        >
          <MdOutlineLanguage />
          <div className="px-1">{lng}</div>
          {showLangDropdown ? <RiArrowUpSLine />: <RiArrowDownSLine />}
          
          
        </button>
        <div className="menu-lang">
          {showLangDropdown &&
            listLng
              .filter((lang) => lang !== lng)
              .map((item, index) => (
                <li
                  className="cursor-pointer bg-white border-b"
                  onClick={() => handleChangeLanguage(item)}
                >
                  {item}
                </li>
              ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
