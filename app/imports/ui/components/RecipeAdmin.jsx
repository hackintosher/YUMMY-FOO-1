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
    name: String,
    image: String,
    time: String,
    cost: String,
    filter: String, // Make array?
    appliances: String, // Make array?
    ingredients: String, // Make array
    recipe: String,
  }).isRequired,
};

export default RecipeAdmin;
