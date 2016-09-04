import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  amount: DS.attr('number'),      //Floating point, in dollars
  description: DS.attr('string'),
  issuer: DS.belongsTo('person', { inverse: 'issued' }),
  receiver: DS.belongsTo('person', { inverse: 'received' })
});
