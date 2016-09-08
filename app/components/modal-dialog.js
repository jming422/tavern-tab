// app/components/modal-dialog.js
import Ember from 'ember';

export default Ember.Component.extend({

  didRender() {
    this._super(...arguments);
    this.$('.modal').modal('show');
    this.$('.modal').on('hide.bs.modal', () => {
      this.get('onClose')();
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('.modal').modal('hide');
  },

  actions: {

    close() {
      this.get('onClose')();
    },

    submit() {
      this.get('onSubmit')();
    }

  }
});
