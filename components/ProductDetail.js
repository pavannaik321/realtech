import React from 'react';

const ProductDetail = ({ product, onBack }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-16">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
        <img src={product.image} alt={product.name} className="w-80 object-contain bg-gray-100 p-4 rounded-lg" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.detail}</p>
          <p className="text-green-600 text-xl font-semibold">{product.price}</p>
          <button
            onClick={onBack}
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
