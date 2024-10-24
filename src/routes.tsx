import React from "react";

import { createHashRouter, } from "react-router-dom";

import Layout from "@/layout";

import slugify from "@/utils/slugify";

import Home from "@page/home";
import ErrorPage from "@page/error-page";

import RecursiveFolderPage from "@page/recursive-folder-page";
import AnimatedTabPage from "@page/animated-tab-page";
import MagnifiedDockPage from "@page/magnified-dock-page";
import StreamingTextPage from "@page/streaming-text-page";
import HighlightPanelPage from "@page/highlight-panel-page";
import AnimatedNumberPage from "@page/animated-number-page";

import TestPage from "@page/test-page";

const navigationLinks: {
    label: string;
    element: React.JSX.Element;
}[] = [
    {
        label: "Home",
        element: <Home />,
    },
    {
        label: "Animated tab",
        element: <AnimatedTabPage />,
    },
    {
        label: "Recursive folder",
        element: <RecursiveFolderPage />,
    },
    {
        label: "Magnified dock",
        element: <MagnifiedDockPage />,
    },
    {
        label: "Streaming text",
        element: <StreamingTextPage />,
    },
    {
        label: "Highlight panel",
        element: <HighlightPanelPage />,
    },
    {
        label: "Animated number",
        element: <AnimatedNumberPage />,
    },

    {
        label: "Test",
        element: <TestPage />,
    },
];

const router = createHashRouter(
    [
        {
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                ...navigationLinks.map(({ label, element }) => ({
                    path: label === "Home" ? "/" : `/${slugify(label)}`,
                    element,
                })),
            ],
        },
    ],
    { basename: "/react-component" },
);

export { router, navigationLinks };
