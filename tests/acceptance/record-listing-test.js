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

test('clicking "view records" lists the first page of records', function(assert) {
  userLogin('tom@tom.com', 'password');

  visit('/students');

  click('[data-id="0265c7e6-784a-437b-bbd4-307e74561c84"] .btn-view-records');

  andThen(function() {
    assert.equal($('.student-records-list-item').length, 25, 'page 1 of student records loads');
  });
});
