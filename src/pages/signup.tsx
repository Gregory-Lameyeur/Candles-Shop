import React from 'react';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Signup } from '@/components/Signup';


export default function SignupPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Signup />
      <Footer />
    </div>
  );
}

