import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeeLookup(value) {
      var params = {
        committeeChoice: this.set('committeeChoice', value)
      };
      console.log(params);
      this.sendAction('committeeLookup', params);
    }
  }
});
