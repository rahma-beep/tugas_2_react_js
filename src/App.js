import React, { Component } from "react";
import Header from "./page/Header";
import MenuUtama from "./page/MenuUtama";
import MenuMakanan from "./page/MenuMakanan";
import MenuTentangKami from "./page/MenuTentangKami";
import MenuKontak from "./page/MenuKontak";
import Footer from "./page/Footer";

class App extends Component {
  render() {
    return (
      <div >
      <Header/>
      <MenuUtama/>
      <MenuMakanan/>

      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
      </div>
    );
  }
}


export default App;
