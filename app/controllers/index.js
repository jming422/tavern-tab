import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openNewRecordModal() {
      const newRecord = this.store.createRecord('record');
      this.send('openModal', 'new-record-modal', newRecord);
    }
  }
});
