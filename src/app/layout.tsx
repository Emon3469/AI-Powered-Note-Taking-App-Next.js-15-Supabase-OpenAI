import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Headers from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import NoteProvider from "@/providers/NoteProvider";
import ErrorBoundary from "@/components/ErrorBoundary";  

export const metadata: Metadata = {
  title: "NoteFlow",
  description: "Note taking app built with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ErrorBoundary>
              <NoteProvider>
                <SidebarProvider>
                  <AppSidebar />
                  <div className="flex min-h-screen w-full flex-col">
                    <Headers />
                    <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                      <ErrorBoundary>
                        {children}
                      </ErrorBoundary>
                    </main>
                  </div>
               </SidebarProvider>

                <Toaster />

              </NoteProvider>
            </ErrorBoundary>
          </ThemeProvider>
        </body>
    </html>
  );
}
