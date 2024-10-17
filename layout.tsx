import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Head from 'next/head'; // import Head for metadata

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* JSON-LD structured data for Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": DATA.name,
              "url": DATA.url,
              "image":
              [ "https://res.cloudinary.com/dqwbkjfuh/image/upload/v1728581518/hacktober-fest-speech.png", 
                "https://res.cloudinary.com/dqwbkjfuh/image/upload/v1728581520/Screenshot_2024-10-10_225941_acowhy.png",
                "https://res.cloudinary.com/dqwbkjfuh/image/upload/v1728581519/project-wing.png",
                "https://res.cloudinary.com/dqwbkjfuh/image/upload/v1728581518/stark-expo.png",
                "https://res.cloudinary.com/dqwbkjfuh/image/upload/v1728581518/pict.png"

               ],
              "jobTitle": "Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Microsoft Learn Student Ambassador"
              },
              "sameAs": [
                "https://www.linkedin.com/in/amaan-bhati/",
                "https://github.com/amaan-bhati",
                "https://twitter.com/amaan_bhati",
                "https://amaanbhati.tech",
                "https://contact.amaanbhati.tech",
                "https://blog.amaanbhati.tech"
              ]
            })
          }}
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
