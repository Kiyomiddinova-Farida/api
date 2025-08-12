import { demoProducts } from '../../lib/products';
import { ProductView } from '../../components/product-view/ProductView';

const HomePage = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Tavsiya etamiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {demoProducts.map((p) => (
          <ProductView key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;