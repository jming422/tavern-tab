// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    openModal(modalName, model) {
      this.render(modalName, {
        into: 'application',
        outlet: 'modal',
        controller: modalName,
        model: model
      });
    },

    closeModal() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
    
  }
});
