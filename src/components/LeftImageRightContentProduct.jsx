import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import initialMainImageSrc from '@/assets/images/oxygen_150.png'; // Renamed to avoid conflict
import oxygen_small1 from '@/assets/images/oxygen_small1.png';
import oxygen_small2 from '@/assets/images/oxygen_small2.png';
import oxygen_small3 from '@/assets/images/oxygen_small3.png';
import emptyImage from '@/assets/images/emptyImage.png';
import Link from "next/link";

const LeftImageRightContentProduct = ({ imageSrc }) => {
  const [mainImage, setMainImage] = useState(imageSrc || initialMainImageSrc);

  const handleImageClick = (newSrc) => {
    setMainImage(newSrc);
  };

  return (
    <Row className="mt-50">
      <Col>
        <Image
          src={mainImage}
          alt="Main Product"
          objectFit="cover"
          layout="responsive"
          className="w-100"
        />
        <div className="col-12">
          <div className="row">
            <div className="col-3 mt-4">
              <Image
                src={oxygen_small1}
                alt="Small Product 1"
                className="img-fluid"
                onClick={() => handleImageClick(oxygen_small1)}
                width={150}
                height={150}
                objectFit="cover"
              />
            </div>
            <div className="col-3 mt-4 mb-3">
              <Image
                src={oxygen_small2}
                alt="Small Product 2"
                className="img-fluid"
                onClick={() => handleImageClick(oxygen_small2)}
                width={150}
                height={150}
                objectFit="cover"
              />
            </div>
            <div className="col-3 mt-4 mb-3">
              <Image
                src={oxygen_small3}
                alt="Small Product 3"
                className="img-fluid"
                onClick={() => handleImageClick(oxygen_small3)}
                width={150}
                height={150}
                objectFit="cover"
              />
            </div>
            <div className="col-3 mb-3 mt-4">
              <Image
                src={emptyImage}
                alt="Empty"
                className="img-fluid"
                onClick={() => handleImageClick(emptyImage)}
                width={150}
                height={150}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="img-width img-fluid">
        

  <Link href="#" className="btn btn-outline-none">  <svg className="inner-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40">
  <g id="Layer_2" data-name="Layer 2" transform="translate(-2 -2)">
    <path id="Path_1785" data-name="Path 1785" d="M37.64,6.36C33.6,2.32,24.64,2,22,2S10.4,2.32,6.36,6.36,2,19.36,2,22s.32,11.6,4.36,15.64S19.36,42,22,42s11.6-.32,15.64-4.36S42,24.64,42,22,41.68,10.4,37.64,6.36ZM26,34H18a2,2,0,0,1,0-4h8a2,2,0,0,1,0,4Zm3.42-12.58-6,6a2,2,0,0,1-2.84,0l-6-6a2.008,2.008,0,0,1,2.84-2.84L20,21.18V12a2,2,0,0,1,4,0v9.18l2.58-2.6a2.008,2.008,0,1,1,2.84,2.84Z" transform="translate(0 0)" fill="#2bdafa"/>
  </g>
</svg><span className="brocherfont">Download Product Brochure</span></Link>
</div>

      </Col>
    </Row>
  );
};

export default LeftImageRightContentProduct;
