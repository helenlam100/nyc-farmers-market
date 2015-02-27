import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var city = params.query;
    return Ember.$.getJSON("https://data.cityofnewyork.us/resource/j8gx-kc43.json?facilitycity=" + city).then(function(res){
      return res;
    });
  }  
});
