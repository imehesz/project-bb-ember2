import Ember from 'ember';

export default Ember.Route.extend({
  model(o) {    
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax("/data/chapters.json?book=" + o.book_id + "&lang=asv", {
        success: (response) => {
          resolve({bookId: o.book_id, chapters: response.chapters});
        },
        error: (reason) => {
          reject(reason);
        }
      }) 
    });
  }

});
