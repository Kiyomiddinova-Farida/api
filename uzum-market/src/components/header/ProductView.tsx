import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/store';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-purple-600 text-white' : 'text-gray-800 hover:bg-gray-100'}`;

export const Header = () => {
  const cartCount = useSelector((s: RootState) => Object.values(s.cart.items).reduce((a, b) => a + b.quantity, 0));
  const wishlistCount = useSelector((s: RootState) => s.wishlist.ids.length);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-[1200px] w-full mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-purple-600" />
          <span className="font-semibold">Uzum Market</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Bosh sahifa
          </NavLink>
          <NavLink to="/wishlist" className={navLinkClass}>
            Wishlist <span className="ml-1 text-xs text-gray-500">({wishlistCount})</span>
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
            Cart <span className="ml-1 text-xs text-gray-500">({cartCount})</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;