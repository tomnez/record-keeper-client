import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  classNames: ['login-form-component', 'vertical-center', 'absolute-cover'],
  session: service(),
  flashMessages: service(),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.get('flashMessages').danger(reason.error, { timeout: 6000 });
      });
    }
  }
});
