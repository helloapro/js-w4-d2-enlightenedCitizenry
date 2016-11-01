import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    var key = config.myApiKey;
    var url1 = 'http://congress.api.sunlightfoundation.com/bills?history.active=true&order=last_action_at&apikey=' + key;
    var url2 = 'http://congress.api.sunlightfoundation.com/bills?congress=113&history.enacted=true&chamber=house&order=last_action_at&apikey=' + key;
    var url3 = 'http://congress.api.sunlightfoundation.com/bills?congress=113&history.enacted=true&chamber=senate&order=last_action_at&apikey=' + key;
    return Ember.RSVP.hash({
      recentBills: Ember.$.getJSON(url1).then(function(responseJSON) {
          return responseJSON.results;
        }),
      houseBills: Ember.$.getJSON(url2).then(function(responseJSON) {
          return responseJSON.results;
        }),
      senateBills: Ember.$.getJSON(url3).then(function(responseJSON) {
          return responseJSON.results;
        })
    });
  }
});
