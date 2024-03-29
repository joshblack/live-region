export const metadata = {
  title: 'Live Region Element',
  description: 'Documentation for the live region custom element',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
