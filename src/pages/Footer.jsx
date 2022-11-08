import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#252B3B" }}
      className='footer w-100 text-white'
    >
      <Container className='p-2'>
        <Row className='mb-5'>
          <Col>TEAM</Col>
          <Col>Use Cases</Col>
          <Col>Explore</Col>
          <Col>Resources</Col>
          <Col>Subscribe to our newsletter</Col>
        </Row>
        <Row className='mt-3'>
          <Col>instagram</Col>
          <Col>UI design</Col>
          <Col>Figma</Col>
          <Col>Supports</Col>
          <Col></Col>
        </Row>
        <Row className='mt-3'>
          <Col>Facebook</Col>
          <Col>UX design</Col>
          <Col>Costumers</Col>
          <Col>Support</Col>
          <Col>
            <input
              type='email'
              placeholder='Email'
              className='w-100 h-100'
              style={{ color: "blueviolet" }}
            />
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>Twitter</Col>
          <Col>Phototyping</Col>
          <Col>Why I love figma</Col>
          <Col>Eductation</Col>
          <Col></Col>
        </Row>
        <Row className='mt-3'>
          <Col>instagram</Col>
          <Col>UI design</Col>
          <Col>Figma</Col>
          <Col>Supports</Col>
          <Col></Col>
        </Row>
        <Row className='mt-3'>
          <Col>Facebook</Col>
          <Col>UX design</Col>
          <Col>Costumers</Col>
          <Col>Support</Col>
          <Col></Col>
        </Row>
        <Row className='mt-3'>
          <Col>Twitter</Col>
          <Col>Phototyping</Col>
          <Col>Why I love figma</Col>
          <Col>Eductation</Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
