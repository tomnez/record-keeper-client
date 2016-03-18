import Ember from 'ember';

export default Ember.Mixin.create({
  bindScrolling(selector) {
    var _this = this;

    var onScroll = function () {
      Ember.run.throttle(_this, _this.scrolled, 100);
    };

    $(selector).bind('scroll', onScroll);
  },

  unbindScrolling(selector) {
    $(selector).unbind('scroll');
  }
});
