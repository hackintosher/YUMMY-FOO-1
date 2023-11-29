import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { FavRecipes } from '../../api/stuff/FavRecipes';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addRecipe = (recipe) => {
  console.log(`  Adding: ${recipe.name} (${recipe.owner})`);
  Recipes.collection.insert(recipe);
};

// Initialize the RecipesCollection if empty.
if (Recipes.collection.find().count() === 0) {
  if (Meteor.settings.defaultRecipes) {
    console.log('Creating default recipe.');
    Meteor.settings.defaultRecipes.forEach(recipe => addRecipe(recipe));
  }
}

const addFavRecipes = (favorite) => {
  console.log(`  Adding: ${favorite.name} (${favorite.owner})`);
  FavRecipes.collection.insert(favorite);
};

// Initialize the StuffsCollection if empty.
if (FavRecipes.collection.find().count() === 0) {
  if (Meteor.settings.favoriteData) {
    console.log('Creating default favorites data (is empty).');
    Meteor.settings.favoriteData.forEach(favorite => addFavRecipes(favorite));
  }
}
