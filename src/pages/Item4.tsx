import React from 'react';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Item } from '@/components/Item4';


export default function ItemPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Item />
      <Footer />
    </div>
  );
}

