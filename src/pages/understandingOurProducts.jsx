import InnerPageBanner from "@/components/InnerPageBanners";
import UnderConstructionImage from "../assets/images/construction.jpg";
import Image from "next/legacy/image";
import GoogleAnalytics from "@components/GoogleAnalytics";


const resourcePage = () => {
    return (
      <>
      <GoogleAnalytics />
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