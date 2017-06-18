import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';
import template from "../template/header.view.hbs";

export default Marionette.ItemView.extend({

  template: template,

  ui: {
  	searchButton: ".header_search_button",
  	searchInput: ".header_search_input"
  },

  events: {
  	"click @ui.searchButton": 'clickSearchButton'
  },

  initialize: function(){
  	
  },

  clickSearchButton: function() {
  	this.ui.searchInput.toggleClass("hidden");
  },

  onRender: function(){
  	//this.$el = this.$el.children();
  },

  serializeData() {
  	return {
  		menu: [
  			{ title: "HOME", items: ["title1", "title2"] },
			{ title: "FEATURES", items: ["title1", "title2"] },
			{ title: "CATEGORY", items: ["title1", "title2"] },
			{ title: "ABOUT ME", items: ["title1", "title2"] },
			{ title: "CONTACT", items: ["title1", "title2"] }
  		]
  	}
  }
});
