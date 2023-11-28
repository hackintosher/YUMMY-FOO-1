import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Recipes } from './Recipes';

Meteor.methods({
  'recipes.remove'(recipeId) {
    check(recipeId, String);

    Recipes.collection.remove(recipeId);
  },
});
