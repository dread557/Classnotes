import type { Metadata } from "next";
import "./globals.css";
import { andika } from "./fonts";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const metadata: Metadata = {
  title: "Classnotes",
  description: "A classnotes app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`${andika.className} no-scrollbar`}>
          <Header />
          <main className="flex justify-between">
            <SideNav />
            <section className="relative left-[15.77%] w-[84.72%] h-[calc(100vh-90px)] ">
              {children}
            </section>
          </main>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
