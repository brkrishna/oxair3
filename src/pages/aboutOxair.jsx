import ButtonComponent from "@/components/Buttons";
import InnerPageBanner from "@/components/InnerPageBanners";
import LeftImageRightContent from "@/components/LeftImageRightContent";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AboutOxairImg from "../assets/images/about-oxair-img.png"
import TryRoiCalculater from "@/components/TryRoiCalculater";
import TheOxairIndiaDefference from "@/components/TheOxairIndiaDefference";
import PlayIcon from "../assets/icons/play-icon.png"

const AboutOxair = () => {

  return (
    <>
      <InnerPageBanner
        heading="About Us"
        subHeading="The Oxair India Difference"
      />
      <Container>
        <LeftImageRightContent imageSrc={AboutOxairImg}>
          <h5 className="headings lawn-green">ABOUT OXAIR</h5>
          <h1 className="sub-headings dark-blue">
            The Leading Oxygen Generating Systems in India
          </h1>
          <p className="text-about">
            With a guiding principle of <span className="text-about1">“Embrace every challenge, deliver your
            finest.”</span>, Oxair India, has leveraged the technological expertise of
            Oxair Australia to develop products that wean away from traditional
            reliance on oxygen cylinders and LOX. Our products offer a robust
            reliable and economical alternative with assured ROI in the span of
            less than three years. </p>
           <p className="text-about"> Our global market presence which includes
            Australia, Africa, Indonesia and the Philippines, is a testament to
            our unwavering commitment to quality and customer satisfaction.</p>
            <p className="text-about">By choosing Oxair India, you choose self-sufficiency in meeting your
            needs for medical oxygen.
          </p>
          <ButtonComponent label={"Watch Video"} icon={PlayIcon} />
        </LeftImageRightContent>
        <TheOxairIndiaDefference />
        <TryRoiCalculater />
        
      </Container>
    </>
  );
};

export default AboutOxair;
