"use client";

import Footer from "./footer/page";
import Header from "./header/page";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header/>
      {children} 
     <Footer/>
    </div>
  );
};

export default Layout;
