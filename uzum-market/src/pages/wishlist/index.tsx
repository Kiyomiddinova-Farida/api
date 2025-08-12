import { useSelector } from 'react-redux';
import type { RootState } from '../../lib/store';
import { demoProducts } from '../../lib/products';
import { ProductView } from '../../components/product-view/ProductView';

const WishlistPage = () => {
  const ids = useSelector((s: RootState) => s.wishlist.ids);
  const products = demoProducts.filter((p) => ids.includes(p.id));

  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Sevimlilar</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">Hozircha hech narsa yo'q.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductView key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;