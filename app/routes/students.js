import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('currentUser.user');
  },

  afterModel(model) {
    model.pageNext('student', { page: 1 });
  }
});