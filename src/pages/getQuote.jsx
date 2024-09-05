import React from "react";
import InnerPageBanner from "@/components/InnerPageBanners";
import { Container, Row, Col, Image } from "react-bootstrap";
import Sewage from '../assets/images/oxygen_small1.png';

import "../styles/globals.css";

const GetQuote = () => {

  return (
    <>
      <InnerPageBanner
        heading="Get Quote"
        subHeading="ROI"
      />
      <Container className="mt-5">
        <Row>
          <Col>
          <h3 className="roi-title my-5">ROI Oxair Oxygen Plant</h3>
            <h4 className="roi-subtitle my-3">Cost of Cylinders @ INR 250 for 24 Cylinders Per Day</h4>
            <div class="row">
        <div class="col-md-4 col-sm-12 d-flex">
            <div class="card card-custom w-100">
                <div class="card-header card-header-custom">
                    No of cylinders <br/><small className="smallfont"> Per day</small>
                </div>
                <div class="card-body card-body-custom">
                    24x250x365
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 d-flex">
            <div class="card card-custom w-100">
                <div class="card-header card-header-custom">
                    Cost of cylinders <br/> <small className="smallfont">for one year</small>
                </div>
                <div class="card-body card-body-custom">
                    21,90,000/-
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 d-flex">
            <div class="card card-custom w-100">
                <div class="card-header card-header-custom">
                    Grand total expenses <br/>
                    <small className="smallfont">@ 250 per cylinder for a consumption of 24 cylinders per day</small>
                </div>
                <div class="card-body card-body-custom">
                    21,90,000/-
                </div>
            </div>
        </div>
    </div>
          </Col>
          </Row>
          <section>

            <p className="roi-subtitle mt-5">
              Cost Benefit Analysis Oxair Plant Running Cost for 1 Year
            </p>



            <Row className="cylinders">
              <Col md={2}>
                <Image fetchpriority="high" src={Sewage} alt="Glass" width={60} height={60} />
              </Col>
              <Col md={10}>
                <p className="oxairPlantoa">Oxair Plant OA SS 120 (120 LPM Plant) Equivalent 24 Cylinders Per Day <br /> Production Capacity</p>
                <div><small className="text-white">Note: </small><span className="oxairspecpower">Oxair Spec Power for 120 LPM/24 cylinders plant is 9 KWH. For this size of plant, most of the competitors <br /> use 14 KWH spec power.</span></div>
              </Col>
            </Row>
            <section>
              <div className="row mt-5 cardspace">
                <div className="col-md-3 col-sm-6 col-12 mb-3">
                  <h5 className="card-title">No Units Consumed in a day (For producing 24 cylinders)</h5>
                  <div>
                  <p className="card-text">
                    9x20 = <span className="card-text2">180</span>
                  </p>
                  <small className="card-text1">Units of Electricity</small>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 mb-3">
                  <h5 className="card-title">Average Electricity Cost @Rs. 10 Per Unit for one year.</h5>
                  <div className="mt-3">
                  <p className="card-text">
                    180x12x365 = <span className="card-text2">7,88,400</span>
                  </p>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 mb-3">
                  <h5 className="card-title">Maintenance cost for 12 months @12000 INR PM</h5>
                  <div className="mt-3">
                  <p className="card-text2">1,44,000.00</p>
                  <span className="card-text3">Per Annum</span>
                </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 mb-3">
                  <h5 className="card-title">Grand total expenses one Year</h5>
                  <div className="mt-5">
                  <p className="card-text2">9,32,400.00</p>
                </div>
                </div>
              </div>

              {/* <hr />
              <div className="row cardspace">
                <div className="col-md-3 col-sm-6 col-12 mb-3">
                  <p className="card-text">
                    9x20 = <span className="card-text2">180</span>
                  </p>
                  <small className="card-text1">Units of Electricity</small>
                </div>

                <div className="col-md-3 col-sm-6 col-12 mb-3">
                  <p className="card-text">
                    180x12x365 = <span className="card-text2">7,88,400</span>
                  </p>
                </div>

                <div className="col-md-3 col-sm-6 col-12 mb-3">
                  <p className="card-text2">1,44,000.00</p>
                  <span className="card-text3">Per Annum</span>
                </div>

                <div className="col-md-3 col-sm-6 col-12 mb-3">
                  <p className="card-text2">9,32,400.00</p>
                </div>
              </div> */}

            </section>
          </section>
          <div className="savingcylinder d-flex">
            <Col md={2}>
              <Image fetchpriority="high" src={Sewage} alt="Glass" width={60} height={60} />
            </Col>
            <Col md={10}>
              <div>
                <p><span className="supersavemodel">Savings over cylinders using Oxair Super Saver Model OASS 120:</span> <span className="savings-text">12,57,600</span><span className="capexss"> (Twelve Lakhs Fifty-Seven Thousand Six hundred only) Including the CAPEX, Oxair SS 120 assured ROI is within 24-30 months.</span></p>
              </div>
            </Col>
          </div>
          {/* <div className="mt-5">
            <p className="roi-subtitle">Cost Benefit Analysis over LOX</p>
            <p className="costoflox">Cost of LOX @ INR 30 Per M3 for 172 M3 Per Day (Equivalent to 24 Jumbo Cylinders)</p>
            <div className="row my-3">
              <div className="col-md-4 col-sm-6 col-12 mb-3 d-flex">
                <div className="get-box">
                  <p className="loxconsumed">
                    Total LOX consumed<br />
                    <small className="oneyear">for one year</small>
                  </p>
                  <p className="card-text2">172x365 = 62,780 M3</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 mb-3 d-flex">
                <div className="get-box">
                  <p className="loxconsumed">
                    Cost of LOX for one year<br />
                    <small className="oneyear">@ INR 30 Per M3</small>
                  </p>
                  <p className="card-text2">18,83,400</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 mb-3 d-flex">
                <div className="get-box">
                  <p className="loxconsumed">
                    Grand total expenses<br />
                    <small className="oneyear">@ 172 m3 per day for equivalent<br />
                      LOX of 24 cylinders per day</small>
                  </p>
                  <p className="card-text2">18,83,000.00</p>
                </div>
              </div>
            </div>

          </div> */}
          <div className="my-5">
          <Col>
          <p className="roi-subtitle">Cost Benefit Analysis over LOX</p>
            <p className="costoflox">Cost of LOX @ INR 30 Per M3 for 172 M3 Per Day (Equivalent to 24 Jumbo Cylinders)</p>
            <div class="row">
        <div class="col-md-4 col-sm-6 col-12 mb-3 d-flex">
        <div className="get-box w-100">
                  <p className="loxconsumed">
                    Total LOX consumed<br />
                    <small className="oneyear">for one year</small>
                  </p>
                  <p className="card-text2">172x365 = 62,780 M3</p>
                </div>
        </div>
        <div class="col-md-4 col-sm-6 col-12 mb-3 d-flex">
        <div className="get-box w-100">
                  <p className="loxconsumed">
                    Cost of LOX for one year<br />
                    <small className="oneyear">@ INR 30 Per M3</small>
                  </p>
                  <p className="card-text2">18,83,400</p>
                </div>
        </div>
        <div class="col-md-4 col-sm-6 col-12 mb-3 d-flex">
        <div className="get-box w-100">
                  <p className="loxconsumed">
                    Grand total expenses<br />
                    <small className="oneyear">@ 172 m3 per day for equivalent<br />
                      LOX of 24 cylinders per day</small>
                  </p>
                  <p className="card-text2">18,83,000.00</p>
                </div>
        </div>
    </div>
          </Col>
          </div>

          <div className="savingcylinder2 d-flex">
            <Col md={2}>
              <Image fetchpriority="high" src={Sewage} alt="Glass" width={60} height={60} />
            </Col>
            <Col md={10}>
              <div>
                <p><span className="supersavemodel2">Savings over LOX using Oxair Super Saver Model OASS 120:</span> <span className="savings-text">9,51,000</span><span className="capexss"> (Nine Lakhs Fifty-One Thousand only) Including the CAPEX, Oxair SS 120 assured ROI is within 30-36 months.</span></p>
              </div>
            </Col>
          </div>

       
        <hr className="mt-4" />
      </Container>
    </>
  );
};

export default GetQuote;
