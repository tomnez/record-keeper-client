import Devise from 'ember-simple-auth/authenticators/devise';
import ENV from '../config/environment';

export default Devise.extend({
  serverTokenEndpoint: `${ENV.apiBase}/users/sign_in`
});
