import "./new.css";

export const metadata = {
  title: "Your Name | Personal Website",
  description: "Personal website of Your Name.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
