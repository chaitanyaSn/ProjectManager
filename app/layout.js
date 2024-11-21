import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { shadesOfPurple } from "@clerk/themes";

export const metadata = {
  title: "Jira",
  description: "Project management app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
       baseTheme: shadesOfPurple,
       variables:{
        colorPrimary:"#3b82f6",
        colorBackground:"#1a202c",
        colorInputBackground:"#2D3748",
        colorInputText:"#F3F4F6",
       },
        }}>
      <html lang="en">
        <body className={` antialiased dotted-back`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-slate-500 py-4">
              <div className="container mx-auto text-center">
                <p>this is the footer</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
