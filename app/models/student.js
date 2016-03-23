import DS from 'ember-data';
import Ember from 'ember';
import pageNextRecords from 'record-keeper-client/mixins/page-next-records';

export default DS.Model.extend(pageNextRecords, {
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  birthdate: DS.attr('date'),
  iepDate: DS.attr('date'),
  txFrequency: DS.attr('string'),
  primaryDisability: DS.attr('string'),
  secondaryDisability: DS.attr('string'),
  goals: DS.attr('string'),

  recordsPerPage: DS.attr('number', {
    defaultValue() {
      return 25;
    }
  }),

  records: Ember.computed(function() {
    return Ember.Object.extend({
      content: [],
      meta: null
    }).create();
  })
});
