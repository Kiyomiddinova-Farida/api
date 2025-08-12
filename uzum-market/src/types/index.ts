export type Product = {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating?: number; // 0..5
  image: string;
  badge?: 'Суперцена' | 'Распродажа' | 'Гарантия низкой цены' | null;
};

export type CartItem = {
  productId: string;
  quantity: number;
};