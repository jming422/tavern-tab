// app/controllers/people.js
import Ember from 'ember';

export default Ember.Controller.extend({

  cookies: Ember.inject.service(),

  adding: false,
  newName: '',
  formResponse: '',

  actions: {
    toggleAdd() {
      this.set('adding', !this.get('adding'));
    },

    createPerson() {
      const newName = this.get('newName');
      const newPerson = this.store.createRecord('person', {name: newName});

      newPerson.save().then(() => {
        this.set('adding', false);
        this.set('formResponse', 'New person created!');
        this.set('newName', '');
      });
    },

    signIn(person) {
      this.get('cookies').write('currentUser', person.get('id'), {path: '/'});
      this.transitionToRoute('index');
    }
  }

});
