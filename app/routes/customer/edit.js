import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params){
    return this.store.findRecord('customer', params.customer_id);
  },
  afterModel:function(model){
    return model.get('addresses');
  },
  actions:{
    willTransition:function(){
      if(this.get('controller.model.isDirty')){
        this.get('controller.model').rollbackAttributes();
      }
    }
  }
});
