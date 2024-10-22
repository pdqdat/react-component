import React from "react";

import { createBrowserRouter } from "react-router-dom";

import Layout from "@/layout.tsx";
import Error from "@/error.tsx";

import Home from "@page/home";
import RecursiveFolderPage from "@page/recursive-folder-page";
import AnimatedTabPage from "@page/animated-tab-page";
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
        path: "/test",
        label: "Test",
        element: <TestPage />,
    },
];

const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            errorElement: <Error />,
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
