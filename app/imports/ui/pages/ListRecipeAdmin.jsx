import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import RecipeAdmin from '../components/RecipeAdmin';

/* Renders a table containing all of the Stuff documents. Use <StuffItemAdmin> to render each row. */
const ListRecipeAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, recipes } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Recipes.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const recipeItems = Recipes.collection.find({}).fetch();
    return {
      recipes: recipeItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Recipes (Admin)</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {recipes.map((recipe) => (<Col key={recipe._id}><RecipeAdmin recipe={recipe} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListRecipeAdmin;
