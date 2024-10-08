import React, { useState, useEffect } from 'react';
import Head from "next/head";
import HomePageBanner from "@/components/HomeBanner";
import LeftImageRightContent from "@/components/LeftImageRightContent";
import ButtonComponent from "@/components/Buttons";
import TryRoiCalculater from "@/components/TryRoiCalculater";
import OurMarketsContentTabs from "@/components/OurMarketContentTabs";
import ClientLogs from "@/components/ClientLogs";
import ContactUsToday from "@/components/ContactUsToday";
import whyOxairLeftImg from "../assets/images/why-oxair-left-img.png";
import testiData from "@jsonData/testimonials.json"
import Testimonials from "@components/Testimonials";
import WorldwideInstallations from "@/components/WorldwideInstallations";
import GoogleAnalytics from '@components/GoogleAnalytics';
export default function Home() {
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
  return (
    <>
        <Head>
  <title>Oxair – Premier Oxygen and Nitrogen Generation Systems</title>
  <meta name="description" content="Oxair delivers affordable, safe, and bespoke oxygen and nitrogen generators with exceptional purity and low maintenance, serving a broad spectrum of industries." />
  <link rel="icon" href="/icons/favicon-16x16.png" type="image/x-icon" />
</Head>
<GoogleAnalytics />

      <main className="container">
        <div className="row">
          <HomePageBanner />
        </div>
        <LeftImageRightContent imageSrc={whyOxairLeftImg}>
          <div className='points'>
          <h5 className="headings lawn-green">WHY OXAIR</h5>
          <h1 className="sub-headings dark-blue">
            Oxair-Built Separation Systems are Reliable and built to last
          </h1>
          <ButtonComponent className="get-quote my-2" label={"ISO-9001 & ISO 13485 Certified"} />
          <ul className="why-oxair-list">
        <li className="list-item">Oxair in Australia with 30+ years experience, integrates cutting-edge air separation technologies into our products,
           enhancing efficiency and durability while underscoring our commitment to innovation and environmental responsibility. </li>
           <li className="list-item">Guaranteed Return Of Capital (ROC) in less than 3 years and low maintenance thereafter for the life of the plants. </li>
           <li className="list-item">Our Oxygen and Nitrogen generators boast a remarkable 97% system uptime coupled with 24/7 monitoring and local high-quality quick service in case of disruptions. </li>
          <li className="list-item">Our ISO-9001-certified oxygen generators are ideal for hospitals and industrial use. </li>
          <li className="list-item">ISO 13485 Medical device certified from a reputed audit agency.</li>
          <li className="list-item">Our ISO 13485 medical device-certified oxygen generators are ideal for patient breathing.</li>
          <li className="list-item">We meet all the safety standards for medical oxygen generators and the use of supplemental oxygen.</li>
          <li className="list-item">Uninterrupted oxygen supply during power outages ensures oxygen requirements and prevents failure of Industrial equipment. </li>
          <li className='list-item'>Usage of high-quality materials and components keep the Operational costs low and need very little maintenance. </li>
          <li className='list-item'>True Air Process Actuated valves are used for longer life and trouble free services in place of shorter life solenoid valves that are commonly used in other Oxygen Generators.</li>
          <li className='list-item'>Our systems use stainless steel piping with minimal wear and tear, instead of check valves that fail often. </li>
          <li className='list-item'>Our color touchscreen UI enables automatic operations and requires minimum training.</li>
        </ul>
        </div>
        </LeftImageRightContent>
        <div className="market-place-section">
          <TryRoiCalculater />
        </div>
         <OurMarketsContentTabs />
       <WorldwideInstallations data={installationData} className='worldfont'/>
        <Testimonials data={testimon} />  
        <ClientLogs />
        <ContactUsToday />
      </main>
    </>
  );
}
