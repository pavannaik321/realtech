'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: 'CNC Router Machine',
    image: '/product_images/RouterMachine.png',
  },
  {
    id: 2,
    name: 'CNC Cutting Machine',
    image: '/product_images/cuttingMachine.png',
  },
  {
    id: 3,
    name: 'CNC Engraving Machine',
    image: '/product_images/EngravingMachine.png',
  },
];

const productsData = {
  1: [
    {
      id: 101,
      name: 'CNC Wood Carving Router Machine',
      image: '/product_images/image1.jpg',
      price: '₹4.25 Lac/Piece',
      specs: {
        'Business Type': 'Manufacturer,Supplier',
        'weight':'1100kg',
        'No Load Speed': '25000 mm/min',
        'Rebating Depth': '25 mm',
        'Spindle Speed': '18000 Rpm',
        'Moving Speed': '25 m/min',
        'Table Size': '1200 x 2440Mm',
        'Travelling Size X Axis': '1220 mm'
      }
    },
    { 
      id: 102, 
      name: 'CNC Woodworking Router Machine', 
      image: '/product_images/CncWoodWorking.png', 
      price: '₹3.80 Lac/Piece', 
      specs: {
        'Business Type': 'Manufacturer, Exporter, Supplier',
        'Maximum Working Speed': '10000 mm/min',
        'Power': '1900 W',
        'Table Size': '1400mm(X) x 3040mm(Y) ',
        'Z axis Motion': '170mm',
        'Automation Grade': 'Automatic',
        'Usage': 'Industrial'
      } },
    { 
      id: 103, 
      name: 'Double Head CNC Router Machine', 
      image: '/product_images/DoubleHead.png', 
      price: '₹ 6Lac/Piece', 
      specs: {
        'Business Type': 'Manufacturer,Supplier',
        'Power': '220V or 380V',
        'Spindle Power': '3 Kw Air Cool',
        'Operation Mode': 'Automatic',
        'Spindle Speed': '18000 rpm/min',
        'Diameter of Cutter': '1.5 to 12 Mm',
        'Accuracy': '0.01'
      } },
    { 
      id: 104, 
      name: 'Automatic CNC Wood Router Machine', 
      image: '/product_images/AutomaticWood.png', 
      price: '₹4.25 Lac/Piece', 
      specs: {
        'Business Type': 'Manufacturer, Exporter, Supplier',
        'Job Material': 'Wood',
        'Operation Mode': 'Automatic',
        'Max Job Size': '1300x2500',
        'Weight': '1100kg',
        'Spindle Power': '3.5kw',
        'Spindle Speed': '24000 or 18000'
      } },
    { 
      id: 105, 
      name: 'Industrial CNC Wood Router Machine', 
      image: '/product_images/IndustrialWood.png', 
      price: '₹4.75 Lac/Piece', 
      specs: {
        'Business Type': 'Manufacturer,Supplier',
        'Weight': '1100kg',
        'Power': '220V Or 380V',
        'Operation Mode': 'Automatic',
        'Moving Speed': '25 m/min',
        'Spindle Power': '3.5kw',
        'Spindle Speed': '18000'
      } },
    { 
      id: 106, 
      name: 'Semi Automatic CNC Wood Router Machine', 
      image: '/product_images/SemiAutomatic.png', 
      price: '₹4.50 Lac/Piece', 
      specs: {
        'Business Type': 'Manufacturer,Supplier',
        'Appliction': 'Industrial',
        'Weight': '1100kg',
        'Automatic Grade': 'Semi Automatic',
        'Driven Type': 'Electric',
        'Engraving Speed': '35m/min',
        'Resolution': '0.02mm'
      } },
  ],
  2: [
    { 
      id: 201, 
      name: 'CNC Laser Cutting Machine', 
      image: '/product_images/image1.png', 
      price: '₹4 Lac/Piece', 
      specs: {
         'Business Type': 'Manufacturer, Exporter, Supplier',
        'Work Area': '1400x900mm',
        'Machine Dimention': '2100x1700x1500',
        'Net Weight': '380kg',
        'Interface':'USB2.0',
        'Laser Power':'80W',
        'Laser Tube Type':'CO2 Glass Tube',
        'Location Precision':'0.01mm'
      } },
    { 
      id: 202, 
      name: 'CNC Plasma Cutting Machine', 
      image: '/product_images/PlasmaCuting.png', 
      price: '₹9 Lac/Piece', 
      specs: {
        'Business Type': 'Manufacturer, Exporter, Supplier',
        'Country of Origin': 'India',
        'Weight': '1000-2000kg',
        'Color': 'Custom',
        'Condition': '	New',
        'Automatic Grade': 'Automatic',
        'Warrenty': '1 Year'
      } },
    { 
      id: 203, 
      name: 'CNC Wood Engraving Machine', 
      image: '/product_images/woodEngraving.png', 
      price: '₹5 Lac/piece', 
      specs: {
        'Business Type': 'Manufacturer,Supplier',
        'No. of Spindles': 'Custom',
        'Spindle Motor': '3.5',
        'Spindle Speed': '18000',
        'Rated Power': '220V',
        'Phase': 'Single',
        'Voltage': '220V,380V'
      } },
  ],
  3: [
    { 
      id: 301, 
      name: 'CNC Stone Engraving Machine', 
      image: '/product_images/Stone.png', 
      price: '₹ 6.80 Lac/Piece', 
      specs: {
        'Business Type': 'Manufacturer, Exporter, Supplier',
        'Type': 'Carbon Steel, Brass',
        'Layout': 'Horizontal',
        'Shredding Capacity': '1-500 kg/hr',
        'Shredding Machine Type': 'Cross-Cut',
        'Engraving Speed': '25000 Per/min',
        'Specialityr': 'Workpiece Cooling System'
        
      } },
    { 
      id: 302, 
      name: 'Industrial CNC Engraving Machine', 
      image: '/product_images/IndustrialCNC.png', 
      price: '₹7Lac/Piece', 
      specs: {
        'Business Type': 'Manufacturer, Exporter, Supplier',
        'Usage': 'Industrial',
        'Shredding Capacity': '1-500 kg/hr',
        'Applicable Materials': 'Brass, Carbon Steel',
        'Shredding Machine Type': 'Cross Cut',
        'Feature': 'Workpiece Cooling System',
        'Engraving Speed': '25000 Per/min'
      } },
  ]
};

export default function ProductCard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
    setSelectedProduct(null);
  };

  const handleBackToProducts = () => setSelectedProduct(null);

  const renderRelatedCategories = () => {
    return (
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Explore More Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories
            .filter((cat) => cat.id !== selectedCategory)
            .map((cat) => (
              <div
                key={cat.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                onClick={() => handleCategoryClick(cat.id)}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-white text-lg font-bold text-center">{cat.name}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* 🔙 All Categories Button - Always on when any category is selected */}
      {selectedCategory && (
        <div className="mb-6">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSelectedProduct(null);
            }}
            className="bg-green-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition"
          >
            ← All Categories
          </button>
        </div>
      )}

      {/* Category Cards */}
      {!selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              onClick={() => handleCategoryClick(cat.id)}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={500}
                height={300}
                className="h-60 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold text-center">{cat.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Cards */}
      {!selectedProduct && selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productsData[selectedCategory].map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-xl transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="h-48 w-full object-cover rounded-lg"
              />
              <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Product Detail View */}
      {selectedProduct && (
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={500}
              height={500}
              className="w-full md:w-1/2 rounded-lg shadow"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              {selectedProduct.specs && Object.keys(selectedProduct.specs).length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-green-600 font-semibold text-lg mb-4">{selectedProduct.price}</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleBackToProducts}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  ← Back to Products
                </button>
                
              </div>
            </div>
          </div>

          {/* Related Categories */}
          {renderRelatedCategories()}
        </div>
      )}
    </div>
  );
}