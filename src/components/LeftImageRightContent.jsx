import { Row, Col } from "react-bootstrap";
import Image from "next/image";

const LeftImageRightContent = ({ imageSrc, children }) => {
  return (
    <>
      <Row className="mt-50">
        <Col md={4}>
          <Image
            src={imageSrc}
            alt=""
            height="auto"
           className="w-100"
           style={{ objectFit: 'cover' }}
           
           
         />
        </Col>
        <Col md={8}>{children}</Col>
      </Row>
    </>
  );
};

export default LeftImageRightContent;
