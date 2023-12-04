import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { FavRecipes } from '../../api/recipes/FavRecipes';

const Recipe = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(true);

  const handleFavoriteToggle = () => {
    const existingFavorite = FavRecipes.collection.findOne({ _id: recipe._id });

    if (existingFavorite) {
      // Recipe is already favorited, remove it from FavRecipes
      FavRecipes.collection.remove({ _id: existingFavorite._id, owner: Meteor.user().username }, (error) => {
        if (error) {
          swal('Error', error.message, 'error');
          // Revert local state on error
          setIsFavorite(true);
          localStorage.setItem(`isFavorite_${recipe._id}`, JSON.stringify(true));
        } else {
          // Update localStorage
          localStorage.setItem(`isFavorite_${recipe._id}`, JSON.stringify(false));
          // Update button state
          setIsFavorite(false);
          swal('Success', 'Item removed from favorites', 'success');
        }
      });
    } else {
      // Recipe is not favorited, add it to FavRecipes
      FavRecipes.collection.insert(
        {
          _id: recipe._id,
          name: recipe.name,
          image: recipe.image,
          time: recipe.time,
          cost: recipe.cost,
          filter: recipe.filter,
          appliances: recipe.appliances,
          ingredients: recipe.ingredients,
          recipe: recipe.recipe,
          owner: Meteor.user().username,
        },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
            // Revert local state on error
            setIsFavorite(false);
            localStorage.setItem(`isFavorite_${recipe._id}`, JSON.stringify(false));
          } else {
            // Update localStorage
            localStorage.setItem(`isFavorite_${recipe._id}`, JSON.stringify(true));
            // Update button state
            setIsFavorite(true);
            swal('Success', 'Item added successfully to favorites', 'success');
          }
        },
      );
    }
  };

  return (
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
        <Card.Text>
          Recipe:
          {recipe.recipe.split('|').map((line, index) => (
            <span key={index}>
              {index > 0 && <br />}
              {line.trim()}
            </span>
          ))}
        </Card.Text>
        <Card.Text>
          Dietary Info: {recipe.dietary && recipe.dietary.length > 0 ? (
            recipe.dietary.map((option, index) => (
              <span key={index}>
                {index > 0 && ', '} {/* Add comma and space for options after the first one */}
                {option}
              </span>
            ))
          ) : (
            <span>No dietary information</span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Ensure _id is present
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    dietary: PropTypes.arrayOf(PropTypes.oneOf(['Dairy-Free', 'Vegan', 'Gluten-Free', 'Vegetarian'])),
    filter: PropTypes.arrayOf(PropTypes.string).isRequired,
    appliances: PropTypes.arrayOf(PropTypes.string).isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    recipe: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recipe;
