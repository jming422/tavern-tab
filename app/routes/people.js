// app/routes/people.js
import Ember from 'ember';

export default Ember.Route.extend({

  cookies: Ember.inject.service(),

  model() {
    return this.store.findAll('person');
  },

  setupController(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    this.get('cookies').clear('currentUser');
  }

});
