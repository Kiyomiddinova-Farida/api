import { memo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PageWithTabs from './components/PageWithTabs';
import { navigationItems } from './utils/navigation';

const App = memo(() => {
  return (
    <Router>
      <Layout>
        <Routes>
          {navigationItems.map((item) => (
            <Route
              key={item.id}
              path={`${item.path}/*`}
              element={<PageWithTabs pageConfig={item} />}
            />
          ))}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
});

App.displayName = 'App';

export default App;
