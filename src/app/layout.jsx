import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container } from "@/components/Boostrap";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel in Cuba ",
  description: "This is an app to order a transfer or buy an excursion in Cuba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
