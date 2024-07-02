import InnerPageBanner from "@/components/InnerPageBanners";
import UnderConstructionImage from "../assets/images/construction.png";
import Image from "next/image";


const resourcePage = () => {
    return (
      <>
        <InnerPageBanner
          heading="Our Resources"
          subHeading="Understanding Our Products"
        />
        <div className="container">
        <Image width={300} src={UnderConstructionImage} alt="" className="mx-auto d-block" />
        </div>
        
      </>
    );
  };
  
  export default resourcePage;