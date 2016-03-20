import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('student-listing', 'Integration | Component | student listing', {
  integration: true
});

const students = Ember.Object.create({
  content: [{
    firstName: 'Jamie',
    lastName: 'Thomas'
  },
  {
    firstName: 'Donny',
    lastName: 'Barley'
  },
  {
    firstName: 'Buh',
    lastName: 'Bones'
  }]
});

const model = Ember.Object.create({ email: 'tom@tom.com', students });

test('it renders a list of students', function(assert) {
  this.set('model', model);

  this.render(hbs`{{student-listing model=model}}`);

  assert.equal(this.$('.student-item').first().text().trim(), 'Jamie Thomas', 'it lists students names');
  assert.equal(this.$('.student-item').length, 3, 'it lists at least page 1 of students');
});

test('it renders a "no students yet" message when there are no students', function(assert) {
  this.set('model', model);
  this.set('model.students.content', []);

  this.render(hbs`{{student-listing model=model}}`);

  assert.equal(this.$('p').first().text().trim(), 'You have not added any students yet.', 'it displays a "no students" message');
});
