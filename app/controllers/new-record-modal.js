// app/controllers/new-record-modal.js
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    close() {
      this.send('closeModal');
    },

    saveRecord() {
      // Perform model validation here
      this.model.save().then(() => {
        this.send('close');
      });
    }

  }
});
