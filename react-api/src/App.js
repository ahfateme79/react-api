import React from 'react';
import Header from './component/header/header'
import './App.css'
import Main from './component/main/main';
import Footer from './component/footer/footer';
export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main/>
        <Footer/>
      </>
    );
  }
}


