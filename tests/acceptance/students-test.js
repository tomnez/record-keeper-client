import { test } from 'qunit';
import Ember from 'ember';
import startApp from 'record-keeper-client/tests/helpers/start-app';
import moduleForAcceptance from 'record-keeper-client/tests/helpers/module-for-acceptance';

let application;

moduleForAcceptance('Acceptance | students', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /students', function(assert) {
  visit('/login');

  andThen(function() {
    fillIn('.login-email', 'tom@tom.com');
    fillIn('.login-password', 'password');
    triggerEvent('.login-submit', 'click');

    visit('/students');

    andThen(function() {
      assert.equal(currentURL(), '/students');
    });
  });
});
