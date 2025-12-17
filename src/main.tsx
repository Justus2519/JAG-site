import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, Link} from "react-router-dom";
import "./index.css";
import App from "./pages/minesweeper/App.tsx";
import Resume from "./pages/Resume.tsx";
import Home from "./pages/Home.tsx";
import LookNSay from "./pages/look-and-say-sequence/LookNSay.tsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: (
            <>
                <header>
                    <nav>
                        <h1 className="logo"> Jaggert.org</h1>
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/minesweeper">Minesweeper</Link></li>
                            <li><Link to="/look-n-say">Look & Say Sequence</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                        </ul>
                    </nav>
                </header>
                <main className="hero-section">
                    <Outlet />
                </main>
                <footer>
                    <p>2025</p>
                </footer>
            </>
        ),
        children: [
            {path: '', element: <Home />},
            {path: 'minesweeper', element: <App />},
            {path: 'look-n-say', element: <LookNSay />},
            {path: 'resume', element: <Resume />},
        ],
        errorElement: <div>404 not found</div>,
    },
])

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
