import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.createRecord('customer');
  },
  actions:{
    willTransition:function(){
      if(this.get('controller.model.isNew')){
        this.get('controller.model').deleteRecord();
    }
  }
  }
});
