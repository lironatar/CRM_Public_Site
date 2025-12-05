import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "נרשמים בשבילך - ניהול חשבונות הבית בקלות",
  description: "הדרך הקלה והמהירה לניהול חשבונות החשמל, המים, הארנונה והגז. אנחנו דואגים לבירוקרטיה, אתם נהנים מהשקט.",
  keywords: ["ניהול חשבונות", "העברת חשבונות", "חשמל", "מים", "ארנונה", "גז", "בירוקרטיה"],
  openGraph: {
    title: "נרשמים בשבילך - ניהול חשבונות הבית בקלות",
    description: "הדרך הקלה והמהירה לניהול חשבונות החשמל, המים, הארנונה והגז.",
    url: "https://yoursite.com",
    siteName: "נרשמים בשבילך",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.variable} suppressHydrationWarning={true}>
        {children}
        <WhatsAppButton 
          phoneNumber="972501234567" 
          message="שלום, אני מעוניין בשירות שלכם"
        />
      </body>
    </html>
  );
}
