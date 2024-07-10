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
      title: "Oxygen Generators: ",
      content:[
        "At Oxair we deliver on-site oxygen generators for a range of industries including Hospitals, Medical Facilities, Glass, Metal Cutting, Gold mining, Aqua and other specialized areas.",
        "Pressure Swing Adsorption (PSA): Oxygen is separated from compressed air through a unique process called Pressure Swing Adsorption (PSA).",
        "The gas is then conditioned and filtered before being stored in a buffer tank so it can be used on demand. PSA is widely recognized as one of the most popular methods for producing oxygen gas. The technique and technology are suitable for small to medium sized production and can be applied in a wide range of industries. Tonnage Plants Oxygen PSA offer high purity oxygen applications suitable for Medical, Gold Mining, other industrial areas. Process Series Plants Oxygen PSA based on Pressure Swing Absorption (PSA) technology, designed for customers that require medium to high oxygen flows in industries such as medical facilities, mining operations, petrochemical, chemical and oil and gas.Why choose Oxair oxygen generators? Significantly reduce your power consumption (compared with other manufacturers). Fully reliable Control System communication links for remote control options and diagnostic analysis. High cycle process valves are premier performers for reliability and low maintenance, especially robust in extreme environments. Oxair’s oxygen generator can also be engineered to integrate with any existing system, or designed from scratch. Our oxygen generators are capable of producing flow rates from 1 to 680 SM³/hr. Advanced noise control technology for better safety and environmental impact. High purity oxygen is essential for the health and safety of patients and staff alike in medical facilities – Oxair systems delivers oxygen ranging from 94-99% purity by PSA Process. We can even provide on-site maintenance to keep everything running perfectly. The robust build, reliability and low maintenance make our oxygen generators suitable for extreme environments, such as gold mining. While a specially designed muffler makes it one of the quietest PSA systems on the market. When a constant, onsite source of oxygen is available not only are cyanide reactions affected but energy consumption can be reduced. And the additional oxygen removes nitrogen entrainments present in the air.Key features: OXAIR® STANDARD DESIGN – The OXAIR® Oxygen PSA Generator has as standard: Lower air consumption High efficiency 4-stage filtration package PLC controller Interactive HMI full color touchscreen with screen failure back-up Compact design High performance true process valves Oxygen pressure for hospital application/industrial ranges from 400 KPA (4 Bar) to 2000 KPA (20 bar) and for cylinder filling 15000 KPA (150 bar).Skid mounting where practical. Machine performance data collection ",
    
      ]
      },
    {
      id: 2,
      title: "Nitrogen Generators: ",
      content:
        [
          ""
        ]
    },
  ],
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
                <div className="learnbutton">
                  <ButtonComponent
                    key={2}
                    label="Learn More"
                    onClick={() => handleOpenModal(2)}
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
            <div className="col-6"></div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePageBanner;
