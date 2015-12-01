import Ember from 'ember';

export default Ember.Controller.extend({
  customerToDelete:null,
  actions: {
    // body
    setDelete:function(customerId){
      this.set('customerToDelete',customerId);
    },
    delete:function(){
      var obj=this.get('model').findBy('id',this.get('customerToDelete'));
      obj.destroyRecord();
    }
  }
});
