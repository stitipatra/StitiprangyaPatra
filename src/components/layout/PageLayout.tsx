import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="page-content">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default PageLayout;