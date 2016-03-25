import Ember from 'ember';
import Scrolling from 'record-keeper-client/mixins/scrolling';

export default Ember.Component.extend(Scrolling, {
  classNames: ['student-records-component'],

  scrollBuffer: 200,

  didInsertElement() {
    this._super(...arguments);
    this.bindScrolling('.lf-dialog'); // modal container
  },

  willDestroyElement() {
    this._super(...arguments);
    this.unbindScrolling('.lf-dialog');
  },

  allRecordLoaded() {
    let meta = this.get('selectedStudent.records.meta');
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    return meta.page === meta.total_pages;
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
  },

  scrollBufferReached() {
    let modal = Ember.$('.lf-dialog');
    return (modal.scrollTop() + modal.height() > Ember.$('.student-records-component').height() - this.get('scrollBuffer'));
  },

  scrolled() {
    if (!this.allRecordLoaded() && this.scrollBufferReached()) {
      this.unbindScrolling('.lf-dialog');

      this.get('selectedStudent').pageNext('record').then(() => {
        if (!this.allRecordLoaded()) {
          this.bindScrolling('.lf-dialog');
        }
      });
    }
  }
});
