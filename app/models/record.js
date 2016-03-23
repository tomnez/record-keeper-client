import DS from 'ember-data';

export default DS.Model.extend({
  studentId: DS.attr('string'),
  date: DS.attr('date'),
  attendance: DS.attr('string'),
  timeIn: DS.attr('date'),
  timeOut: DS.attr('date'),
  hw: DS.attr('string'),
  activity: DS.attr('string'),
  finalData: DS.attr('string')
});
