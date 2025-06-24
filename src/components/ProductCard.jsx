const ProductCard = ({ product, onCartAction, inCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col border border-gray-100">
      <div className="h-48 bg-gray-50 flex items-center justify-center p-4 relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain transition-transform hover:scale-105 duration-300"
        />
        {inCart && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            In Cart
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold text-indigo-600">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onCartAction(product)}
            className={`px-4 py-2 rounded-lg shadow-sm transition-all font-medium ${
              inCart
                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }`}
          >
            {inCart ? 'Remove' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;