import DS from 'ember-data';
import Ember from 'ember';
import pageNextRecords from 'record-keeper-client/mixins/page-next-records';

export default DS.Model.extend(pageNextRecords, {
  email: DS.attr('string'),
  admin: DS.attr('boolean', { defaultValue: false }),

  studentsPerPage: DS.attr('number', {
    defaultValue() {
      return 25;
    }
  }),

  // favoring ember obj vs. hasMany in
  // order to easily paginate without
  // gross hacks.
  students: Ember.computed(function() {
    return Ember.Object.extend({
      content: [],
      meta: null
    }).create();
  })
});
