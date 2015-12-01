import DS from 'ember-data';

export default DS.Model.extend({
    flat:DS.attr('string'),
    street:DS.attr('string'),
    pinCode:DS.attr('number'),
    state:DS.attr('string'),
    addressString:function(){
        var arr=[this.get('flat'),this.get('street'),this.get('pinCode'),this.get('state')];
        return arr.join(',')
    }.property('flat','street','pinCode','state')
});
