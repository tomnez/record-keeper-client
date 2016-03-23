import Ember from 'ember';
import PageNextRecordsMixin from 'record-keeper-client/mixins/page-next-records';
import { module, test } from 'qunit';

module('Unit | Mixin | page next records');

// Replace this with your real tests.
test('it works', function(assert) {
  let PageNextRecordsObject = Ember.Object.extend(PageNextRecordsMixin);
  let subject = PageNextRecordsObject.create();
  assert.ok(subject);
});
