import React, { ReactNode } from 'react';
import Header from './header/page';
import Footer from './footer/page';


// Define the Layout component with the children prop type
interface LayoutProps {
  children: ReactNode;  // ReactNode allows any valid React child element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="min-h-screen bg-gray-100">
        {children} {/* Render the dynamic content passed to the layout */}
      </main>

     
    </div>
  );
};

export default Layout;
