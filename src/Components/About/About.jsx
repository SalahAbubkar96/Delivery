import React from "react";
import Locart from "../../assets/Change_green_to_colo-2-removebg-preview.png";
import Locart2 from "../../assets/create the same imag66.png";

import { Container, Row, Col } from "react-bootstrap";

import { motion as Motion } from "framer-motion";
import serviceData2 from "../../assets/data/serviceData2";
import { useTranslation } from "react-i18next";

import "../../styles/about.css";

// import create from "../../assets/x.png";
// import xs from "../../assets/create the same imag.png"
// import xsz from "../../assets/create the same imag4.png"
// import xss from "../../assets/create the same imag3.png"

import "../../styles/contact.css";

const Analytics = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500] max-aouto my-4" src={Locart} alt="/" />

        <div className="flex flex-col justify-center">
          <h1 className="text-[] font-bold">{t("abouts.title")}</h1>
          <p className="md:text-4xl sm:text-3xl text-2xl  py-2">
            {t("abouts.description")}
           
          </p>

          <button className="btx bg-[#512da8] w-[200px] font-bold rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white hover:bg-[#673ab7] transition duration-300">
            {t("abouts.button")}
          </button>
        </div>
      </div>
      <section className=" bg-white py-16 px-16">
        <Container>
          <Row>
            {serviceData2.map((item, index) => (
              <Col lg="3" md="4" key={index}>
                <Motion.div
                  whileHover={{ scale: 1.1 }}
                  className="sevice_item2 "
                >
                  <span>
                    <img src={item.icon} alt="" />
                  </span>
                  <div className="">
                    <span>{item.title}</span>
                  </div>
                </Motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[400px] max-aouto my-4" src={Locart2} alt="/" />

          <div className="flex flex-col justify-center">
            <h1 className=" ml-15 font-bold">{t("abouts.title2")}
              
            </h1>
            <p className="md:text-4xl sm:text-3xl text-2xl  py-2">
              {t("abouts.description2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
