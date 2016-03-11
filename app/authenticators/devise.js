import Ember from 'ember';
import Devise from 'ember-simple-auth/authenticators/devise';
import ENV from '../config/environment';

const { RSVP: { Promise }, inject: { service }, run, get, isEmpty } = Ember;

export default Devise.extend({
  store: service(),

  serverTokenEndpoint: `${ENV.apiBase}/users/sign_in`,

  authenticate(identification, password) {
    return new Promise((resolve, reject) => {
      const { resourceName, identificationAttributeName } = this.getProperties('resourceName', 'identificationAttributeName');
      const data         = {};
      data[resourceName] = { password };
      data[resourceName][identificationAttributeName] = identification;

      return this.makeRequest(data).then((response) => {

        this.get('store').push(response.record);
        this.setLoggedInUser(response.record.id);

        run(null, resolve, response);
      }, (xhr) => {
        run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });
  },

  restore(data) {
    const { tokenAttributeName, identificationAttributeName } = this.getProperties('tokenAttributeName', 'identificationAttributeName');
    const tokenAttribute = get(data, tokenAttributeName);
    const identificationAttribute = get(data, identificationAttributeName);

    if (!isEmpty(tokenAttribute) && !isEmpty(identificationAttribute)) {
      this.get('store').push(data.record);
      this.setLoggedInUser(data.record.data.id);

      return Promise.resolve(data);
    } else {
      return Promise.reject();
    }
  },

  invalidate() {
    this.get("currentUser").set("user", null);
    return Promise.resolve();
  },

  setLoggedInUser(id) {
    const user = this.get('store').peekRecord('user', id);
    this.get("currentUser").set("user", user);
  }
});
