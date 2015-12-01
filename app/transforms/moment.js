import DS from 'ember-data';

var Transform;
Transform = DS.Transform.extend({
    deserialize: function (serialized) {
        return moment.parseZone(serialized || 0);
    },
    serialize: function (deserialized) {
         if (deserialized) {
            return moment(deserialized).valueOf();
        }
    }
});
export default Transform;
