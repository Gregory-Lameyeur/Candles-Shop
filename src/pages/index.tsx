import React from 'react';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Body } from '@/components/Body';


export default function HomePage() {
  
  return (
    <div>
      <Navbar  />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
