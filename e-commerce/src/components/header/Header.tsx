import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiHeart, FiBarChart2, FiShoppingCart, FiSearch } from 'react-icons/fi'

const navTop = [
  { to: '/about', label: 'О компании' },
  { to: '/delivery', label: 'Доставка и оплата' },
  { to: '/returns', label: 'Возврат' },
  { to: '/warranty', label: 'Гарантии' },
  { to: '/contacts', label: 'Контакты' },
  { to: '/blog', label: 'Блог' },
]

const categoryLinks = [
  'Светильники',
  'Люстры',
  'Лампы',
  'Настольные лампы',
  'Ночники',
  'Подсветка',
  'Уличное освещение',
  'Мебельные установки',
]

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      {/* Top bar */}
      <div className="container hidden md:flex items-center gap-6 h-10 text-sm text-gray-500">
        {navTop.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'text-gray-900' : 'link-muted'}>
            {item.label}
          </NavLink>
        ))}
        <div className="ml-auto text-right">
          <span className="text-gray-900">8 (800) 890-46-56</span>
          <span className="mx-3">|</span>
          <Link to="/contacts" className="link-muted">Заказать звонок</Link>
        </div>
      </div>

      {/* Middle bar */}
      <div className="container flex items-center gap-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gray-900 text-white grid place-content-center">✱</div>
          <div className="text-2xl font-semibold tracking-wide">NORNLIGHT</div>
        </Link>

        <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 ml-2">
          <FiMenu />
          <span>Каталог</span>
        </button>

        <div className="relative flex-1 max-w-2xl">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            className="w-full rounded-full border border-gray-200 pl-10 pr-4 py-2 outline-none focus:border-gray-400"
            placeholder="Поиск по товарам"
          />
        </div>

        <Link to="/favorites" className="relative p-2 rounded-full hover:bg-gray-100">
          <FiHeart size={20} />
          <span className="badge">0</span>
          <div className="text-xs text-center mt-1 text-gray-500">Избранное</div>
        </Link>
        <Link to="/compare" className="relative p-2 rounded-full hover:bg-gray-100">
          <FiBarChart2 size={20} />
          <span className="badge">0</span>
          <div className="text-xs text-center mt-1 text-gray-500">Сравнение</div>
        </Link>
        <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100">
          <FiShoppingCart size={20} />
          <span className="badge">1</span>
          <div className="text-xs text-center mt-1 text-gray-500">Корзина</div>
        </Link>
      </div>

      {/* Categories bar */}
      <div className="container">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700 pb-3">
          {categoryLinks.map((label) => (
            <Link key={label} to={`/${encodeURIComponent(label)}`} className="hover:text-gray-900">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}