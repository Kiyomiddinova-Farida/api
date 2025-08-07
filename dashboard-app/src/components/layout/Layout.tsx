import { memo, useState, useCallback } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import type { LayoutProps } from '../../types';

const Layout = memo<LayoutProps>(({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const handleItemClick = useCallback((itemId: string) => {
    console.log('Clicked item:', itemId);
    // Close sidebar on mobile when item is clicked
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={handleToggleSidebar}
        onItemClick={handleItemClick}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Header onMenuToggle={handleToggleSidebar} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;