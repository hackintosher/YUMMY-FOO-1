import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => {

  const body = document.body;
  body.style.background = 'url("https://assets.editorial.aetnd.com/uploads/2009/12/gettyimages-1352563243.jpg") center center/cover no-repeat';
  const handleZoomClick = () => {
    document.body.classList.toggle('zoomed');
  };

  return (
    <Container fluid className="my-auto text-center">
      <Link to="/search" style={{ textDecoration: 'none' }}>
        <Button size="lg" className="landing-button" style={{ backgroundColor: '#98C1D9' }} onClick={handleZoomClick}>
          Get Started
        </Button>
      </Link>
    </Container>
  );
};

export default Landing;
