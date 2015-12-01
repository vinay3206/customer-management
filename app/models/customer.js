import DS from 'ember-data';

export default DS.Model.extend({
    name:DS.attr('string'),
    mobile:DS.attr('string'),
    phone:DS.attr('string'),
    email:DS.attr('string'),
    addresses:DS.hasMany('address',{async:true}),
    dob:DS.attr('moment'),
    addressesString:function(){
      return this.get('addresses').reduce(function(str,el){
        str+=' '+el.get('addressString');
        return str;
      },'');
    }.property('addresses.[]')
});
