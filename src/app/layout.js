import "@/styles/globals.css";

export const metadata = {
  title: "Asrar Farooq - Portfolio",
  description: "Personal portfolio of Asrar Farooq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
