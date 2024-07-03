import React, { useState } from 'react';
import ButtonComponent from "@/components/Buttons";
import LeftImageRightContentProduct from "@/components/LeftImageRightContentProduct";
import ContactUsToday from './ContactUsToday';
import Image from 'next/image';
import ProductImage from "../assets/images/oxygen_150.png";
import Goldmining from "@/assets/images/Gold_Mining.png";
import HealthCare from "@/assets/images/HealthCare.png";
import Forming from "@/assets/images/Forming.png";


const ProductTabs = () => {
    const [selectedItem, setSelectedItem] = useState(150);

    const items = [
        { id: 60, name: 'OXAIR HIGH PERFORMANCE 60' },
        { id: 80, name: 'OXAIR HIGH PERFORMANCE 80' },
        { id: 150, name: 'OXAIR HIGH PERFORMANCE 150' },
        { id: 200, name: 'OXAIR HIGH PERFORMANCE 200' },
    ];

    const handleItemClick = (id) => {
        setSelectedItem(id);
    };

    return (
        <div className="container">
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-12 col-sm-6 col-md-3 bordercolor ">
                        <div onClick={() => handleItemClick(item.id)} className={`item ${selectedItem === item.id ? 'activetop' : ''}`} >
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
            {selectedItem && (
                <div >


                    <>
                        <LeftImageRightContentProduct imageSrc={ProductImage}>

                            <div className="">
                                <p className="headings dark-blue">Oxygen Generator</p>
                                <h1 className="sub-headings1 dark-blue">
                                    OA HP {selectedItem}
                                </h1>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <h5 className='font-oxy'>Flowrate</h5>
                                        <p className='oxy-smallfont'>150 LPM (9 M3/Hr)</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-lg-4 font-oxy">
                                        <h5 className='font-oxy'>Power Consumption</h5>
                                        <p className='oxy-smallfont'> 14 KW | @10 INR Per Unit</p>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-lg-4 font-oxy">
                                        <h5 className='font-oxy'>Production Cost per M3</h5>
                                        <ButtonComponent label={"Know More"} />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-4 col-md-4 col-lg-4">
                                    <div class="icon-text-box img-border ">
                                        <Image src={Goldmining} alt="" className='img-fluid' />
                                        <p className='mt-4'>Gold Mining</p>
                                    </div>
                                    <div class="col-md-4 icon-text"></div>
                                </div>
                                <div class="col-sm-4 col-md-4 col-lg-4">
                                    <div class="icon-text-box img-border">
                                        <Image src={HealthCare} alt="" className='img-fluid' />
                                        <p className='mt-4'>Medical</p>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-md-4 col-lg-4">
                                    <div class="icon-text-box">
                                        <Image src={Forming} alt="" className='img-fluid' />
                                        <p className='mt-4'>Farming</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h1 className="product-heading1 dark-blue">
                                Cost-effective, safe and convenient oxygen generator for your business.
                            </h1>
                            <div className="product-heading">
                                <p>
                                    The robust build, reliability and low maintenance make our oxygen generators
                                    suitable for extreme environments, such as gold mining. While a specially
                                    designed muffler makes it one of the quietest PSA systems on the market.</p>
                                <p> But the advantages don’t end there. When a constant, onsite source of oxygen
                                    is available not only are cyanide reactions affected but energy consumption
                                    can be reduced. And the additional oxygen removes nitrogen entrainments
                                    present in the air.</p>
                                <p>Oxair’s oxygen generator can also be engineered to
                                    integrate with any existing system, or designed from scratch.
                                </p>
                            </div>

                            <div>
                                <h5 className="product-heading1 dark-blue">Key Benefits</h5>
                                <ul className="why-oxair-list">
                                    <li className="list-item">Lower air consumption</li>
                                    <li className="list-item">High efficiency 4-stage filtration package</li>
                                    <li className="list-item">PLC controller</li>
                                    <li className="list-item"> Interactive HMI full colour touchscreen</li>
                                    <li className="list-item">Compact design</li>
                                    <li className='list-item'>High performance true process valves </li>
                                    <li className='list-item'>Oxygen pressure at 15,000 kPag (2175 psig)</li>
                                    <li className='list-item'>Skid mounting where practical</li>
                                    <li className='list-item'>Machine performance data collection</li>
                                </ul>
                            </div>

                        </LeftImageRightContentProduct>
                        
                    </>
                    
                </div>
            )}
            <ContactUsToday />
        </div>
    );
};

export default ProductTabs;
