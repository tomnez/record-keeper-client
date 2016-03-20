import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders a login form', function(assert) {
  this.render(hbs`{{login-form}}`);

  assert.equal(this.$('.login-form').length, 1, 'form renders');
  assert.equal(this.$('.login-email').length, 1, 'email input renders');
  assert.equal(this.$('.login-password').length, 1, 'password input renders');
});
