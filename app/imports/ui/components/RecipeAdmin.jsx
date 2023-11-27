import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Recipe (Admin) table. See pages/ListRecipeAdmin.jsx. */
const RecipeAdmin = ({ recipe }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={recipe.image} width={75} />
      <Card.Title>{recipe.name}</Card.Title>
      <Card.Subtitle>{recipe.filter}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{recipe.time} {recipe.cost}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
RecipeAdmin.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    cost: PropTypes.string,
    filter: PropTypes.string, // Change to PropTypes.array if it's an array
    appliances: PropTypes.string, // Change to PropTypes.array if it's an array
    ingredients: PropTypes.string, // Change to PropTypes.array if it's an array
    recipe: PropTypes.string,
  }).isRequired,
};

export default RecipeAdmin;
