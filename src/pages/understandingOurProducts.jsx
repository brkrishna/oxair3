import InnerPageBanner from "@/components/InnerPageBanners";
import UnderConstructionImage from "../assets/images/construction.png";
import Image from "next/legacy/image";


const resourcePage = () => {
    return (
      <>
        <InnerPageBanner
          heading="Our Resources"
          subHeading="Understanding Our Products"
        />
        <div className="container">
        <Image
        fetchpriority="high"
  src={UnderConstructionImage}
  alt=""
  objectFit="cover" // Adjust object-fit as needed
  layout="responsive"
  className="mx-auto d-block img-fluid"
/>
        </div>
        
      </>
    );
  };
  
  export default resourcePage;