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
  userLogin('tom@tom.com', 'password');

  visit('/students');

  andThen(function() {
    assert.equal(currentURL(), '/students');
  });
});
