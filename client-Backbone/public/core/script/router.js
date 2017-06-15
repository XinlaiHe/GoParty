import $ from 'jquery';
import Backbone from 'backbone';
import HeaderView from './header.view';


export default Backbone.Router.extend({

  routes: {
    '': 'index',
  },

  components:{
    header: undefined,
    footer: undefined,
    main: undefined
  },

  initialize() {
    this.components.header = new HeaderView().render();
    $('#header').empty().append(this.components.header.$el);
  },

  index() {
    //console.log("Index"); 
  }
});
