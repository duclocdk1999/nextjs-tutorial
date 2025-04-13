import '@/app/ui/global.css'
import { courier } from './ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${courier.className} antialiased`}>{children}</body>
    </html>
  );
}
