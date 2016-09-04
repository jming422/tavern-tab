import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  issued: DS.hasMany('record', { inverse: 'issuer' }),
  received: DS.hasMany('record', { inverse: 'receiver' })
});
