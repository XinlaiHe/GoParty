import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';
import template from '../template/header.view.hbs';
import "../styles/header.scss";

export default Marionette.ItemView.extend({

  template: template,

  initialize :function(){

  },

  onRender: function(){
  	this.$el = this.$el.children();
  }

});
