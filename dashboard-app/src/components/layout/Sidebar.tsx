import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { navigationItems } from '../../utils/navigation';
import type { SidebarProps } from '../../types';

const Sidebar = memo<SidebarProps>(({ isOpen, onToggle, onItemClick }) => {
  const location = useLocation();

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <Icons.Circle className="w-5 h-5" />;
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={onToggle}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 lg:hidden"
          >
            <Icons.X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            
            return (
              <Link
                key={item.id}
                to={item.subPages ? item.subPages[0].path : item.path}
                onClick={() => onItemClick(item.id)}
                className={`
                  flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <span className={`mr-3 ${isActive ? 'text-blue-700' : 'text-gray-500'}`}>
                  {getIcon(item.icon)}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;