import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  birthdate: DS.attr('date'),
  iep_date: DS.attr('date'),
  tx_frequency: DS.attr('string'),
  primary_disability: DS.attr('string'),
  secondary_disability: DS.attr('string'),
  goals: DS.attr('string')
});
