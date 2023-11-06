import { Navbar } from "@/components/Navbar/Navbar";

import { inter, irish } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Заявки",
  description: "Приложение для работы диспетчера с заявками клиентов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${irish.variable}`}>
        <div className="wrapper bg-[url('/taxi.jpg')] bg-cover bg-center bg-repeat">
          <div className="overlay bg-black/50">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
