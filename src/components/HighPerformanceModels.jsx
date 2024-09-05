import React, { useState, useEffect } from 'react';
import { Row, Col, Tabs, Tab, Container } from 'react-bootstrap';
import data from '@jsonData/products/highPerformanceModels.json';
import LeftImageRightContentProduct from './LeftImageRightContentProduct';
import ContactUsToday from './ContactUsToday';
import classNames from 'classnames';
import oxairEventBanner from "../../public/images/Oxair-event-image.jpg";
import Image from 'next/image';

const OxygenGenerator = () => {
    const [key, setKey] = useState(null); // Initialize with null or undefined
  
    // Set the first key after the component mounts
    useEffect(() => {
      if (Object.keys(data).length > 0) {
        setKey(Object.keys(data)[0]); // Set the first tab as active
      }
    }, []);
  
    if (!key) {
      return <div>Loading...</div>; // Prevent rendering if key is not set
    } 


  return (
    <div className="container mt-5">
      <Tabs
        id="product-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="bordercolor product-tabs"
      >
        {Object.keys(data).map((productKey, index) => (
          <Tab
            eventKey={productKey}
            title={data[productKey].name}
            className={classNames({ activetop: key === productKey })}
            key={index}
          >
            <RenderProduct product={data[productKey]} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

const RenderProduct = ({ product }) => {
  if (!product) {
    console.error('Product data is undefined');
    return <div>Loading...</div>;
  }

  return (
    <Row className='gap-5'>
      <Col md={5}>
        <LeftImageRightContentProduct />
      </Col>
      <Col md={6}>
      <div className='leftauto'>
        <p className="productname">{product.title}</p>
        <h5 className='sub-headings dark-blue'>{product.model}</h5>
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <h6 className='flowratefont'>Flowrate</h6>
            <p className='productspecification'>{product.specifications.flowrate}</p>
          </div>
          <div className="col-md-4 col-sm-4">
            <h6 className='flowratefont'>Power Consumption</h6>
            <p className='productspecification'>{product.specifications.power_consumption}</p>
          </div>
          <div className="col-md-4 col-sm-4">
            <h6 className='flowratefont'>Production Cost per M3</h6>
            <button className='knowmorebtn'>{product.specifications.production_cost}</button>
          </div>
        </div>

        <hr className='horizental-border' />
        <div className='row'>
          {product.applications.map((application, index) => (
            <div className='col-12 col-sm-4 col-md-4 border-rightproduct' key={index}>
              <Image
                src={application.icons}
                alt={application.name}
                className='application-icon m-3'
                width={41}
                height={41}
                fetchpriority="high"
              />
              <span className='goldmining'>{application.name}</span>
            </div>
          ))}
        </div>
        <hr className='horizental-border' />

        <h6 className='productpagecolor'>{product.description}</h6>
        <p className='productcontent'>{product.advantages}</p>
        <p className='productcontent my-3'>{product.concept}</p>
        <p className='productcontent'>{product.content}</p>
        <h4 className='benifitfont dark-blue mt-5'>Key Benefits:</h4>
        <ul className='why-oxair-list'>
          {product.key_benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        </div>
      </Col>
      <div>
      <Image
  src={oxairEventBanner}
  alt="Oxair Event Banner"
  layout="responsive"
  objectFit="cover"
/>
      </div>
    
      <ContactUsToday />
    </Row>
  );
};

export default OxygenGenerator;
