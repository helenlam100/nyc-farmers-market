import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search: function(){
      var searchTerm = this.controllerFor('application').get('search');
      this.transitionTo('search', searchTerm);
    }
  }
});
