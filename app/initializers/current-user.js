import Ember from 'ember';

export function initialize(application) {
  application.deferReadiness();

  let CurrentUser = Ember.Object.create({ user: null });

  application.register('service:current-user', CurrentUser, { instantiate: false, singleton: true });

  application.inject('authenticator', 'currentUser', 'service:current-user');
  application.inject('route', 'currentUser', 'service:current-user');
  application.inject('controller', 'currentUser', 'service:current-user');
  application.inject('component', 'currentUser', 'service:current-user');

  application.advanceReadiness();
}

export default {
  name: 'current-user',
  initialize
};
