import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=' + params.committeeChoice + '&subcommittee=false&apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
  // actions: {
  //   subcommitteeLookup(params) {
  //     this.transitionTo('subcommitteeresults', params.committee_id);
  //   }
  // }
});
