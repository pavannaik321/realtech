import React, { useState } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

export default function ProductPage() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-28 space-y-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-12">Our CNC Machines</h1>
          <ProductCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
