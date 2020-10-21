import React, { lazy, Suspense } from 'react';

const LazyChooseTheme = lazy(() => import('./ChooseTheme'));

const ChooseTheme = props => (
  <Suspense fallback={null}>
    <LazyChooseTheme {...props} />
  </Suspense>
);

export default ChooseTheme;
