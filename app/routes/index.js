import Ember from 'ember';

export default Ember.Route.extend({

  cookies: Ember.inject.service(),

  currentUser: Ember.computed('cookies', function() {
    return this.get('cookies').read('currentUser');
  }),

  currentUserPerson: Ember.computed('currentUser', function() {
    let currentUser = this.get('currentUser');
    return this.get('store').findRecord('person', currentUser);
  }),


  beforeModel() {
    const currentUser = this.get('currentUser');
    if(!currentUser) {
      this.transitionTo('people');
    }
  }

});
