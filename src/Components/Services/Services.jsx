import "../../styles/service.css";
import { Container, Row, Col } from "react-bootstrap";

import { motion as Motion  } from "framer-motion";

import serviceData from "../../assets/data/serviceData";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t,} = useTranslation();

  return (
    //className=" pb-[300px] py-16

    <section className="services">
      <Container >
        <Row>
          <h2 className="text-center">{t("Reliable Delivery Solution")}</h2>
          <h6 className="text-center">
           {t("Driving innovation in delivery across various sectors")}
          </h6>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <Motion.div
                whileHover={{ scale: 1.1 }}
                className="sevice_item "
                style={{ background: `${item.bg}` }}
              >
                <span className="icon">
                  <i class={item.icon}></i>
                </span>
                <div className="">
                  <h3 className="text-white">{item.title}</h3>
                  <p className="text-white">{item.subtitle}</p>
                </div>
              </Motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
