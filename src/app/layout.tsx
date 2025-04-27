import "./globals.scss";
import Layout from "@/components/layout/Layout";
import PageLoader from "@/components/layout/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cinema Web </title>
      </head>
      <body>
          <PageLoader>
            <Layout>
              <div className="container mx-auto mt-10">{children}</div>
            </Layout>
          </PageLoader>
      </body>
    </html>
  );
}
// использовать соннер