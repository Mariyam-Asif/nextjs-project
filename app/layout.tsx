import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="flex-grow my-8">
      {children}
      </div>
      <Footer/>
    </div>
      </body>
    </html>
  );
}
