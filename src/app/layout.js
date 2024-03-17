import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import NavComponent from "@/components/navigation";

export const metadata = {
  title: "Katsushika Hokusai",
  description: "This is a tribute page of Katsushika Hokusai",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
      <NavComponent/>
      <div className='container'>
        {children}
      </div>
    </body>
    </html>
  );
}
