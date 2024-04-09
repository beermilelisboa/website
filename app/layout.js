import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Beer Mile Lisboa 🍺🏃",
  description: "The best event of the year! With beer of course! 🍻",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/impact" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(`font-montserrat min-h-screen font-medium antialiased`)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster visibleToasts={1} richColors position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
