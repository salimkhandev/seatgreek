import "./globals.css";
export const metadata = {
  title: "SeatGeek",
  description: "Redesigning SeatGeek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
