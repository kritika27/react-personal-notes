import React from 'react'
import { Hero } from '../components/Home/Hero';
import { Featured } from '../components/Home/Featured';
import { Footer } from '../components/Home/Footer';

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Footer/>
    </div>
  )
}
