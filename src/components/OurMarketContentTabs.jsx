import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Image from 'next/image';
import AquaImage from '../assets/images/water.png';
import MedicalImage from '../assets/images/medical.png';
import GlassImage from '../assets/images/glass.png'; 
import CuttingImage from '../assets/images/cutting.png';
import OzoneImage from '../assets/images/ozone.png';
import SewageImage from '../assets/images/sewage.png';
import PaperImage from '../assets/images/paper.png';
import ButtonComponent from '@/components/Buttons';


const OurMarketsContentTabs = () => {
  const OurMarketTabs = [
    {
      eventKey: "medical",
      icon: <Image src={MedicalImage} alt="Medical" width={50} height={50} />,
      title: "Medical",
      name: "Medical",
      content:
        "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
     button:<ButtonComponent label={'View Product'} />
    },
    {
      eventKey: "aqua",
      icon: <Image src={AquaImage} alt="Aqua" width={50} height={50} />,
      title: "Aqua",
      content:
      "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
   button:<ButtonComponent label={'View Product'} />
   },
    {
      eventKey: "glass",
      icon: <Image src={GlassImage} alt="Glass" width={50} height={50} />,
      title: "Glass",
      content:
      "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
   button:<ButtonComponent label={'View Product'} />
   },
    {
      eventKey: "cutting",
      icon: <Image src={CuttingImage} alt="Medical" width={50} height={50} />,
      title: "Cutting",
      content:
      "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
   button:<ButtonComponent label={'View Product'} />
   },
    {
      eventKey: "ozone",
      icon: <Image src={OzoneImage} alt="Aqua" width={50} height={50} />,
      title: "Ozone",
      content:
      "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
   button:<ButtonComponent label={'View Product'} />
   },
    {
      eventKey: "paper",
      icon: <Image src={PaperImage} alt="Paper" width={50} height={50} />,
      title: "Paper",
      content:
      "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
   button:<ButtonComponent label={'View Product'} />
   },
    {
      eventKey: "sewage",
      icon: <Image src={SewageImage} alt="Glass" width={50} height={50} />,
      title: "Sewage",
      content:
      "Oxair offers Oxygen plant for glass industry with an assured ROI of 2 years. Considering the harsh environment, Oxair designed Oxygen plant that works 24/7 for the glass industry.",
   button:<ButtonComponent label={'View Product'} />
   },
  ];

  const [activeKey, setActiveKey] = useState(OurMarketTabs[0].eventKey);

  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <h5 className="headings lawn-green">OUR MARKETS</h5>
          <h1 className="sub-headings dark-blue">
          We are global manufacturer of advanced gas separation systems for shipboard and land-based use
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
    </>
  );
};

export default OurMarketsContentTabs;
