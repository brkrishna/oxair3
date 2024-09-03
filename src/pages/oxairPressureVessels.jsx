import InnerPageBanner from "@/components/InnerPageBanners";
import UnderConstructionImage from "../assets/images/construction.jpg";
import Image from "next/legacy/image";


const productPage = () => {
    return (
      <>
        <InnerPageBanner
          heading="Our Products"
          subHeading="Oxair Pressure Vessels"
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
  
  export default productPage;
  