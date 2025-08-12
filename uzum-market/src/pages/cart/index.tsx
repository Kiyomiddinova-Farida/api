import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../lib/store';
import { demoProducts } from '../../lib/products';
import { decrementQty, incrementQty, removeFromCart } from '../../lib/features/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((s: RootState) => s.cart.items);
  const productsInCart = Object.values(items).map((item) => ({
    item,
    product: demoProducts.find((p) => p.id === item.productId)!,
  }));
  const total = productsInCart.reduce((sum, { item, product }) => sum + product.price * item.quantity, 0);

  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Savat</h2>
      {productsInCart.length === 0 ? (
        <p className="text-gray-500">Savat bo'sh.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {productsInCart.map(({ item, product }) => (
              <div key={item.productId} className="flex items-center gap-4 border rounded p-4 bg-white">
                <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-medium line-clamp-2">{product.title}</h3>
                  <div className="text-sm text-gray-500">{product.price.toLocaleString()} сум</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="px-2 py-1 border rounded" onClick={() => dispatch(decrementQty({ productId: item.productId }))}>-</button>
                    <span className="min-w-6 text-center">{item.quantity}</span>
                    <button className="px-2 py-1 border rounded" onClick={() => dispatch(incrementQty({ productId: item.productId }))}>+</button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{(product.price * item.quantity).toLocaleString()} сум</div>
                  <button className="text-red-500 text-sm mt-2" onClick={() => dispatch(removeFromCart({ productId: item.productId }))}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
          <aside className="border rounded p-4 h-max bg-white">
            <div className="flex items-center justify-between">
              <span>Итого</span>
              <span className="font-semibold">{total.toLocaleString()} сум</span>
            </div>
            <button className="w-full mt-4 bg-purple-600 text-white rounded-md py-2">Перейти к оформлению</button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;