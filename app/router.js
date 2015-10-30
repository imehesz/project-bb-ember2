import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('moo');
  this.route('book');

  this.route('chapters', {
    path: 'book/:book_id'
  });

  this.route('chapter', {
    path: 'book/:book_id/:chapter_id'
  });
});

export default Router;
