import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('currentUser.user');
  },

  afterModel(model) {
    model.query('students', { page: 1, per_page: model.get('studentsPerPage') });
  }
});
