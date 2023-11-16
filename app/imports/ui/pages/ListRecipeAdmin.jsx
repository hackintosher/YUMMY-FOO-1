// import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { useTracker } from 'meteor/react-meteor-data';
// import { Col, Container, Row } from 'react-bootstrap';
// import LoadingSpinner from '../components/LoadingSpinner';
// import RecipeAdmin from '../components/RecipeAdmin';

/* Renders a table containing all of the Stuff documents. Use <StuffItemAdmin> to render each row. */
// const ListRecipeAdmin = () => {
//   // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
//   const { ready, recipes } = useTracker(() => {
//     // Get access to Stuff documents.
//     const subscription = Meteor.subscribe(Recipes.adminPublicationName);
//     // Determine if the subscription is ready
//     const rdy = subscription.ready();
//     // Get the Stuff documents
//     const recipeItems = Recipes.collection.find({}).fetch();
//     return {
//       recipes: recipeItems,
//       ready: rdy,
//     };
//   }, []);
//   return (ready ? (
//     <Container className="py-3">
//       <Row className="justify-content-center">
//         <Col>
//           <Col className="text-center">
//             <h2>List Recipes (Admin)</h2>
//           </Col>
//           <Row xs={1} md={2} lg={3} className="g-4">
//             {recipes.map((recipe) => (<Col key={recipe._id}><RecipeAdmin recipe={recipe} /></Col>))}
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   ) : <LoadingSpinner />);
// };

// export default ListRecipeAdmin;
import React, { useState } from 'react';
import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';

// Hard-coded recipes for testing
const hardCodedRecipes = [
  {
    _id: '1',
    title: 'Burger',
    description: 'This is a description of a burger.',
    image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg',
    category: 'Main Dish',
    cost: 'Medium',
    time: '30 minutes',
  },
  {
    _id: '2',
    title: 'Pancakes',
    description: 'This is a description of pancakes.',
    image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg',
    category: 'Breakfast',
    cost: 'Low',
    time: '20 minutes',
  },
  {
    _id: '3',
    title: 'Tacos',
    description: 'This is a description of tacos.',
    image: 'https://www.preparedfoodphotos.com/wp-content/uploads/Tacos_1109-6-500x333.jpg',
    category: 'Mexican',
    cost: 'Low',
    time: '40 minutes',
  },
];

const ListRecipeAdmin = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [titleFilter, setTitleFilter] = useState('');
  const [costFilter, setCostFilter] = useState('All');
  const [timeFilter, setTimeFilter] = useState('All');

  // Simulate the ready state since we're using hard-coded data
  const ready = true;

  const filteredRecipes = hardCodedRecipes.filter((recipe) => {
    return (
      (categoryFilter === 'All' || recipe.category === categoryFilter) &&
      (titleFilter === '' || recipe.title.toLowerCase().includes(titleFilter.toLowerCase())) &&
      (costFilter === 'All' || recipe.cost === costFilter) &&
      (timeFilter === 'All' || recipe.time === timeFilter)
    );
  });

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleCostChange = (e) => {
    setCostFilter(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTimeFilter(e.target.value);
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Recipes (Admin)</h2>
          </Col>
          <Row className="mb-3">
            <Col md={3} className="mb-2">
              <Form.Control as="select" onChange={handleCategoryChange}>
                <option value="All">All Categories</option>
                <option value="Main Dish">Main Dish</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Mexican">Mexican</option>
                {/* Add more categories as needed */}
              </Form.Control>
            </Col>
            <Col md={3} className="mb-2">
              <Form.Control type="text" placeholder="Search by title" onChange={handleTitleChange} />
            </Col>
            <Col md={3} className="mb-2">
              <Form.Control as="select" onChange={handleCostChange}>
                <option value="All">All Costs</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Form.Control>
            </Col>
            <Col md={3} className="mb-2">
              <Form.Control as="select" onChange={handleTimeChange}>
                <option value="All">All Times</option>
                <option value="20 minutes">20 minutes</option>
                <option value="30 minutes">30 minutes</option>
                <option value="40 minutes">40 minutes</option>
                {/* Add more time options as needed */}
              </Form.Control>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredRecipes.map((recipe) => (
              <Col key={recipe._id}>
                <Card>
                  <Card.Img variant="top" src={recipe.image} style={{ height: '400px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>{recipe.description}</Card.Text>
                    <p>Cost: {recipe.cost}</p>
                    <p>Time: {recipe.time}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default ListRecipeAdmin;
