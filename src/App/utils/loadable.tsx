import React, { lazy, Suspense } from 'react';
export default importCallback => {
  const TargetComponent = lazy(importCallback);
  return props => (
    <Suspense fallback={null}>
      <TargetComponent {...props} />
    </Suspense>
  );
};
