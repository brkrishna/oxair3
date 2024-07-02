import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import oxygen_small1 from '@/assets/images/oxygen_small1.png';
import oxygen_small2 from '@/assets/images/oxygen_small2.png';
import oxygen_small3 from '@/assets/images/oxygen_small3.png';
import  emptyImage from '@/assets/images/emptyImage.png';
const LeftImageRightContentProduct = ({ imageSrc, children }) => {
  const [mainImageSrc, setMainImageSrc] = useState(imageSrc);

  const handleImageClick = (newSrc) => {
    setMainImageSrc(newSrc);
  };
  return (
    <Row className="mt-50">
      <Col md={4}>
        <Image
          src={mainImageSrc}
          alt=""
          objectFit="fill"
          layout="responsive"
          className="w-100 "
        />
        <div className="col-12">
  <div className="row">
    <div className="col-3 mt-4">
      <Image src={oxygen_small1} alt="" className="img-fluid" onClick={() => handleImageClick(oxygen_small1)} />
    </div>
    <div className="col-3 mt-4 mb-3">
      <Image src={oxygen_small2} alt="" className="img-fluid" onClick={() => handleImageClick(oxygen_small2)} />
    </div>
    <div className="col-3 mt-4 mb-3">
      <Image src={oxygen_small3} alt="" className="img-fluid" onClick={() => handleImageClick(oxygen_small3)} />
    </div>
    <div className="col-3 mb-3 mt-4">
      <Image src={emptyImage} alt="" className="img-fluid" onClick={() => handleImageClick(emptyImage)} />
    </div>
  </div>
</div>
  
        <div class="img-width">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2BDAFA" class=" inner-icon ">
        <path fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
            clip-rule="evenodd" />
    </svg>
    <a href="/" class="btn btn-outline-none text-white download-product">Download Product Brochure</a>

</div>

      </Col>
      <Col md={8}>{children}</Col>
    </Row>
    
  );
};




export default LeftImageRightContentProduct;
