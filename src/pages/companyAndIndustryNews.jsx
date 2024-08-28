import InnerPageBanner from "@/components/InnerPageBanners";
//import UnderConstructionImage from "../assets/images/construction.png";
import IndustryNews from "../../public/images/industry_news.jpg"
import Image from "next/image";



const resourcePage = () => {
    return (
      <>
        <InnerPageBanner
          heading="Our Resources"
          subHeading="Company and Industry News"
        />
        <div className="container">
        <Image
        fetchpriority="high"
  src={IndustryNews}
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