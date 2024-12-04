import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Image from "next/legacy/image";
import AquaImage from '../assets/images/water.png';
import MedicalImage from '../assets/images/medical.png';
import GlassImage from '../assets/images/glass.png';
import CuttingImage from '../assets/images/cutting.png';
import OilandGasImage from '../assets/images/oilandgas.png';
import MiningImage from '../assets/images/mining.png';
import PetroChemicalImage from '../assets/images/petrochemical.png';
import PharmaCgemicalImage from '../assets/images/pharmachemical.png';
import OzoneImage from '../assets/images/ozone.png';
import SewageImage from '../assets/images/sewage.png';
import PaperImage from '../assets/images/paper.png';
import ButtonComponent from '@/components/Buttons';




const OurMarketsContentTabs = () => {
   
  const OurMarketTabs = [
    {
      eventKey: "medical",
      icon: <Image fetchpriority="high" src={MedicalImage} alt="Medical" width={60} height={60} />,
      title: "MEDICAL",
      name: "Medical",
      content:
        "Oxair India is leading the way in providing innovative and reliable medical oxygen solutions. Oxair can tailor make as per requirements of the hospital. Scalability of the Oxygen plant is a challenge. Introduction of Oxair Flexi model, which caters for low as well high demand is a state of art design. Proportionate consumption of electricity is addressed which is the real challenge for PSA operations.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "glass",
      icon: <Image fetchpriority="high" src={GlassImage} alt="Glass" width={60} height={60} />,
      title: "GLASS",
      content:
        "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "cutting",
      icon: <Image fetchpriority="high" src={CuttingImage} alt="Medical" width={60} height={60} />,
      title: "CUTTING",
      content:
        "Oxair India offers advanced oxygen generators for the metal-cutting industry, ensuring efficiency and precision in high-qualit operations.",
      button: <ButtonComponent label={'View Product'} />
    },

    {
      eventKey: "Oil",
      icon: <Image fetchpriority="high" src={OilandGasImage} alt="Oil" width={60} height={60} />,
      title: "OIL",
      content:
        "Oxair supplies nitrogen generating systems for oil and gas companies seeking a cost-effective,continuous source of nitrogen for flare control, compressor operation and black start processes or for purging pipe lines or gas plants.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "mining",
      icon: <Image fetchpriority="high"  src={MiningImage} alt="Mining" width={60} height={60} />,
      title: "MINING",
      content:
        "Oxair manufactures oxygen generator equipment ideal for gold mining and related industries as it is a cost-effective,alternative solution to bulk liquid oxygen storage vessels for the process of grinding rock into slurry which then leaves the gold behind for extraction.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "petro",
      icon: <Image fetchpriority="high"  src={PetroChemicalImage} alt="Petro" width={60} height={60} />,
      title: "PETRO",
      content:
        "Oxair supplies oxygen and nitrogen generating systems and related equipment to the chemical and biotech industries for companies that require a reliable and continuous source of gas for their operations.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "pharma",
      icon: <Image fetchpriority="high"  src={PharmaCgemicalImage} alt="Pharma" width={60} height={60} />,
      title: "PHARMA",
      content:
        "Oxair supplies oxygen and nitrogen generating systems and related equipment to the chemical and biotech industries for companies that require a reliable and continuous source of gas for their operations.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "aqua",
      icon: <Image fetchpriority="high"  src={AquaImage} alt="Aqua" width={60} height={60} />,
      title: "AQUA",
      content:
        "Oxair India offers specialized oxygen generators for the aquaculture industry's unique needs.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "ozone",
      icon: <Image fetchpriority="high"  src={OzoneImage} alt="Aqua" width={60} height={60} />,
      title: "OZONE",
      content:
        "Oxair India introduces advanced ozone generators as part of our environmental technology solutions.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "paper",
      icon: <Image fetchpriority="high"  src={PaperImage} alt="Paper" width={60} height={60} />,
      title: "PAPER",
      content:
        "Oxair India revolutionizes the paper and pulp industry with reliable, on-site oxygen production solutions.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "sewage",
      icon: <Image fetchpriority="high"  src={SewageImage} alt="Glass" width={60} height={60} />,
      title: "SEWAGE",
      content:
        "Oxair India provides professional oxygen generator manufacturing solutions for sewage and wastewater treatment plants in India.",
      button: <ButtonComponent label={'View Product'} />
    },
    // {
    //   eventKey: "",
    //   icon: <Image src="" alt="" width={60} height={60}/>,
    //   title: "",
    //   content:
    //     "",
    // },
  ];

  const [activeKey, setActiveKey] = useState(OurMarketTabs[0].eventKey);

  return (
    <>
      <div className="row">
        <div className="col-md-7">
          <h5 className="headings lawn-green">OUR MARKETS</h5>
          <h1 className="sub-headings dark-blue">
            We are a global manufacturer of advanced gas separation systems for shipboard and land-based use.
          </h1>
          <p className="text-about">Oxair Gas Systems has always been at the forefront of technological advancement in the manufacturing of PSA oxygen generation plants,
            By implementing "State-Of-The-Art" "Innovative Absorber Configuration" PSA Oxygen Generation Plants, we aim to transform healthcare infrastructure and pave the way for the future of healthcare with our three-vessel PSA Oxygen Generation Super Saver Plant.
          </p>
          <p className="text-about">Our goal is to give hospitals, clinics, and emergency services around the world with a reliable and affordable source of medical-grade oxygen. We are dedicated to improving healthcare resilience and accessibility in order to save lives, empower medical professionals, and promote healthier communities while reducing our negative effects on the environment and optimizing our positive effects on society.
          </p>
          <p className="text-about">Oxair also design and build small to large Nitrogen systems
            using Air Products Membranes as well using PSA technology for
            numerous industrial applications.</p>
        </div>
        <div className="col-md-5">
          <Tabs
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            id="icon-tabs"
            className="our-market-tabs"
          >
            {OurMarketTabs.map((tab) => (
              <Tab
                eventKey={tab.eventKey}
                title={
                  <span>
                    {tab.icon}
                    {tab.title}
                  </span>
                }
                key={tab.eventKey}
              >
                <div className="tab-content1">
                  <h4>{tab.title}</h4>
                  <p>{tab.content}</p>
                  {tab.button}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
      
    </>
  );
};

export default OurMarketsContentTabs;
