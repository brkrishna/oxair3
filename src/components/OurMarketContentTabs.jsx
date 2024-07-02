import React, { useState, useEffect } from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import Image from 'next/image';
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
import Testimonials from "@/components/Testimonials";
import WorldwideInstallations from "@/components/WorldwideInstallations";
import testiData from "../JsonData/testimonials.json"



const OurMarketsContentTabs = () => {

  const [testimon, setTestimon] = useState([]);
  useEffect(() => {
    setTestimon(testiData)   
  }, []);
  const installationData = [
    { country: "India", number: 250 },
    { country: "Philippines", number: 40 },
    { country: "Indonesia", number: 25 },
    { country: "Tonga", number: 5 },
  ];
  const OurMarketTabs = [
    {
      eventKey: "medical",
      icon: <Image src={MedicalImage} alt="Medical" width={50} height={50} />,
      title: "Medical",
      name: "Medical",
      content:
        "Oxair India is leading the way in providing innovative and reliable medical oxygen solutions. Oxair can tailor make as per requirements of the hospital. Scalability of the Oxygen plant is a challenge. Introduction of Oxair Flexi model, which caters for low as well high demand is a state of art design. Proportionate consumption of electricity is addressed which is the real challenge for PSA operations.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "glass",
      icon: <Image src={GlassImage} alt="Glass" width={50} height={50} />,
      title: "Glass",
      content:
        "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "cutting",
      icon: <Image src={CuttingImage} alt="Medical" width={50} height={50} />,
      title: "Cutting",
      content:
        "Oxair India offers advanced oxygen generators for the metal-cutting industry, ensuring efficiency and precision in high-qualit operations.",
      button: <ButtonComponent label={'View Product'} />
    },

    {
      eventKey: "Oil",
      icon: <Image src={OilandGasImage} alt="Oil" width={50} height={50} />,
      title: "Oil",
      content:
        "Oxair supplies nitrogen generating systems for oil and gas companies seeking a cost-effective,continuous source of nitrogen for flare control, compressor operation and black start processes or for purging pipe lines or gas plants.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "mining",
      icon: <Image src={MiningImage} alt="Mining" width={50} height={50} />,
      title: "Mining",
      content:
        "Oxair manufactures oxygen generator equipment ideal for gold mining and related industries as it is a cost-effective,alternative solution to bulk liquid oxygen storage vessels for the process of grinding rock into slurry which then leaves the gold behind for extraction.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "petro",
      icon: <Image src={PetroChemicalImage} alt="Petro" width={50} height={50} />,
      title: "Petro",
      content:
        "Oxair supplies oxygen and nitrogen generating systems and related equipment to the chemical and biotech industries for companies that require a reliable and continuous source of gas for their operations.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "pharma",
      icon: <Image src={PharmaCgemicalImage} alt="Pharma" width={50} height={50} />,
      title: "Pharma",
      content:
        "Oxair supplies oxygen and nitrogen generating systems and related equipment to the chemical and biotech industries for companies that require a reliable and continuous source of gas for their operations.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "aqua",
      icon: <Image src={AquaImage} alt="Aqua" width={50} height={50} />,
      title: "Aqua",
      content:
        "Oxair India offers specialized oxygen generators for the aquaculture industry's unique needs.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "ozone",
      icon: <Image src={OzoneImage} alt="Aqua" width={50} height={50} />,
      title: "Ozone",
      content:
        "Oxair India introduces advanced ozone generators as part of our environmental technology solutions.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "paper",
      icon: <Image src={PaperImage} alt="Paper" width={50} height={50} />,
      title: "Paper",
      content:
        "Oxair India revolutionizes the paper and pulp industry with reliable, on-site oxygen production solutions.",
      button: <ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "sewage",
      icon: <Image src={SewageImage} alt="Glass" width={50} height={50} />,
      title: "Sewage",
      content:
        "Oxair India provides professional oxygen generator manufacturing solutions for sewage and wastewater treatment plants in India.",
      button: <ButtonComponent label={'View Product'} />
    },
  ];

  const [activeKey, setActiveKey] = useState(OurMarketTabs[0].eventKey);

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <h5 className="headings lawn-green">OUR MARKETS</h5>
          <h1 className="sub-headings dark-blue">
            We are a global manufacturer of Advanced Gas Separation Systems for Shipboard and Land-based use.
          </h1>
          <p>
            We specialise in the supply of on-site gas generation equipment
            within India as well as international markets. Oxair designs and
            manufactures packaged oxygen Pressure Swing Adsorption (PSA) Systems
            including small to medium PSA systems for all types of industry
            including Medical Hospitals as well as large industrial Tonnage
            plants.
          </p>
          <p>Oxair also design and build small to large Nitrogen systems
            using Air Products Membranes as well using PSA technology for
            numerous industrial applications.</p>
        </div>
        <div className="col-md-4">
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
                <div className="tab-content">
                  <h4>{tab.title}</h4>
                  <p>{tab.content}</p>
                  {tab.button}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
      <WorldwideInstallations data={installationData} />
        <Testimonials data={testimon} />
    </>
  );
};

export default OurMarketsContentTabs;
