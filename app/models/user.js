import DS from 'ember-data';
import HasManyQuery from 'ember-data-has-many-query';
import Ember from 'ember';

const { RSVP: { Promise }} = Ember;

export default DS.Model.extend(HasManyQuery.ModelMixin, {
  email: DS.attr('string'),
  admin: DS.attr('boolean', { defaultValue: false }),

  students: DS.hasMany('student', { async: true }),

  studentsPerPage: DS.attr('number', {
    defaultValue() { return 25; }
  }),

  pageNext(type) {
    let pluralizedHasManyType = `${type}s`;
    let meta = this.get(`${pluralizedHasManyType}.content.meta`);
    let query = { page: meta.page + 1, per_page: this.get(`${pluralizedHasManyType}PerPage`) };

    return new Promise((resolve) => {
      this.query(pluralizedHasManyType, query).then((records) => {
        resolve();
      });
    });
  }
});
