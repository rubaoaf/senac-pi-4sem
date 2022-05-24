import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';

import Header from './features/header';

const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Error = lazy(() => import('./pages/erro'));

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <Error />}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
