import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

/** Renders a single row in the List Recipe (Admin) table. See pages/ListRecipeAdmin.jsx. */
const Recipe = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="h-100 grow-on-hover" style={{ boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', border: 'none', borderRadius: '15px', borderBottomRadius: '0px', overflow: 'hidden', position: 'relative' }}>
      <Card.Header style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
        <Card.Img
          variant="top"
          src={recipe.image}
          alt={recipe.name}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            maxHeight: '250px',
            objectFit: 'cover',
            borderTop: '15px',
          }}
        />
      </Card.Header>
      <Card.Body style={{ color: 'black', position: 'relative', zIndex: 1 }}>
        <Row>
          <Col>
            <Card.Title style={{ fontSize: 'xx-large', marginBottom: '10px' }}>
              {recipe.name}
            </Card.Title>
          </Col>
          <Col>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
              onClick={handleFavoriteToggle}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} color={isFavorite ? 'gold' : 'gray'} size="2x" />
            </button>
          </Col>
        </Row>
        <Card.Text>Time: {recipe.time}</Card.Text>
        <Card.Text>Cost: {recipe.cost}</Card.Text>
        <Card.Text>Filter: {recipe.filter.join(', ')}</Card.Text>
        <Card.Text>Appliances: {recipe.appliances.join(', ')}</Card.Text>
        <Card.Text>Ingredients: {recipe.ingredients.join(', ')}</Card.Text>
        <Card.Text>Recipe: {recipe.recipe}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Require a document to be passed to this component.
Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: String,
    image: String,
    time: String,
    cost: String,
    filter: String, // Make array?
    appliances: String, // Make array?
    ingredients: String, // Make array
    recipe: String,
    owner: String,
  }).isRequired,
};

export default Recipe;
