import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Hiring Bias Detector",
  description: "Detect unconscious bias in GitHub code reviews. Analyze PR comments and review patterns to build fairer engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="baee8bb2-c3ff-4452-a640-2b64353e6c6e"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
