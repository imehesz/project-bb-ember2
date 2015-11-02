import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax("/data/books.json", {
        success: (response) => {
          resolve(response);
        },
        error: (reason) => {
          reject(reason);
        }
      }) 
    });
  }
});
