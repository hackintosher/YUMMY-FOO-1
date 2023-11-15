import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => {

  const body = document.body;
  body.style.background = 'url("https://github.com/aidenlkw/publicimages/raw/e4d6e1945ec72f3e9bb97e27ddd2ebc7e1b64388/Runway%202023-11-13T20_37_49.641Z%20Upscale%20Image%20Upscaled%20Image%203409%20x%201920.jpg") center center/cover no-repeat';
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
