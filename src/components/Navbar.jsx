import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem
} from '@coreui/react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { cartCount } = useCart();

  return (
    <CNavbar expand="lg" className="bg-white shadow-sm sticky top-0 z-10">
      <CContainer fluid className="px-4">
        <CNavbarBrand className="me-0">
          <Link 
            to="/" 
            className="text-decoration-none text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            ShopEase
          </Link>
        </CNavbarBrand>
        
        <CNavbarToggler 
          onClick={() => setVisible(!visible)} 
          className="border-0 focus:shadow-none"
        >
          <span className="navbar-toggler-icon"></span>
        </CNavbarToggler>
        
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem className="mx-2">
              <Link 
                to="/" 
                className="text-decoration-none text-gray-600 hover:text-indigo-600 px-2 py-1 rounded transition-colors"
              >
                Products
              </Link>
            </CNavItem>
            
            <CDropdown variant="nav-item" popper={false} className="mx-2">
              <CDropdownToggle 
                color="secondary" 
                className="bg-transparent border-0 text-gray-600 hover:text-indigo-600 px-2 py-1"
              >
                Categories
              </CDropdownToggle>
              <CDropdownMenu className="mt-2 border-0 shadow-lg rounded-lg">
                <CDropdownItem href="#" className="hover:bg-gray-100 px-4 py-2">Electronics</CDropdownItem>
                <CDropdownItem href="#" className="hover:bg-gray-100 px-4 py-2">Jewelry</CDropdownItem>
                <CDropdownItem href="#" className="hover:bg-gray-100 px-4 py-2">Men's Clothing</CDropdownItem>
                <CDropdownItem href="#" className="hover:bg-gray-100 px-4 py-2">Women's Clothing</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
          
          <CNavbarNav className="ms-auto">
            <CNavItem>
              <Link
                to="/cart"
                className="text-decoration-none flex items-center text-gray-600 hover:text-indigo-600 p-2 relative"
                aria-label="Shopping Cart"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;