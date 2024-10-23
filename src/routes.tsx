import React from "react";

import { createBrowserRouter } from "react-router-dom";

import Layout from "@/layout";

import Home from "@page/home";
import ErrorPage from "@page/error-page";

import RecursiveFolderPage from "@page/recursive-folder-page";
import AnimatedTabPage from "@page/animated-tab-page";
import MagnifiedDockPage from "@page/magnified-dock-page";
import TestPage from "@page/test-page";

const navigationLinks: {
    path: string;
    label: string;
    element: React.JSX.Element;
}[] = [
    {
        path: "/",
        label: "Home",
        element: <Home />,
    },
    {
        path: "/animated-tab",
        label: "Animated tab",
        element: <AnimatedTabPage />,
    },
    {
        path: "/recursive-folder",
        label: "Recursive folder",
        element: <RecursiveFolderPage />,
    },
    {
        path: "/magnified-dock",
        label: "Magnified dock",
        element: <MagnifiedDockPage />,
    },
    {
        path: "/test",
        label: "Test",
        element: <TestPage />,
    },
];

const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                ...navigationLinks.map(({ path, element }) => ({
                    path,
                    element,
                })),
            ],
        },
    ],
    { basename: "/react-component" },
);

export { router, navigationLinks };
