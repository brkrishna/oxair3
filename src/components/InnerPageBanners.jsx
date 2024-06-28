const { Container, Row, Col } = require("react-bootstrap")

const InnerPageBanner = ({ 
    heading,
    subHeading,
    backgroundImage
}) =>{

    const bannerImage = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: '#fff',
        textAlign: 'left',
      };

    return(
        <>
        
        <Container>
        <div  className="inner-banner">
            <Row>
                <Col>
                    <h1 className='banner-heading'>{heading}</h1>
                    <h5 className='banner-sub-heading'>{subHeading}</h5>
                </Col>
            </Row>
            </div>
        </Container>
        
        </>
    )
}
export default InnerPageBanner;