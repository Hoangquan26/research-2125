import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

export const metadata = {
  title: "Face Audit Research Docs",
  description: "Research documentation for capture metadata, Gym face recognition, and offline-first sync.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <RootProvider
          search={{
            enabled: false,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
