import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <a href="http://localhost:3000/"><p>Petopia &copy; {currentYear}</p></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
