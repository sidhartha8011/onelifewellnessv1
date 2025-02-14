import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const OneLifeLayout = () => {
  return (
    <div>
      <ScrollToTop/>
        <Header/>
        <main className='olw-outlet-container'>
            <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default OneLifeLayout