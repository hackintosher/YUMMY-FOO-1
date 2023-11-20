import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Recipes } from '../../api/recipe/Recipes'; // Adjust the path accordingly
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Recipes.schema);

/* Renders the EditRecipe page for editing a single document. */
const EditRecipe = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Recipe documents.
    const subscription = Meteor.subscribe(Recipes.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Recipes.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);

  // On successful submit, update the data.
  const submit = (data) => {
    const { name, image, time, cost, filter, appliances, ingredients, recipe, owner } = data;
    Recipes.collection.update(_id, {
      $set: { name, image, time, cost, filter, appliances, ingredients, recipe, owner },
    }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Recipe updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Col className="text-center"><h2>Edit Recipe</h2></Col>
          <AutoForm schema={bridge} onSubmit={(data) => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="name" />
                <TextField name="image" />
                <TextField name="time" />
                <TextField name="cost" />
                <TextField name="filter" />
                <TextField name="appliances" />
                <TextField name="ingredients" />
                <TextField name="recipe" />
                <HiddenField name="owner" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditRecipe;
