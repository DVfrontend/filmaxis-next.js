import "@/styles/globals.scss";
import Layout from "@/components/layout/layout";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Filmaxis</title>
      </head>
      <body>
        <Layout>
          <div className="container mx-auto mt-10">{children}</div>
        </Layout>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
