import Ember from 'ember';
import Scrolling from 'record-keeper-client/mixins/scrolling';

const { inject: { service } } = Ember;

export default Ember.Component.extend(Scrolling, {
  scrollBuffer: 200,

  store: service(),

  didInsertElement() {
    this._super(...arguments);
    this.bindScrolling(window);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.unbindScrolling(window);
  },

  scrolled() {
    if (!this.allStudentsLoaded() && this.scrollBufferReached()) {
      this.unbindScrolling(window);

      this.get('user').pageNext('student').then(() => {
        if (!this.allStudentsLoaded()) {
          this.bindScrolling(window);
        }
      });
    }
  },

  allStudentsLoaded() {
    let meta = this.get('user.students.meta');
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    return meta.page === meta.total_pages;
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
  },

  scrollBufferReached() {
    let win = Ember.$(window);
    return (win.scrollTop() + win.height() > Ember.$(document).height() - this.get('scrollBuffer'));
  },

  actions: {
    viewStudentRecords(studentId) {
      let student = this.get('store').peekRecord('student', studentId);
      let studentRecords = student.get('records.content');

      if (studentRecords.get('length')) {
        this.set('studentRecords', studentRecords);
      } else {
        student.pageNext('record').then((records) => {
          this.set('studentRecords', records.get('content'));
        });
      }
    }
  }
});
