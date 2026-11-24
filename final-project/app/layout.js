import "./new.css";

export const metadata = {
  title: "Derence Kane Calagsing | Personal Website",
  description: "Personal website of Derence Kane Calagsing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
