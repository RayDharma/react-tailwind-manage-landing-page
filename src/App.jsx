import React from 'react';
import { Navbar, Hero, Features, Testimonials, CTA, Footer } from './components';

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
    </div>
  )
}

export default App