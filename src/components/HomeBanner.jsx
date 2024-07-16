import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import BannerImage1 from "../assets/images/banner_img1.png";
import BannerImage2 from "../assets/images/banner_img2.png";
import ButtonComponent from "./Buttons";
import ModalComponent from "./ModalComponent";

const modalData = {
  modals: [
    {
      id: 1,
      title: 'Oxygen Generators: ',
      content: [
        <div>
          <p>At Oxair we deliver on-site oxygen generators for a range of industries including Hospitals, Medical Facilities, Glass, Metal Cutting, Gold mining, Aqua, and other specialized areas.</p>
          <h6>Pressure Swing Adsorption (PSA)</h6>
          <p>Oxygen is separated from compressed air through a unique process called Pressure Swing Adsorption (PSA). The gas is then conditioned and filtered before being stored in a buffer tank so it can be used on demand. PSA is widely recognized as one of the most popular methods for producing oxygen gas. The technique and technology are suitable for small to medium-sized production and can be applied in a wide range of industries.</p>
          <h6>Tonnage Plants</h6>
          <p>Oxygen PSA offers high purity oxygen applications suitable for Medical, Gold Mining, and other industrial areas.</p>
          <h6>Process Series Plants</h6>
          <p>Oxygen PSA is based on Pressure Swing Adsorption (PSA) technology, designed for customers that require medium to high oxygen flows in industries such as medical facilities, mining operations, petrochemical, chemical, and oil and gas.</p>
          <h6>Why Choose Oxair Oxygen Generators?</h6>
          <ul>
            <li>Significantly reduce your power consumption (compared with other manufacturers).</li>
            <li>Fully reliable Control System communication links for remote control options and diagnostic analysis.</li>
            <li>High cycle process valves are premier performers for reliability and low maintenance, especially robust in extreme environments.</li>
            <li>Oxair’s oxygen generator can also be engineered to integrate with any existing system, or designed from scratch.</li>
            <li>Our oxygen generators are capable of producing flow rates from 1 to 680 SM³/hr.</li>
            <li>Advanced noise control technology for better safety and environmental impact.</li>
            <li>High purity oxygen (94-99%) is essential for the health and safety of patients and staff alike in medical facilities.</li>
            <li>We can even provide on-site maintenance to keep everything running perfectly.</li>
          </ul>
          <h6>Key Features</h6>
          <ul>
            <li>OXAIR® STANDARD DESIGN</li>
            <li>Lower air consumption</li>
            <li>High efficiency 4-stage filtration package</li>
            <li>PLC controller</li>
            <li>Interactive HMI full color touchscreen with screen failure back-up</li>
            <li>Compact design</li>
            <li>High performance true process valves</li>
            <li>Oxygen pressure for hospital application/industrial ranges from 400 KPA (4 Bar) to 2000 KPA (20 bar) and for cylinder filling 15000 KPA (150 bar).</li>
            <li>Skid mounting where practical</li>
            <li>Machine performance data collection</li>
          </ul>
          <p>The robust build, reliability, and low maintenance make our oxygen generators suitable for extreme environments, such as gold mining. A specially designed muffler makes it one of the quietest PSA systems on the market. When a constant, onsite source of oxygen is available, not only are cyanide reactions affected but energy consumption can be reduced. Additionally, the extra oxygen removes nitrogen entrainments present in the air.</p>
        </div>
      ]
    },
    {
      id: 2,
      title: 'Nitrogen Generators: ',
      content: [
        <div>
          <p>We are a world leading manufacturer of gas process systems, for shipboard and land-based use to suit any requirement. PSA and Membranes technologies ensure reliable supply of pure nitrogen up to 99.9% with parts built to last.</p>
          <h6>Pressure Swing Adsorption (PSA)</h6>
          <p>Oxair specializes in nitrogen Pressure Swing Adsorption (PSA) generators. We offer very high purity nitrogen with savings of up to 50% over traditional supply methods.</p>
          <h6>Features</h6>
          <ul>
            <li>Oxair is proven PSA technology produces Nitrogen Generators from 1 to 10,000 SM3/ of nitrogen per hour with up to 99.9% purity.</li>
            <li>Simple engineering with few moving parts means minimal maintenance, maximum reliability.</li>
            <li>Small footprint for compact installation.</li>
            <li>Microprocessor - (PLC) control system allows unattended operation and maintains highest efficiency.</li>
            <li>Low Noise levels - Oxair Proprietary Low Noise Muffler Design.</li>
            <li>Economizer shuts system down during low demand to increase savings.</li>
            <li>High Cycle process valves provide high reliability with minimal maintenance.</li>
            <li>Actuators with 4 million cycles before maintenance.</li>
          </ul>
          <h6>PRISM® Membrane technology</h6>
          <p>Oxair has been using PRISM® Membrane technology for over 25 years. These nitrogen membrane systems feature specially-engineered separation modules. They contain hollow fiber membranes that selectively remove oxygen, water vapor, and carbon dioxide from compressed air in an efficient process for producing nitrogen. Purity and Flow Rate can be adjusted to suit individual requirements.</p>
          <h6>Range of Products</h6>
          <ul>
            <li>Specialized Membrane Systems: Design a specialized membrane to suit your application.</li>
            <li>Containerized High Flow Membrane Nitrogen Systems: To meet the needs of large-volume users, such as manufacturers involved in steel, food, wastewater treatment, glass, textiles, and pharmaceuticals, as well as oil and gas production.</li>
            <li>Low cost Nitrogen Membrane Systems: Ideal for customers with small to medium usage and higher cost nitrogen applications.</li>
            <li>Self-Contained Membrane Systems: Ideal to meet the needs of large-volume customers.</li>
            <li>Mobile Membrane Units: Available, fully mobile, transportable nitrogen membrane systems. These include power generation from the diesel compressor, which slides out during operation and maintenance and glides back inside the container for transportation.</li>
          </ul>
          <h6>Features</h6>
          <ul>
            <li>PRISM® Membrane Systems reduce nitrogen supply costs over conventional supply modes.</li>
            <li>Proven proprietary membrane technology produces highly-reliable nitrogen supply at your site, replacing cylinders, Dewar’s, or tanks.</li>
            <li>Compact cabinets fit easily into existing facilities and simplify installation.</li>
            <li>Automatic Shutdown/Standby during low demand and Instant nitrogen generation upon connection to air supply.</li>
            <li>Simple design with few moving parts means easy operation, minimal maintenance and maximum reliability.</li>
            <li>Flexibility to add more membranes to increase the flow as your business expands.</li>
            <li>Variable Purity control (Standard).</li>
            <li>Oxygen Analyzer (Standard).</li>
            <li>System Self Protection (Standard).</li>
            <li>Robust Control System (Standard).</li>
            <li>Fast Start up to deliver in spec nitrogen in minutes.</li>
            <li>System will deliver constant Purity and Flow within minutes of cold start up.</li>
          </ul>
          <h6>Why Choose Oxair for Nitrogen Generators?</h6>
          <p>For greater flexibility, we will work closely with you to create tailor-made systems to suit any application. Operator friendly, meaning minimal maintenance and labor interaction. On the smaller systems the process valves will last 6-8 years before maintenance. Whereas, on the larger systems, the actuators can withstand 4 million cycles before requiring maintenance. Our nitrogen generators are efficient and compact equipment making them ideal for establishments where space is limited. Microprocessor controlled, allowing for unattended operation, noise levels are reduced thanks to a muffler design. Other advantages of our nitrogen generators are an economizer that shuts the system down during low demand, while the high cycle process valves provide exceptional reliability of supply. Oxair’s designs are focused on meeting exacting customer requirements, reliability, ease of maintenance, safety, and plant self-protection.</p>
        </div>
      ]
    }
  ]

};

const HomePageBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(modalData.modals[0]);

  const handleOpenModal = (id) => {
    const modal = modalData.modals.find((modal) => modal.id === id);
    setCurrentModal(modal);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <Image src={BannerImage1} alt="" className="w-100 h-auto" />
        <Carousel.Caption>
          <div className="row">
            <div className="col-8">
              <div className="banner-headings">
                <h1 className="banner-heading">
                  Cost-effective, safe, convenient & very low maintenance
                </h1>
                <h5 className="banner-sub-heading">
                  Oxygen Generators for your business
                </h5>
                <div className='learnbutton flex '>
                  <div className="learnbutton">
                    <ButtonComponent
                      key={1}
                      label="Learn More"
                      onClick={() => handleOpenModal(1)}
                    />
                    <ModalComponent
                      show={showModal}
                      handleClose={handleCloseModal}
                      modalTitle={currentModal.title}
                      modalContent={currentModal.content}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={BannerImage2} alt="" className="w-100 h-auto" />
        <Carousel.Caption>
          <div className="row">
            <div className="col-8">
              <div className="banner-headings">
                <h1 className="banner-heading">
                  Customized, Highest Purity, Cost Saving, Safe & Ease Of
                  Maintenance
                </h1>
                <h5 className="banner-sub-heading">
                  Nitrogen Generators for a range of sectors
                </h5>
                <div className="learnbutton d-inline">
                  <ButtonComponent
                    key={2}
                    label="Learn More"
                    onClick={() => handleOpenModal(2)}
                  />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomePageBanner;
