import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

/** Renders a single row in the List Recipe (Admin) table. See pages/ListRecipeAdmin.jsx. */
const Recipe = ({ recipe }) => (
  <Card className="h-100 shadow grow-on-hover">
    <Card.Header style={{ height: '250px', overflow: 'hidden' }}>
      <Card.Img
        variant="top"
        src={recipe.image}
        alt={recipe.name}
        style={{ position: 'absolute', top: 0, right: 0, maxHeight: '250px', objectFit: 'cover' }}
      />
    </Card.Header>
    <Card.Body style={{ color: 'black' }}>
      <Card.Title style={{ fontSize: 'xxx-large' }}>{recipe.name}</Card.Title>
      <Card.Text>Time: {recipe.time}</Card.Text>
      <Card.Text>Cost: {recipe.cost}</Card.Text>
      <Card.Text>Filter: {recipe.filter.join(', ')}</Card.Text>
      <Card.Text>Appliances: {recipe.appliances.join(', ')}</Card.Text>
      <Card.Text>Ingredients: {recipe.ingredients.join(', ')}</Card.Text>
      <Card.Text>Recipe: {recipe.recipe}</Card.Text>
    </Card.Body>
  </Card>
);

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
