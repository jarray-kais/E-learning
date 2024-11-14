// app/layout.js
import { SpeedInsights } from '@vercel/speed-insights/next';

import "../styles/globals.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "@/components/Footer";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <div className="content">{children}</div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
