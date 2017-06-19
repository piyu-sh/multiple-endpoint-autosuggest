import React from "react";
import Header from '../App/Header';
import BodyComponent from '../Body/BodyComponent';
import Footer from '../App/Footer';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Header></Header>
        <BodyComponent></BodyComponent>
        <Footer></Footer>
      </div>
    );
  }
}
