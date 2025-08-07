import { memo, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import type { NavItem } from '../types';
import TabNavigation from './ui/TabNavigation';

interface PageWithTabsProps {
  pageConfig: NavItem;
}

const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

const PageWithTabs = memo<PageWithTabsProps>(({ pageConfig }) => {
  if (!pageConfig.subPages) {
    return <div className="p-6">No sub-pages configured</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <TabNavigation tabs={pageConfig.subPages} />
      
      <div className="flex-1 overflow-auto">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {pageConfig.subPages.map((subPage) => (
              <Route
                key={subPage.id}
                path={subPage.path.replace(pageConfig.path, '')}
                element={<subPage.component />}
              />
            ))}
            <Route
              path="*"
              element={<Navigate to={pageConfig.subPages[0].path} replace />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
});

PageWithTabs.displayName = 'PageWithTabs';

export default PageWithTabs;