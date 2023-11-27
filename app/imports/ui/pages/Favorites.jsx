// components/HomePage.jsx
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Recipe from '../components/Recipe';
import LoadingSpinner from '../components/LoadingSpinner';
import { Recipes } from '../../api/recipes/Recipes';

// eslint-disable-next-line react/prop-types
const UserHome = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, recipeInfo } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Recipes.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the ContactAdmin documents
    const recipeItems = Recipes.collection.find({}).fetch();
    return {
      recipeInfo: recipeItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container>
      <h1>Favorites</h1>
      <Row className="mt-2">
        <Col xs={1}>
          <Link to="/search">
            <Button variant="primary" block>
              Search
            </Button>
          </Link>
        </Col>
        <Col xs={1} className="w-25">
          <Link to="/add-recipe">
            <Button variant="primary" block>
              Add Recipe
            </Button>
          </Link>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {recipeInfo.map((recipe) => (<Col key={recipe._id}><Recipe recipe={recipe} /></Col>))}
      </Row>
      <Row>
        <Col>
          <Card>
            <Link to="/burger">
              <Card.Img variant="top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg" style={{ height: '400px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to="/burger">
                <Card.Title>Burger</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Link to="/pancakes">
              <Card.Img variant="top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" style={{ height: '400px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to="/pancakes">
                <Card.Title>Pancakes</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Link to="/tacos">
              <Card.Img variant="top" src="https://www.preparedfoodphotos.com/wp-content/uploads/Tacos_1109-6-500x333.jpg" style={{ height: '400px', objectFit: 'cover' }} />
            </Link>
            <Card.Body>
              <Link to="/tacos">
                <Card.Title>Tacos</Card.Title>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.String,
    image: PropTypes.String,
    time: PropTypes.String,
    cost: PropTypes.String,
    filter: PropTypes.String, // Make array?
    appliances: PropTypes.String, // Make array?
    ingredients: PropTypes.String, // Make array
    recipe: PropTypes.String,
    owner: PropTypes.String,
    _id: PropTypes.String,
  }).isRequired,
};

export default UserHome;
