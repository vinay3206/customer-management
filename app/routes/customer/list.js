import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.findAll('customer');
  },
  afterModel:function(model){
    var promises=[];
    model.forEach(m=>promises.push(m.get('addresses')));
    return Em.RSVP.all(promises);
  }
});
