import InnerPageBanner from "@/components/InnerPageBanners";
import UnderConstructionImage from "../assets/images/construction.png";
import Image from "next/image";


const productPage = () => {
    return (
      <>
        <InnerPageBanner
          heading="Our Products"
          subHeading="Oxair Pressure Vessels"
        />
        <div className="container">
        <Image width={300} src={UnderConstructionImage} alt="" className="mx-auto d-block" />
        </div>
        
      </>
    );
  };
  
  export default productPage;
  