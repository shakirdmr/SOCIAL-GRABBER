// File: client/src/components/Layout.jsx
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
<<<<<<< HEAD:YT-VIDEO-DOWNLOADER/client/src/components/Layout.jsx
}

=======
}
>>>>>>> main:client/src/components/Layout.jsx
