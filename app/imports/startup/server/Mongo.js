import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { FavRecipes } from '../../api/stuff/FavRecipes';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
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
