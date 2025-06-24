import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 border-b border-gray-200 py-4 px-2 hover:bg-gray-50 transition-colors">
      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center p-2">
        <img 
          src={item.image} 
          alt={item.title} 
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-800 line-clamp-1">{item.title}</h3>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-200 transition-colors"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="w-8 text-center text-gray-700">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-200 transition-colors"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <div className="w-24 text-right font-medium text-gray-800">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700 p-2 transition-colors"
        aria-label="Remove item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;