import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
