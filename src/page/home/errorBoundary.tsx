import React from 'react';

const ErrorBoundary = ({FallbackComponent,children} : any) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ErrorBoundary;
