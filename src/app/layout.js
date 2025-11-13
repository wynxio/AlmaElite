import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

import "./globals.css";

let title = "Alma Elite KSA Construction Service";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: title,
  description: `Best Construction Service in KSA`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */}

        <Script src="assets/js/initial.js" strategy="afterInteractive" />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
        <meta name="author" content="Alma Elite" />
        <meta
          name="description"
          content="Alma Elite Best Construction Company in Dammam"
        />
        <meta
          name="keywords"
          content="Alma Elite ,Construction, civil, building, Engineering, Dammam"
        />
        <meta name="robots" content="INDEX,FOLLOW" />
        <link rel="icon" href="assets/img/logo/almafav.png" />

        <link rel="stylesheet" href="assets/css/intro.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />

        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />

        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />

        <link rel="stylesheet" href="assets/css/theme1.css" />

        {/* <meta name="description" content="Trending IT Training Solution" />
        <meta name="keywords" content="  IT Training, WYNXIO, WYNXIO IT Training, Best IT Training in the world, Fastest growing IT training, programming training, CSS, Python,React " /> */}

        {/* Open Graph */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wynxio.com" />
        <meta property="og:title" content={ModalIntroName} />
        <meta property="og:description" content={`Portfolio of ${ModalIntroName}`} />
        <meta property="og:image" content="/profile.jpg" /> */}

        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ModalIntroName} />
        <meta name="twitter:description" content={`Portfolio of ${ModalIntroName}`} />
        <meta name="twitter:image" content="/profile.jpg"  /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </Suspense>

        <Script src="assets/js/vendor/jquery-3.6.0.min.js"></Script>

        <Script src="assets/js/swiper-bundle.min.js"></Script>

        <Script src="assets/js/bootstrap.min.js"></Script>

        <Script src="assets/js/jquery.magnific-popup.min.js"></Script>

        <Script src="assets/js/jquery.counterup.min.js"></Script>

        <Script src="assets/js/jquery-ui.min.js"></Script>

        <Script src="assets/js/imagesloaded.pkgd.min.js"></Script>

        <Script src="assets/js/isotope.pkgd.min.js"></Script>

        <Script src="assets/js/gsap.min.js"></Script>

        <Script src="assets/js/ScrollTrigger.min.js"></Script>

        <Script src="assets/js/circle-progress.js"></Script>

        <Script src="assets/js/nice-select.min.js"></Script>

        <Script src="assets/js/smooth-scroll.js"></Script>

        <Script src="assets/js/main.js"></Script>
        <Script src="assets/js/common.js"></Script>
      </body>
    </html>
  );
}
