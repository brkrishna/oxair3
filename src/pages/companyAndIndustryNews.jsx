import InnerPageBanner from "@/components/InnerPageBanners";
//import UnderConstructionImage from "../assets/images/construction.png";
import IndustryNews from "../../public/images/industry_news.jpg"
import Image from "next/image";
import Head from "next/head";



const resourcePage = () => {
    return (
      <>
      <Head>
      <title>Oxair – Company | Industry News| Events</title>
  <meta name="description" content="Check out this page for details about our company, the latest industry news, and the events we have attended and much more." />
  <link rel="icon" href="/icons/favicon-16x16.png" type="image/x-icon" />
      </Head>
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