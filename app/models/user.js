import DS from 'ember-data';
import Ember from 'ember';
import raw from 'ic-ajax';

const { RSVP: { Promise }, inject: { service }} = Ember;

export default DS.Model.extend({
  email: DS.attr('string'),
  admin: DS.attr('boolean', { defaultValue: false }),

  session: service(),

  // favoring ember obj vs. hasMany in
  // order to easily paginate without
  // gross hacks.
  students: Ember.computed(function () {
    return Ember.Object.extend({
      content: [],
      meta: null
    }).create();
  }),

  authHeaders: Ember.computed('session', function () {
    let authUser = this.get('session.session.content.authenticated');

    return `Token token=${authUser.token}, email=${authUser.email}`;
  }),

  studentsPerPage: DS.attr('number', {
    defaultValue() { return 25; }
  }),

  pageNext(type, params) {
    let pluralizedHasManyType = `${type}s`;
    let meta = this.get(`${pluralizedHasManyType}.meta`);
    let perPage = this.get(`${pluralizedHasManyType}PerPage`);
    let typeAttribute = this.get(pluralizedHasManyType);
    let page;
    let url;

    if (params && params.page) {
      page = params.page;
    } else {
      page = meta ? meta.page + 1 : 1;
    }

    url = `/users/${this.get('id')}/students?page=${page}&per_page=${perPage}`;

    return new Promise((resolve) => {
      raw({
        type: 'GET',
        url: url,
        headers: {
          Authorization: this.get('authHeaders')
        }
      }).then((result) => {
        this.store.pushPayload(result);

        // TODO: remove once https://github.com/emberjs/data/pull/4110 is in ember-data
        for (let i = 0; i <= result.data.length - 1; i++) {
          let record = this.store.peekRecord(type, result.data[i].id);
          typeAttribute.get('content').addObject(record);
        }

        typeAttribute.set('meta', result.meta);
        resolve();
      });
    });
  }
});
