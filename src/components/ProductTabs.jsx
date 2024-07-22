// pages/oxygen-generator.js
import React, { useState, useEffect } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import data from '../JsonData/Products.json';
import LeftImageRightContentProduct from './LeftImageRightContentProduct';
import ContactUsToday from './ContactUsToday';
import classNames from 'classnames';


const OxygenGenerator = () => {
  const [key, setKey] = useState('product1');

  useEffect(() => {
    console.log('Loaded data:', data);
  }, []);

  return (
    <div className="container mt-5">
      <Tabs
        id="product-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="bordercolor"
      >
        <Tab
          eventKey="product1"
          title={<span className={classNames({ activetop: key === 'product1' })} >OXAIR HIGH PERFORMANCE 60</span>}
        >
          {data.product1 ? <RenderProduct product={data.product1} /> : <div>Error loading product 1 data</div>}
        </Tab>
        <Tab
          eventKey="product2"
          title={<span className={classNames({ activetop: key === 'product2' })} >OXAIR HIGH PERFORMANCE 80</span>}
        >
          {data.product2 ? <RenderProduct product={data.product2} /> : <div>Error loading product 2 data</div>}
        </Tab>
        <Tab
          eventKey="product3"
          title={<span className={classNames({ activetop: key === 'product3' })} >OXAIR HIGH PERFORMANCE 150</span>}
        >
          {data.product3 ? <RenderProduct product={data.product3} /> : <div>Error loading product 3 data</div>}
        </Tab>
        <Tab
          eventKey="product4"
          title={<span className={classNames({ activetop: key === 'product4' })} >OXAIR HIGH PERFORMANCE 200</span>}
        >
          {data.product4 ? <RenderProduct product={data.product4} /> : <div>Error loading product 4 data</div>}
        </Tab>
        {/* Add more tabs for other products as needed */}
      </Tabs>
    </div>
  );
};

const RenderProduct = ({ product }) => {
  useEffect(() => {
    console.log('Rendering product:', product);
  }, [product]);

  if (!product) {
    console.error('Product data is undefined');
    return <div>Loading...</div>;
  }

  return (
    <Row className='gap-5'>
      <Col md={4} className=''>
        <LeftImageRightContentProduct />
      </Col>
      <Col md={7} className=''>
        <p className="mt-5 productname">{product.name}</p>
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
            <button className='knowmorebtn'>{product.specifications.production_cost_per_M3}</button>
          </div>
        </div>

        <hr className='horizental-border' />
        <div className='row'>
          {product.applications.map((application, index) => (

            <div className='col-12 col-sm-4 col-md-4 border-rightproduct' key={index}>
              <img
                src={application.icons}
                alt={application.name}
                className='application-icon m-3'
                width={41}
                height={41}
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
        <h4 className='benifitfont mt-5'>Key Benefits:</h4>
        <ul className='why-oxair-list'>
          {product.key_benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </Col>
      <ContactUsToday />
    </Row>
  );
};

export default OxygenGenerator;
