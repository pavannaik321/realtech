import Image from 'next/image';
import { useState } from 'react';

const ProductCard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'CNC wood Lathe Machine',
      shortDescription: 'High-precision CNC Wood lathe machine for industrial use.',
      image: '/product_images/image1.jpg',
      description: 'A specialized machine tool that uses computer-controlled systems to shape wood into precise, cylindrical forms, often for furniture legs, columns, or decorative pieces.',
      price: 'Rs.4,50,000'
    },
    {
      id: 2,
      name: 'Servo CNC router 1325 Single head',
      shortDescription: 'Compact CNC milling machine for small batch work.',
      image: '/product_images/image3.jpg',
      description: ' 1325 CNC router delivers sharp, clean designs,Performs carving, engraving, and cutting on wood.Powerful single-head router engraves wood with precision. ',
      price: 'Rs.5,800'
    },
    {
      id: 3,
      name: 'CNC Laser Cutting Machine',
      shortDescription: 'High-speed router for wood and plastic CNC jobs.',
      image: '/product_images/image1.png',
      description: 'A CNC laser cutting machine is a computer-controlled cutting tool that utilizes a laser beam to cut through materials like metal, wood, and plastic.',
      price: 'Rs.3,900'
    },
    
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // if (onSelect) onSelect(product);
  };

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 cursor-pointer transition"
            onClick={() => handleProductClick(product)}
          >
            <Image
              width={500}
              height={500}
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.shortDescription}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Image
              width={500}
              height={500}
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full md:w-1/2 rounded-lg shadow"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              <p className="text-green-600 font-semibold text-lg mb-4">{selectedProduct.price}</p>
              <button
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => setSelectedProduct(null)}
              >
                ← Back to Products
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16" /> {/* Add space before footer */}
    </div>
  );
};

export default ProductCard;
