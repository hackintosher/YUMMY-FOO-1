import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe, onDeleteClick }) => (
  <Card className="h-100 grow-on-hover" style={{ boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', border: 'none', borderRadius: '15px', borderBottomRadius: '0px', overflow: 'hidden', position: 'relative' }}>
    <Card.Header style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
      <Link to={`/examplerecipe/${recipe._id}`}>
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
      </Link>
    </Card.Header>
    <Card.Body style={{ color: 'black', position: 'relative', zIndex: 1 }}>
      <Row>
        <Col>
          <Link to={`/examplerecipe/${recipe._id}`}>
            <Card.Title style={{ fontSize: 'xx-large', marginBottom: '10px' }}>
              {recipe.name}
            </Card.Title>
          </Link>
        </Col>
        <Col>
          <Button variant="danger" onClick={() => onDeleteClick(recipe._id)}>
            Remove Recipe
          </Button>
          {/* eslint-disable-next-line react/button-has-type */}
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

Recipe.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Ensure _id is present
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    filter: PropTypes.arrayOf(PropTypes.string).isRequired,
    appliances: PropTypes.arrayOf(PropTypes.string).isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    recipe: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired, // Callback for delete action
};

export default Recipe;
