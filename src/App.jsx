import React from 'react';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Outlet/> {/* dynamic   */}
    <Footer/>
    </>
  );
}

export default App;
