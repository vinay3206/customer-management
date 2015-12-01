import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('customer', function() {
    this.route('list');
    this.route('add');
    this.route('edit',{path:"/edit/:customer_id"});
  });
});

export default Router;
