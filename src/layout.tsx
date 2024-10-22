import { Link, NavLink, Outlet } from "react-router-dom";
import { navigationLinks } from "@/routes.tsx";

import { PiLineVerticalBold } from "react-icons/pi";
import { TbTestPipe } from "react-icons/tb";

const Layout = () => {
    return (
        <>
            <div>
                {/* Header */}
                <header className="bg-white/10 py-4">
                    <div className="container flex items-center space-x-4">
                        <Link
                            to="/"
                            className="h4 font-semibold duration-300 ease-in-out hover:skew-y-12 hover:text-primary"
                        >
                            URC
                        </Link>

                        <PiLineVerticalBold className="size-8" />

                        <nav>
                            <ul className="flex space-x-8 font-semibold">
                                {navigationLinks
                                    .filter(({ path }) => path !== "/")
                                    .filter(({ path }) => path !== "/test")
                                    .map(({ path, label }) => (
                                        <li key={path}>
                                            <NavLink
                                                to={path}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "text-primary"
                                                        : ""
                                                }
                                            >
                                                {label}
                                            </NavLink>
                                        </li>
                                    ))}
                            </ul>
                        </nav>
                    </div>
                </header>

                {/* Main content */}
                <main className="min-h-96">
                    <Outlet />
                </main>
            </div>

            {/* A small button to navigate to the test page */}
            <Link
                to="/test"
                className="fixed bottom-1/2 left-2 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 2xl:flex"
            >
                <TbTestPipe />
            </Link>

            {/* Footer */}
            <footer className="bg-white/10 p-4 md:p-8">
                <p className="text-center font-medium">
                    &copy; {new Date().getFullYear()} Useful React Component
                </p>
            </footer>
        </>
    );
};

export default Layout;
