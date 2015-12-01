import Ember from 'ember';

export default Ember.Controller.extend({
  stateList: [

              "Andaman and Nicobar Island",
              "Andhra Pradesh",
              "Arunachal Pradesh",

              "Bihar",
              "Chandigarh",
              "Chhattisgarh",
              "Dadra and Nagar Haveli",
              "Daman and Diu",
              "Delhi",
              "Goa",
              "Gujarat",
              "Haryana",
              "Himachal Pradesh",
              "Jammu and Kashmir",
              "Jharkhand",
              "Karnataka",
              "Kerala",
              "Lakshadweep",
              "Madhya Pradesh",
              "Maharashtra",
              "Manipur",
              "Meghalaya",
              "Mizoram",
              "Nagaland",

              "Puducherry",
              "Punjab",
              "Rajasthan",
              "Sikkim",
              "Tamil Nadu",
              "Tripura",
              "Uttarakhand",
              "Uttar Pradesh",
              "West Bengal"
       ],
  actions: {
    save:function(){
      var promsises=[];
      this.get('model.addresses').forEach(add=>{
        promsises.push(add.save());
      });
      Em.RSVP.all(promsises).then(function(){
        this.get('model').save().then(function(){
          this.transitionToRoute('customer.list');
        }.bind(this));
      }.bind(this));
    },
    addAddress:function(){
      this.get('model.addresses').pushObject(this.store.createRecord('address'));
    }
  }
});
