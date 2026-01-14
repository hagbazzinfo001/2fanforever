import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Haneefah & Zhikrullah | Wedding - February 14, 2026',
  description: 'Join us for our wedding celebration. View the menu, get directions, and capture memories with our exclusive Snapchat lens.',
  keywords: ['wedding', 'celebration', 'Haneefah', 'Zhikrullah', 'February 2026'],
  openGraph: {
    title: 'Haneefah & Zhikrullah | Wedding',
    description: 'Join us for our wedding celebration on February 18, 2026',
    images: [
      {
        url: 'https://res.cloudinary.com/dr0qnjp1s/image/upload/v1768422637/IMG_57041_vtpvy7.jpg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haneefah & Zhikrullah | Wedding',
    description: 'Join us for our wedding celebration',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
