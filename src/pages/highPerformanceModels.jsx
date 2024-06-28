 
import InnerPageBanner from "@/components/InnerPageBanners";
 
import ProductTabs from "@/components/ProductTabs";



const productPage = () => {
  return (
    <>
      <InnerPageBanner
        heading="Our Products"
        subHeading="High Performance Models"
      />
      <ProductTabs/>
  
      
    </>
  );
};

export default productPage;
