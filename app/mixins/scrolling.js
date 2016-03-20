import Ember from 'ember';

export default Ember.Mixin.create({
  bindScrolling(selector) {
    let _this = this;

    let onScroll = function() {
      Ember.run.throttle(_this, _this.scrolled, 100);
    };

    $(selector).bind('scroll', onScroll);
  },

  unbindScrolling(selector) {
    $(selector).unbind('scroll');
  }
});
