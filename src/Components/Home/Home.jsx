import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import butterfly1 from "../../assets/ambitious-studio-rick-barrett-4u1ZT2r2c5I-unsplash.jpg";
import butterfly2 from "../../assets/fahmi-huwaidy-j5RHT6j-yBY-unsplash.jpg";
import crow from "../../assets/zongnan-bao-K7gs2CSZIa4-unsplash.jpg";
import "../../styles/home.css";
import Services from "../Services/Services";
import Analytics from "../Analytics/Analytics";
const slideImages = [{ url: butterfly1 }, { url: butterfly2 }, { url: crow }];
const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "600px",

  backgroundSize: "cover",
};
const hoome = () => {
  return (
    <div className="slider-container mt-auto mb-auto">
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              className="img"
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Fade>
      <Services />
      <Analytics />
    </div>
  );
};

export default hoome;
