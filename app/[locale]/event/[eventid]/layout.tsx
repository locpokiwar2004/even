import Navbar from "@/components/layout/navbar";
import './page-module.css'
export default function Details({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main>
        <Navbar/>
        {children}

     </main>
    );
  }
  