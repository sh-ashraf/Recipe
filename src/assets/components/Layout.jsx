import { Outlet } from "react-router-dom";
import Footer from './Footer.jsx';
import Sidebar from "./Sidebar.jsx";

export default function Layout() {
    return (
        <>
            <main className="min-h-screen">
                <Sidebar/>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
