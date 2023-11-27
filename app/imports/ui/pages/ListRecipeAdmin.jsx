import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Recipes } from '../../api/recipes/Recipes';
import LoadingSpinner from '../components/LoadingSpinner';
import Recipe from '../components/Recipe';
import EditRecipe from './EditRecipe';
import '../../api/recipes/methods';

const ListRecipeAdmin = () => {
  const { ready, recipes } = useTracker(() => {
    const subscription = Meteor.subscribe(Recipes.userPublicationName);
    return {
      recipes: Recipes.collection.find({}).fetch(),
      ready: subscription.ready(),
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const applySearch = () => {
    if (!searchTerm.trim()) {
      setData(recipes);
      return;
    }

    const filteredData = recipes.filter((item) => {
      const fieldsToSearch = ['name', 'time', 'cost', 'filter', 'appliances', 'ingredients', 'recipe'];

      return fieldsToSearch.some((field) => {
        const fieldValue = item[field];
        if (Array.isArray(fieldValue)) {
          return fieldValue.some(
            (element) => typeof element === 'string' &&
              element.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        } if (typeof fieldValue === 'string') {
          return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      });
    });

    setData(filteredData);
  };

  useEffect(() => {
    if (ready) {
      applySearch();
    }
  }, [ready, searchTerm, recipes]);

  const resetSearch = () => {
    setSearchTerm('');
    setData(recipes);
  };

  const removeRecipe = (recipeId) => {
    // Remove the recipe from the local state (data)
    setData((prevData) => prevData.filter((recipe) => recipe._id !== recipeId));

    // Display success message
    swal('Success', 'Recipe removed successfully', 'success');
  };

  const openEditModal = (recipeId) => {
    const selectedRecipe = recipes.find((recipe) => recipe._id === recipeId);
    setSelectedRecipe(selectedRecipe);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedRecipe(null);

    const updatedRecipes = Recipes.collection.find({}).fetch();
    setData(updatedRecipes);
  };

  return ready ? (
    <Container>
      <Form>
        <Row>
          <Col>
            {/* ... (search form) */}
          </Col>
        </Row>
        <Button variant="secondary" className="mt-3" onClick={resetSearch}>
          Reset Search
        </Button>
      </Form>
      <Row className="mt-4">
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={6} className="mb-4">
            <Recipe recipe={item} onDeleteClick={removeRecipe} />
            <Button variant="info" onClick={() => openEditModal(item._id)}>
              Edit Recipe
            </Button>
          </Col>
        ))}
      </Row>

      {selectedRecipe && (
        <Modal show={editModalOpen} onHide={closeEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Pass the selected recipe, not just the recipe ID */}
            <EditRecipe recipe={selectedRecipe} onClose={closeEditModal} />
          </Modal.Body>
        </Modal>
      )}
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default ListRecipeAdmin;
