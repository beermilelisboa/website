import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Beer Mile Lisboa 🍺🏃",
  description: "The best event of the year! With beer of course! 🍻",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/impact" rel="stylesheet" />
      </head>
      <body
        className={cn(
          `min-h-screen font-sans antialiased ${montserrat.className}`,
        )}
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
