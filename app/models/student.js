import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  birthdate: DS.attr('date'),
  iepDate: DS.attr('date'),
  txFrequency: DS.attr('string'),
  primaryDisability: DS.attr('string'),
  secondaryDisability: DS.attr('string'),
  goals: DS.attr('string')
});
