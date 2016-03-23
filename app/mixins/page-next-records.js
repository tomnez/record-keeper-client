import Ember from 'ember';
import raw from 'ic-ajax';

/*

  This mixin assumes your model has:

  1. plural attribute of related records as an ember object with array content:

    // ex: user has many students:
    students: Ember.computed(function() {
      return Ember.Object.extend({
        content: [],
        meta: null
      }).create();
    })

  2. a default 'per page' value for paging in new records:

    // ex: default to 25 students per page
    recordsPerPage: DS.attr('number', {
      defaultValue() {
        return 25;
      }
    })

  // example uses in your ember code:

  user.pageNext('student', { page: 2, per_page: 25 }).then((students) => {
    ...
  });

  // or

  user.pageNext('student').then((students) => { ... })

  will default to page 1 and default to the 'studentsPerPage' attribute

*/

const { RSVP: { Promise }, inject: { service } } = Ember;

export default Ember.Mixin.create({
  session: service(),

  authHeaders: Ember.computed('session', function() {
    let authUser = this.get('session.session.content.authenticated');

    return `Token token=${authUser.token}, email=${authUser.email}`;
  }),

  pageNext(type, params) {
    let pluralizedHasManyType = `${type}s`;
    let thisType = `${this.constructor.modelName}s`;
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

    url = `/${thisType}/${this.get('id')}/${pluralizedHasManyType}?page=${page}&per_page=${perPage}`;

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
