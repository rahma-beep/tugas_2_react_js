import React, { Component } from "react";
import ListMenuUtama from "./../ListData/ListMenuUtama";

class menuUtama extends Component {
  render(){
    return(
      <div>
      <ListMenuUtama alamat="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
      </div>
    );
  }
}

export default menuUtama;
