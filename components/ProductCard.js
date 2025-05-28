import { useState } from 'react';

const ProductCard = ({ onSelect }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'CNC Lathe RT-3000',
      shortDescription: 'High-precision CNC lathe machine for industrial use.',
      image: '/public/images/image1.png',
      description: 'The RT-3000 is a high-efficiency CNC lathe used for metal fabrication and precision machining. Equipped with automated tool changers and digital readouts.',
      price: '$4,500'
    },
    {
      id: 2,
      name: 'CNC Milling RT-MX2',
      shortDescription: 'Compact CNC milling machine for small batch work.',
      image: '\product_images\image1.png',
      description: 'Ideal for precision milling, the RT-MX2 offers a compact design and efficient spindle speed control for consistent results.',
      price: '$5,800'
    },
    {
      id: 3,
      name: 'CNC Router RT-RX1',
      shortDescription: 'High-speed router for wood and plastic CNC jobs.',
      image: 'C:\Users\Divyabaskaran\Desktop\product\realtech\public\product_images\image2.png',
      description: 'Perfect for woodworkers and plastic fabricators, the RT-RX1 combines speed and accuracy in one powerful CNC router.',
      price: '$3,900'
    },
    {
      id: 4,
      name: 'CNC Lathe RT-2000',
      shortDescription: 'Durable lathe for medium-scale CNC operations.',
      image: '/public/images/image4.png',
      description: 'Built for robust CNC turning, the RT-2000 features a strong frame and precise control, suitable for versatile machining tasks.',
      price: '$4,000'
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    if (onSelect) onSelect(product);
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
            <img
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
            <img
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
