import { Row, Col } from "react-bootstrap";
import Image from "next/legacy/image";

const LeftImageRightContent = ({ imageSrc, children }) => {
  return (
    <>
      <Row className="mt-50">
        <Col md={4}>
          <Image
          fetchpriority="high"
            src={imageSrc}
            alt=""
            objectFit="fill"
            layout="responsive"
           className="w-100 responsivetop"
         />
        </Col>
        <Col md={8}>{children}</Col>
      </Row>
    </>
  );
};

export default LeftImageRightContent;