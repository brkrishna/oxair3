import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import BannerImage1 from '../assets/images/banner_img1.png';
import BannerImage2 from '../assets/images/banner_img2.png';
import ButtonComponent from './Buttons';
import CustomModal from '../components/Modal';

const modalData = {
  modals: [
    { id: 1, title: 'Oxygen Generators: ', content: 'At Oxair we deliver on-site oxygen generators for a range of industries including Hospitals, Medical Facilities, Glass, Metal Cutting, Gold mining, Aqua and other specialized areas.Pressure Swing Adsorption (PSA): Oxygen is separated from compressed air through a unique process called Pressure Swing Adsorption (PSA). The gas is then conditioned and filtered before being stored in a buffer tank so it can be used on demand. PSA is widely recognized as one of the most popular methods for producing oxygen gas. The technique and technology are suitable for small to medium sized production and can be applied in a wide range of industries. Tonnage Plants Oxygen PSA offer high purity oxygen applications suitable for Medical, Gold Mining, other industrial areas. Process Series Plants Oxygen PSA based on Pressure Swing Absorption (PSA) technology, designed for customers that require medium to high oxygen flows in industries such as medical facilities, mining operations, petrochemical, chemical and oil and gas.Why choose Oxair oxygen generators? Significantly reduce your power consumption (compared with other manufacturers). Fully reliable Control System communication links for remote control options and diagnostic analysis. High cycle process valves are premier performers for reliability and low maintenance, especially robust in extreme environments. Oxair’s oxygen generator can also be engineered to integrate with any existing system, or designed from scratch. Our oxygen generators are capable of producing flow rates from 1 to 680 SM³/hr. Advanced noise control technology for better safety and environmental impact. High purity oxygen is essential for the health and safety of patients and staff alike in medical facilities – Oxair systems delivers oxygen ranging from 94-99% purity by PSA Process. We can even provide on-site maintenance to keep everything running perfectly. The robust build, reliability and low maintenance make our oxygen generators suitable for extreme environments, such as gold mining. While a specially designed muffler makes it one of the quietest PSA systems on the market. When a constant, onsite source of oxygen is available not only are cyanide reactions affected but energy consumption can be reduced. And the additional oxygen removes nitrogen entrainments present in the air.Key features: OXAIR® STANDARD DESIGN – The OXAIR® Oxygen PSA Generator has as standard: Lower air consumption High efficiency 4-stage filtration package PLC controller Interactive HMI full color touchscreen with screen failure back-up Compact design High performance true process valves Oxygen pressure for hospital application/industrial ranges from 400 KPA (4 Bar) to 2000 KPA (20 bar) and for cylinder filling 15000 KPA (150 bar).Skid mounting where practical. Machine performance data collection ' },
    { id: 2, title: 'Nitrogen Generators: ', content: 'We are a world leading manufacturer of gas process systems, for shipboard and land-based use to suit any requirement. PSA and Membranes technologies ensure reliable supply of pure nitrogen upto 99.9% with parts built to last. PSA is applied in a range of sectors, including marine, electronics, food and beverage, metal fabrication, pharmaceuticals, and oil and gas for the recovery of high-purity nitrogen. Oxair designs, fabricates, supplies and installs nitrogen membranes, used in a variety of sectors such as oil and gas, pharmaceuticals, packaging and food and beverage, throughout the world.Pressure Swing Adsorption (PSA) Oxair specializes in nitrogen Pressure Swing Adsorption (PSA) generators. We offer very high purity nitrogen with savings of up to 50% over traditional supply methods.Features: Oxair’s proven PSA technology produces Nitrogen Generators from 1 to 10,000 SM3/ of nitrogen per hour with up to 99.9% purity. Simple engineering with few moving parts means minimal maintenance, maximum reliability Small footprint for compact installation Microprocessor – (PLC) control system allows unattended operation and maintains highest efficiency Low Noise levels. – Oxair Proprietary Low Noise Muffler Design Economizer shuts system down during low demand to increase savings High Cycle process valves provide high reliability with minimal maintenance Actuators with 4 million cycles before maintenance PRISM® Membrane technology: Oxair has been using PRISM® Membrane technology for over 25 years.These nitrogen membrane systems feature specially-engineered separation modules. They contain hollow fiber membranes that selectively remove oxygen, water vapor, and carbon dioxide from compressed air in an efficient process for producing nitrogen. Purity and Flow Rate can be adjusted to suit individual requirements.Range of Products:Specialized Membrane Systems: Design a specialized membrane to suit your application.Containerized High Flow Membrane Nitrogen Systems: To meet the needs of large-volume users, such as manufacturers involved in steel, food, waste water treatment, glass, textiles and pharmaceuticals, as well as oil and gas production.Low cost Nitrogen Membrane Systems: Ideal for customers with small to medium usage and higher cost nitrogen applications.Self-Contained Membrane Systems: Ideal to meet the needs of large-volume customers.Mobile Membrane Units: Available, fully mobile, transportable nitrogen membrane systems. These include power generation from the diesel compressor, which slides out during operation and maintenance and glides back inside the container for transportation Features:PRISM® Membrane Systems reduce nitrogen supply costs over conventional supply modes Proven proprietary membrane technology produces highly-reliable nitrogen supply at your site, replacing cylinders, Dewar’s, or tanks Compact cabinets fit easily into existing facilities and simplify installation Automatic Shutdown/Standby during low demand and Instant nitrogen generation upon connection to air supply Simple design with few moving parts means easy operation, minimal maintenance and maximum reliability Flexibility to add more membranes to increase the flow as your business expands. Variable Purity control (Standard) Oxygen Analyzer (Standard) System Self Protection (Standard) Robust Control System (Standard) Fast Start up to deliver in spec nitrogen in minutes System will deliver constant Purity and Flow within minutes of cold start up Why choose Oxair for Nitrogen Generators? For greater flexibility, we will work closely with you to create tailor-made systems to suit any application. Operator friendly, meaning minimal maintenance and labor interaction. On the smaller systems the process valves will last 6-8 years before maintenance. Whereas, on the larger systems, the actuators can withstand 4 million cycles before requiring maintenance. Our nitrogen generators are efficient and compact equipment making them ideal for establishments where space is limited. Microprocessor controlled, allowing for unattended operation, noise levels are reduced thanks to a muffler design. Other advantages of our nitrogen generators are an economizer that shuts the system down during low demand, while the high cycle process valves provide exceptional reliability of supply. Oxair’s designs are focused on meeting exacting customer requirements, reliability, ease of maintenance, safety, and plant self-protection.   ' }
  ]
};

const HomePageBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(modalData.modals[0]);

  const handleOpenModal = (id) => {
    const modal = modalData.modals.find(modal => modal.id === id);
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
            <div className="col-6">
              <div className="banner-headings">
                <h1 className="banner-heading">
                  Cost-effective, safe, convenient & very low maintenance
                </h1>
                <h5 className="banner-sub-heading">
                  Oxygen Generators for your business
                </h5>
                <div>
                  <ButtonComponent
                    key={1}
                    label="Learn More"
                    onClick={() => handleOpenModal(1)}
                  />
                  <CustomModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    modalTitle={currentModal.title}
                    modalContent={currentModal.content}
                  />
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
            <div className="col-6">
              <div className="banner-headings">
                <h1 className="banner-heading">
                  Customized, Highest Purity, Cost Saving, Safe & Ease Of Maintenance
                </h1>
                <h5 className="banner-sub-heading">
                  Nitrogen Generators for a range of sectors
                </h5>
                <div>
                  <ButtonComponent
                    key={2}
                    label="Learn More"
                    onClick={() => handleOpenModal(2)}
                  />
                  <CustomModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    modalTitle={currentModal.title}
                    modalContent={currentModal.content}
                  />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePageBanner;