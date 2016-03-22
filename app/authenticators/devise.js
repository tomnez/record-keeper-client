import Ember from 'ember';
import Devise from 'ember-simple-auth/authenticators/devise';
import ENV from '../config/environment';

const { RSVP: { Promise }, inject: { service }, run, get, isEmpty } = Ember;

export default Devise.extend({
  store: service(),

  serverTokenEndpoint: `${ENV.apiBase}/users/sign_in`,

  authenticate(identification, password) {
    return new Promise((resolve, reject) => {
      let { resourceName, identificationAttributeName } = this.getProperties('resourceName', 'identificationAttributeName');
      let data = {};

      data[resourceName] = { password };
      data[resourceName][identificationAttributeName] = identification;

      return this.makeRequest(data).then((response) => {
        // http://bit.ly/1T4DGC1 derrr
        run(()=> {
          this.pushAndSetUser(response).then(() => {
            run(null, resolve, response);
          });
        });
      }, (xhr) => {
        run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });
  },

  restore(data) {
    let { tokenAttributeName, identificationAttributeName } = this.getProperties('tokenAttributeName', 'identificationAttributeName');
    let tokenAttribute = get(data, tokenAttributeName);
    let identificationAttribute = get(data, identificationAttributeName);

    if (!isEmpty(tokenAttribute) && !isEmpty(identificationAttribute)) {
      this.get('store').push(data.record);
      this.setLoggedInUser(data.record.data.id);

      return Promise.resolve(data);
    } else {
      return Promise.reject();
    }
  },

  invalidate() {
    this.get('currentUser').set('user', null);
    return Promise.resolve();
  },

  pushAndSetUser(response) {
    let user = this.get('store').push(response.record);

    return new Promise((resolve) => {
      resolve(this.get('currentUser').set('user', user));
    });
  }
});
