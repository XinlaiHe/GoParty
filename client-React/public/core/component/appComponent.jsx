"use strict";
import React from 'react';

class AppComponent extends React.Component {


  constructor(){
    super();
  }

  componentDidMount() {
   
  }

  render() {

   return (
            <div>
              {this.props.children}
            </div>
          )
   }
}

export default AppComponent