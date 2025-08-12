import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../lib/features/cartSlice';
import { toggleWishlist } from '../../lib/features/wishlistSlice';
import type { Product } from '../../types';
import type { RootState } from '../../lib/store';

export const ProductView = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const isWished = useSelector((s: RootState) => s.wishlist.ids.includes(product.id));
  const qty = useSelector((s: RootState) => s.cart.items[product.id]?.quantity ?? 0);

  return (
    <div className="border rounded-lg p-3 bg-white hover:shadow-md transition">
      <div className="relative">
        <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded" />
        <button
          className={`absolute top-2 right-2 rounded-full w-8 h-8 flex items-center justify-center ${isWished ? 'bg-uzum.primary text-white' : 'bg-white text-gray-700'}`}
          onClick={() => dispatch(toggleWishlist({ productId: product.id }))}
        >
          ♥
        </button>
      </div>
      <div className="mt-3 space-y-1">
        {product.badge && (
          <span className="text-[10px] px-2 py-0.5 bg-purple-100 text-uzum.primary rounded">
            {product.badge}
          </span>
        )}
        <h3 className="text-sm font-medium line-clamp-2 min-h-9">{product.title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{product.price.toLocaleString()} сум</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">{product.oldPrice.toLocaleString()} сум</span>
          )}
        </div>
        <button
          className="w-full mt-2 bg-uzum.primary text-white rounded-md py-2 text-sm"
          onClick={() => dispatch(addToCart({ productId: product.id }))}
        >
          {qty > 0 ? `Savatda: ${qty}` : 'В корзину'}
        </button>
      </div>
    </div>
  );
};

export default ProductView;