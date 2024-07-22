import { Col, Row, Tabs, Tab } from "react-bootstrap";
import TechnologyIcon from "../assets/icons/technology-icon.png"
import QualityIcon from "../assets/icons/quality-icon.png"
import UptimeIcon from "../assets/icons/uptime-icon.png"
import Image from "next/image";
import { useState } from "react";

const TheOxairIndiaDefference = ({subHeading = "THE OXAIR INDIA DIFFERENCE"}) =>{

    const TechnologyTabs=[
        {
            eventKey: "technology",
            icon: <Image src={TechnologyIcon} alt="Technology" width={50} height={50} />,
            title: "Latest Technology Development at Oxair in Australia",
            content:            
           "Oxair in Australia integrates cutting-edge air separation technology into our services, enhancing efficiency and sustainability. This underscores our commitment to innovation and environmental responsibility. Leveraging Oxair’s expertise, we deliver advanced solutions that set new industry benchmarks."
          },
          {
            eventKey: "quality",
            icon: <Image src={QualityIcon} alt="Quality" width={50} height={50} />,
            title: "Affordable Without Compromise in Quality",
            content:"Affordable Without Compromise in Quality"
          },
          {
            eventKey: "uptime",
            icon: <Image src={UptimeIcon} alt="System Uptime" width={50} height={50} />,
            title: "97% System Uptime & Quick Local Response",
            content: "97% System Uptime & Quick Local Response"
          },

    ]
    const [activeKey, setActiveKey] = useState(TechnologyTabs[0].eventKey);

    return(
        <>
       <div className="the-oxair-india">
       <h5 className='banner-sub-heading1'>{subHeading}</h5>
       <div className="defference-sec">
        <ul>
            <li>Technology</li>
            <li>Savings</li>
            <li>Customer Service</li>
        </ul>
       </div>
       <div className="technology-section">
        <Row>
            <Col>
            <Tabs
             activeKey={activeKey}
             onSelect={(k) => setActiveKey(k)}
             id="icon-tabs"
             className="our-technology-tabs" 
            >
                
                {TechnologyTabs.map((tab) => (
                    <Tab 
                    eventKey={tab.eventKey} 
                    key={tab.eventKey}
                    title={
                        <span>
                            {tab.icon} {tab.title}  
                        </span>
                    }
                    >
                    <div className="tab-content1">
                  <p>{tab.content}</p>
                </div>
                    </Tab>
                ))
            }
            </Tabs>
            </Col>
            {/* <div className="col-md-4 col-sm-6 col-12"></div>
            <div className="col-md-4 col-sm-6 col-12"></div>
            <div className="col-md-4 col-sm-6 col-12"></div> */}
        </Row>
       </div>
       </div>
        </>
    )
}

export default TheOxairIndiaDefference;