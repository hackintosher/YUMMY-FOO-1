import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Recipes } from '../../api/recipes/Recipes';
import LoadingSpinner from '../components/LoadingSpinner';

const Search = () => {
  const { ready, recipes } = useTracker(() => {
    const subscription = Meteor.subscribe(Recipes.userPublicationName);
    return {
      recipes: Recipes.collection.find({}).fetch(),
      ready: subscription.ready(),
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(recipes);

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

  return ready ? (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <h1 className="text-center">Search Page</h1>
              <Form.Control
                type="text"
                name="search"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary" className="mt-3" onClick={resetSearch}>
          Reset Search
        </Button>
      </Form>
      <Row className="mt-4">
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={6} className="mb-4">
            <Card className="h-100 shadow grow-on-hover">
              <Card.Header style={{ height: '250px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  style={{ position: 'absolute', top: 0, right: 0, height: '250px', width: '400px', objectFit: 'cover' }}
                />
                <Card.Title>{item.name}</Card.Title>
              </Card.Header>
              <Card.Body style={{ color: 'black' }}>
                <Card.Text>Time: {item.time}</Card.Text>
                <Card.Text>Cost: {item.cost}</Card.Text>
                <Card.Text>Filter: {item.filter.join(', ')}</Card.Text>
                <Card.Text>Appliances: {item.appliances.join(', ')}</Card.Text>
                <Card.Text>Ingredients: {item.ingredients.join(', ')}</Card.Text>
                <Card.Text>Recipe: {item.recipe}</Card.Text>
              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default Search;
