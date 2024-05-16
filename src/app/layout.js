

import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Sidebar from "@/component/Sidebar";

export const metadata = {
  title: "Wishwamart",
  description: "Wishwamart Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="LIGHT-THEME">
      <body suppressHydrationWarning={true}>
      <>
        
        <Header />
        <Sidebar/>
        
        <main>
          {children}
        </main>
        
        <Footer />
      </>
      </body>
    </html>
  );
}
