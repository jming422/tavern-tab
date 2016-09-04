// app/routes/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  cookies: Ember.inject.service(),

  currentUser: Ember.computed(function() {
    return this.get('cookies').read('currentUser');
  }).volatile(),

  currentPerson: null,


  beforeModel() {
    const currentUser = this.get('currentUser');
    if(!currentUser) {
      this.transitionTo('people');
    }
  },

  model() {
    return this.store.findAll('person');
  },

  afterModel(model) {
    const currentPerson = model.findBy('id', this.get('currentUser'));
    if (currentPerson) {
      this.set('currentPerson', currentPerson);
      model.removeObject(currentPerson);
    } else {
      console.log('Route index:32 - Error obtaining current user from model!');
      this.transitionTo('people');
    }
  },

  setupController(controller, model) {
    // Call _super for default behavior
    this._super(controller, model);
    // Inject the current person into the controller
    controller.set('currentPerson', this.get('currentPerson'));
  }

});
