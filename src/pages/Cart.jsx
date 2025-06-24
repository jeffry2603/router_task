import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, cartTotal } = useCart();
  const discount = cartTotal * 0.1;
  const finalTotal = cartTotal - discount;

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-xl font-medium text-gray-700 mt-4 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-4">Looks like you haven't added anything to your cart yet</p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
      </div>
      
      <div className="divide-y divide-gray-200">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="p-6 bg-gray-50">
        <div className="max-w-md ml-auto space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span className="font-medium">${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount (10%):</span>
            <span className="font-medium">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800 pt-3 border-t border-gray-200 mt-3">
            <span>Total:</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
          <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg shadow-md transition-colors font-medium">
            Proceed to Checkout
          </button>
          <Link
            to="/"
            className="block text-center mt-3 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;