// components/HomePage.jsx
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingSpinner from '../components/LoadingSpinner';
import { FavRecipes } from '../../api/recipes/FavRecipes';
import Recipe from '../components/Recipe';

// eslint-disable-next-line react/prop-types
const UserHome = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, recipeInfo } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(FavRecipes.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the ContactAdmin documents
    const recipeItems = FavRecipes.collection.find({}).fetch();
    return {
      recipeInfo: recipeItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container id="favorites-page">
      <h1 className="py-3">Favorites</h1>
      <Row className="mt-2 pb-4">
        <Col className="px-3" xs={1}>
          <Link to="/search">
            <Button variant="primary" block>
              Search
            </Button>
          </Link>
        </Col>
        <Col xs={1} className="w-25 px-3">
          <Link to="/addrecipe">
            <Button variant="primary" block>
              Add Recipe
            </Button>
          </Link>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 pb-5">
        {recipeInfo.map((recipe) => (<Col key={recipe._id}><Recipe recipe={recipe} /></Col>))}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
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

export default UserHome;
