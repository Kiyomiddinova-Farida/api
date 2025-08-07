import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { SubPage } from '../../types';

interface TabNavigationProps {
  tabs: SubPage[];
}

const TabNavigation = memo<TabNavigationProps>(({ tabs }) => {
  const location = useLocation();

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 px-6" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-150
                ${isActive
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
});

TabNavigation.displayName = 'TabNavigation';

export default TabNavigation;