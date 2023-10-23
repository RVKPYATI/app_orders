import { Inter, Irish_Grover } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const irish = Irish_Grover({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-irish",
});

export const metadata = {
  title: "Заявки",
  description: "Приложение для работы диспетчера с заявками клиентов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${irish.variable}`}>{children}</body>
    </html>
  );
}
