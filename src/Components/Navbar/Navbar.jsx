import { useState } from "react";
import "../../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import menu_icon from "../../assets/menu-icon.png";
import navlog from "../../assets/navlog.png";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // const [sticky, setSticky] = useState(false);
  const { t, i18n } = useTranslation();

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 500 ? setSticky(true) : setSticky(false);
  //   });
  // });

  const [mobileMenu, setMobileMenue] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenue(false) : setMobileMenue(true);
  };
  return (
    <nav className={"containers"}>
      <img src={navlog} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menue"}>
        <NavLink to="/">
          <li>{t("title")}</li>
        </NavLink>{" "}
     
        <NavLink to="/About" smooth={true} offset={-260} duration={500}>
          <li>{t("about")}</li>
        </NavLink>{" "}
        <NavLink to="/Login" smooth={true} offset={-260} duration={500}>
          <li>{t("download app")}<span><i class="ri-mobile-download-line"></i></span></li>
        </NavLink>{" "}
       
        <li className="">
          {i18n.language === "en" ? (
            <button>
              AR
              <LanguageIcon
                className="cursor-pointer"
                onClick={() => i18n.changeLanguage("ar")}
              />
            </button>
          ) : (
            <button>
              EN
              <LanguageIcon
                className="cursor-pointer"
                onClick={() => i18n.changeLanguage("en")}
              />
            </button>
          )}
        </li>
         <NavLink to="contact" smooth={true} offset={-250} duration={500}>
          <li  className="btns">{t("Contact")}</li>
          
        </NavLink>{" "}
      </ul>
      <img src={menu_icon} alt="" className="menu_icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
