import React from 'react';
import Image from "next/legacy/image";
import VijayaHospital from "../assets/images/vijaya_group_of_hospitals.png"
import Medipluse from "../assets/images/medipulse.png"
import HeritageHospital from "../assets/images/heritage_hospital.png"
import HaranandaniHospital from "../assets/images/hiranandani_hospital.png"
import SagarHospital from "../assets/images/sagar_hospital.png"

const ClientLogs = () => {
 
    const clientLogos = [
        {src:Medipluse, alt:"Medipluse", width: 211, height: 78},         
        { src:HeritageHospital, alt:"Heritage Hospital", with:114, height:111},
        {src:HaranandaniHospital, alt:"Haranandani Hospital", width: 112, height: 102},        
        {src:SagarHospital, alt:"Sagar Hospital", width: 194, height:80},
        {src: VijayaHospital, alt:"Vijaya Group of Hospitals", width: 240, height:53},
    ]

  return (
    <>
    <div className='cliaints-logos-section'>
{clientLogos.map((log, i)=>(
 
    <Image 
    key={i}
    src={log.src}
    alt={log.alt}
    width={log.width}
    height={log.height}
    className="custom-image"
    />
))

}
    </div>
      
    </>
  );
};

export default ClientLogs;
