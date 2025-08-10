import { Link } from 'react-router-dom'

const buyers = [
  { to: '/about', label: 'О компании' },
  { to: '/delivery', label: 'Доставка и оплата' },
  { to: '/returns', label: 'Возврат' },
  { to: '/warranty', label: 'Гарантии' },
  { to: '/contacts', label: 'Контакты' },
  { to: '/blog', label: 'Блог' },
]

const products = [
  'Люстры',
  'Светильники',
  'Бра',
  'Торшеры',
  'Комплектующие',
  'Настольные лампы',
  'Споты',
  'Трековые светильники',
  'Уличные светильники',
  'Технические светильники',
  'Светодиодные ленты',
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-8">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and contact */}
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gray-900 text-white grid place-content-center">✱</div>
            <div className="text-2xl font-semibold tracking-wide">NORNLIGHT</div>
          </div>
          <div className="mt-6 text-lg">8 (800) 890-46-56</div>
          <div className="mt-6 flex items-center gap-3 opacity-80">
            <div className="h-6 w-10 bg-gray-200 rounded" />
            <div className="h-6 w-10 bg-gray-200 rounded" />
            <div className="h-6 w-10 bg-gray-200 rounded" />
          </div>
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <Link to="/privacy" className="hover:text-gray-900">Политика конфиденциальности</Link>
            <div>
              <Link to="/terms" className="hover:text-gray-900">Пользовательское соглашение</Link>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* Buyers */}
        <div>
          <div className="text-lg font-semibold mb-4">Покупателям</div>
          <ul className="space-y-3 text-gray-600">
            {buyers.map((b) => (
              <li key={b.to}>
                <Link to={b.to} className="hover:text-gray-900">{b.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products columns */}
        <div className="md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <div className="text-lg font-semibold mb-4">Товары</div>
            <ul className="space-y-3 text-gray-600">
              {products.slice(0, 6).map((item) => (
                <li key={item}><Link to={`/${encodeURIComponent(item)}`} className="hover:text-gray-900">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className="pt-9 md:pt-0">
            <ul className="space-y-3 text-gray-600">
              {products.slice(6).map((item) => (
                <li key={item}><Link to={`/${encodeURIComponent(item)}`} className="hover:text-gray-900">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}