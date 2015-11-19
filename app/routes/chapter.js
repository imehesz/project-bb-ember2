import Ember from 'ember';

export default Ember.Route.extend({
  model(o) {    
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax("/data/verses.json?book=" + o.book_id + "&chapter=" + o.chapter_id + "&lang=asv", {
        success: (response) => {
          resolve({bookId: o.book_id, verses: response.verses});
        },
        error: (reason) => {
          reject(reason);
        }
      }) 
    });
  }
});
