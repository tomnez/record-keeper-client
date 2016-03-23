import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('students', function() {
    this.modal('student-records', { withParams: 'studentRecords' });
  });
});

export default Router;
