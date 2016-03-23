import DS from 'ember-data';
import Ember from 'ember';
import raw from 'ic-ajax';

const { RSVP: { Promise }, inject: { service } } = Ember;

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  birthdate: DS.attr('date'),
  iepDate: DS.attr('date'),
  txFrequency: DS.attr('string'),
  primaryDisability: DS.attr('string'),
  secondaryDisability: DS.attr('string'),
  goals: DS.attr('string'),

  session: service(),

  records: Ember.computed(function() {
    return Ember.Object.extend({
      content: [],
      meta: null
    }).create();
  }),

  authHeaders: Ember.computed('session', function() {
    let authUser = this.get('session.session.content.authenticated');

    return `Token token=${authUser.token}, email=${authUser.email}`;
  }),

  recordsPerPage: DS.attr('number', {
    defaultValue() {
      return 25;
    }
  }),

  pageNext(type, params) {
    let pluralizedHasManyType = `${type}s`;
    let meta = this.get(`${pluralizedHasManyType}.meta`);
    let perPage = this.get(`${pluralizedHasManyType}PerPage`);
    let typeAttribute = this.get(pluralizedHasManyType);
    let headers = { Authorization: this.get('authHeaders') };
    let page;
    let url;

    if (params && params.page) {
      page = params.page;
    } else {
      page = meta ? meta.page + 1 : 1;
    }

    url = `/students/${this.get('id')}/records?page=${page}&per_page=${perPage}`;

    return new Promise((resolve) => {
      raw({
        type: 'GET',
        url,
        headers
      }).then((result) => {
        this.store.pushPayload(result);

        // TODO: remove once https://github.com/emberjs/data/pull/4110 is in ember-data
        for (let i = 0; i <= result.data.length - 1; i++) {
          let record = this.store.peekRecord(type, result.data[i].id);
          typeAttribute.get('content').addObject(record);
        }

        typeAttribute.set('meta', result.meta);
        resolve(typeAttribute);
      });
    });
  }
});
