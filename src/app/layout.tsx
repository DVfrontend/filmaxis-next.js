import "./globals.scss";
import Layout from "@/components/layout/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cinema Web</title>
      </head>
      <body>
        <Layout>
          <div className="container mx-auto mt-10">{children}</div>
        </Layout>
      </body>
    </html>
  );
}
// использовать соннер
