import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../api/recipes/Recipes.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Recipes.collection.insert(data);
};

// Initialize the RecipesCollection if empty.
if (Recipes.collection.find().count() === 0) {
  if (Meteor.settings.defaultRecipes) {
    console.log('Creating default data.');
    Meteor.settings.defaultRecipes.forEach(data => addData(data));
  }
}
