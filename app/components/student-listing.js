import Ember from 'ember';
import Scrolling from 'record-keeper-client/mixins/scrolling';

export default Ember.Component.extend(Scrolling, {
  scrollBuffer: 200,

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

      this.get('model').pageNext('student').then(() => {
        if (!this.allStudentsLoaded()) {
          this.bindScrolling(window);
        }
      });
    }
  },

  allStudentsLoaded() {
    let meta = this.get('model.students.meta');
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    return meta.page === meta.total_pages;
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
  },

  scrollBufferReached() {
    let win = Ember.$(window);
    return (win.scrollTop() + win.height() > Ember.$(document).height() - this.get('scrollBuffer'));
  }
});
