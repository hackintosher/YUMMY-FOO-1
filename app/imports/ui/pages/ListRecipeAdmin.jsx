import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import { Recipes } from '../recipe/Recipe'; // Adjust the path accordingly
import EditRecipe from './EditRecipe'; // Import the EditRecipe component

const ListRecipeAdmin = () => {
  const { ready, recipes } = useTracker(() => {
    const subscription = Meteor.subscribe(Recipes.adminPublicationName);
    const rdy = subscription.ready();
    const recipeItems = Recipes.collection.find({}).fetch();
    return {
      recipes: recipeItems,
      ready: rdy,
    };
  }, []);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleRemoveRecipe = (recipeId) => {
    Meteor.call('recipes.remove', recipeId, (error) => {
      if (error) {
        console.error('Error removing recipe:', error.reason);
      }
    });
  };

  const handleEditRecipe = (recipeId) => {
    setSelectedRecipeId(recipeId);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setSelectedRecipeId(null);
    setShowEditModal(false);
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Recipes (Admin)</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {recipes.map((recipe) => (
              <Col key={recipe._id}>
                <Card>
                  <Card.Header>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Subtitle>{recipe.filter}</Card.Subtitle>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{recipe.time} {recipe.cost}</Card.Text>
                    <footer className="blockquote-footer">{recipe.owner}</footer>
                    <Button variant="danger" onClick={() => handleRemoveRecipe(recipe._id)}>
                      Remove Recipe
                    </Button>
                    <Button variant="primary" onClick={() => handleEditRecipe(recipe._id)}>
                      Edit Recipe
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Modal for editing recipes */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Pass the recipeId to the EditRecipe component */}
          {selectedRecipeId && <EditRecipe recipeId={selectedRecipeId} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default ListRecipeAdmin;
