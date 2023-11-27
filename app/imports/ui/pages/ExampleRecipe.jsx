import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
/* import { Col, Row, Container, Card } from 'react-bootstrap'; */
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { Recipes } from '../../api/recipes/Recipes';
import LoadingSpinner from '../components/LoadingSpinner';
import Recipe from '../components/Recipe';

const ExampleRecipe = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditContact', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { recipe, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Recipes.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const recipeItem = Recipes.collection.findOne(_id);
    return {
      recipe: recipeItem,
      ready: rdy,
    };
  }, [_id]);

  return (ready ? (
  /*
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Card>
            <Card.Img variant="top" src={recipe.image} height="400px" />
            <Card.Body>
              <Row>
                <Col>
                  <Row><Card.Title>{recipe.name}</Card.Title></Row>
                  <Row>
                    <Card.Text>Appliances: {recipe.appliances.join(', ')}</Card.Text>
                    <Card.Text>Ingredients: {recipe.ingredients.join(', ')}</Card.Text>
                    <Col><Card.Text>Cost Per Serving: {recipe.cost}</Card.Text></Col>
                    <Col><Card.Text>Time: {recipe.time}</Card.Text></Col>
                    <Col><Card.Text>Filter: {recipe.filter.join(', ')}</Card.Text></Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col><Card.Text>Recipe</Card.Text></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    */
    <Recipe recipe={recipe} />
  ) : <LoadingSpinner />);
};

// Require a document to be passed to this component.
ExampleRecipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    cost: PropTypes.string,
    filter: PropTypes.string, // Make array?
    appliances: PropTypes.string, // Make array?
    ingredients: PropTypes.string, // Make array
    recipe: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ExampleRecipe;
