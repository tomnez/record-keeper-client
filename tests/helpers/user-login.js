import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('userLogin',
  function(app, assert, email, password) {
    visit('/login');

    andThen(function() {
      fillIn('.login-email', email);
      fillIn('.login-password', password);
      triggerEvent('.login-submit', 'click');
    });
  }
);
