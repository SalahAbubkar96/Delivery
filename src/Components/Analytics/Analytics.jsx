import React from "react";
import Locart from "../../assets/Change_green_to_colo-2-removebg-preview.png";
import "../../styles/Analtics.css";
import { useTranslation } from "react-i18next";

const Analytics = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500] max-aouto my-4" src={Locart} alt="/" />

        <div className="flex flex-col justify-center">
          <h1 className="text-[] font-bold">{t("analytics.title")}</h1>
          <p className="md:text-4xl sm:text-3xl text-2xl  py-2">
            {t("analytics.description")}
          </p>
          <p>
          {t("analytics.description2")}
          </p>
          <button className="btx bg-[#512da8] w-[200px] font-bold rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white hover:bg-[#673ab7] transition duration-300">
         
          {t("analytics.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
