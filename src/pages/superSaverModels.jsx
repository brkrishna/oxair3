 
import InnerPageBanner from "@/components/InnerPageBanners";
import GoogleAnalytics from "@components/GoogleAnalytics";
import SsModels from "@components/SuperSaveModel"
import Head from "next/head";

const productPage = () => {
  return (
    <>
    <Head>
      <title>Oxair - Super Saver Medical Oxygen Generators</title>
      <meta name="description" content="We provide super saver oxygen generators, including the OA 60 SS, OA 80 SS, OA 120 SS, OA 200 SS, OA 250 SS, OA 320 SS" />
      <link rel="icon" href="/icons/favicon-16x16.png" type="image/x-icon" />
      <link rel="canonical" href="https://example.com/blog/original-post" key="canonical" />
    </Head>
    <GoogleAnalytics />
      <InnerPageBanner
        heading="Our Products"
        subHeading="Super Saver Models"
      />
      <SsModels/>
    </>
  );
};

export default productPage;
