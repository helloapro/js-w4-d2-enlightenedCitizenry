import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleSidebar() {
      Ember.$('.ui.labeled.icon.sidebar').sidebar('toggle');
    }
  }
});
