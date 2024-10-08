 
import InnerPageBanner from "@/components/InnerPageBanners";
import GoogleAnalytics from "@components/GoogleAnalytics";
import HpModels from "@components/HighPerformanceModels"
import Head from "next/head";



const productPage = () => {
  return (
    <>
    <Head>
    <title>Oxair - High Performance Medical Oxygen Generators </title>
  <meta name="description" content="We provide high-performance oxygen generators, including the OA 80 HP, OA 120 HP, OA 200 HP, OA 320 HP, OA 450 HP, and OA 550 HP models" />
  <link rel="icon" href="/icons/favicon-16x16.png" type="image/x-icon" />
    </Head>
    <GoogleAnalytics />
      <InnerPageBanner
        heading="Our Products"
        subHeading="High Performance Models"
      />
      <HpModels/>
  
      
    </>
  );
};

export default productPage;
