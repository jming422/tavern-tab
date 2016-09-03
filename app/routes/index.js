// app/routes/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  cookies: Ember.inject.service(),

  currentUser: Ember.computed(function() {
    return this.get('cookies').read('currentUser');
  }).volatile(),


  beforeModel() {
    const currentUser = this.get('currentUser');
    if(!currentUser) {
      this.transitionTo('people');
    }
  },

  model() {
    return this.store.findRecord('person', this.get('currentUser'));
  }

});
