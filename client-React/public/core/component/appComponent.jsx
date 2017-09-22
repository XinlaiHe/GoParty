"use strict";
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppComponent extends React.Component {


  constructor(){
    super();
  }

  componentDidMount() {
   
  }

  render() {

   return (
            <MuiThemeProvider>
              {this.props.children}
            </MuiThemeProvider>
          )
   }
}

export default AppComponent