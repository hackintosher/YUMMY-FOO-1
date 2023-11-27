import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Recipes } from '../../api/recipes/Recipes';
import LoadingSpinner from '../components/LoadingSpinner';

const ExampleRecipe = () => {
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
    <Row className="justify-content-center">
      <Col>
        <Row>
          {recipeInfo.map((recipe) => (<Col key={recipe._id}><Recipes recipe={recipe} /></Col>))}
        </Row>
      </Col>
    </Row>
  ) : <LoadingSpinner />);
};

export default ExampleRecipe;
