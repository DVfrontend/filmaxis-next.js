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
        <title>Cinema Web </title>
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