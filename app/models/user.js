import DS from 'ember-data';
import HasManyQuery from 'ember-data-has-many-query';

export default DS.Model.extend(HasManyQuery.ModelMixin, {
  email: DS.attr('string'),
  admin: DS.attr('boolean', { defaultValue: false }),

  students: DS.hasMany('student'),

  studentsPerPage: DS.attr('number', {
    defaultValue() { return 25; }
  })
});
