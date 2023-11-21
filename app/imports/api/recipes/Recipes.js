import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class RecipesCollection {
  constructor() {
    this.name = 'RecipesCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      name: {
        type: String,
        label: 'Recipe Name',
        max: 100,
      },
      ingredients: {
        type: Array,
        label: 'Ingredients',
      },
      'ingredients.$': {
        type: String,
      },
      preparation: {
        type: String,
        label: 'Preparation Steps',
      },
      difficulty: {
        type: String,
        allowedValues: ['easy', 'medium', 'hard'],
        defaultValue: 'medium',
        label: 'Difficulty Level',
      },
    });

    this.collection.attachSchema(this.schema);
    this.publicationName = `${this.name}.publication`;
  }
}

export const Recipes = new RecipesCollection();
