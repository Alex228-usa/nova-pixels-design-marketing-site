import NoiseAnimation from "@/components/common/noise-animation";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import "@/theme/global.css";
import "@/assets/fonts/stylesheet.css";
import ToastBase from "@/components/common/toast-base";
import DrawerLayout from "@/components/layout/drawer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-lt-superior">
        <DrawerLayout>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <NoiseAnimation />
          <ToastBase />
        </DrawerLayout>
      </body>
    </html>
  );
}
