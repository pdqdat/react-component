import React from "react";

import useMediaQuery from "@hook/use-media-query";

import PageTitle from "@comp/page-title";

interface PageTemplateProps {
    children?: React.ReactNode;
    title: string;
    description?: string;
    location?: string;
    bigScreen?: boolean;
    reference?: {
        name: string;
        url: string;
    }[];
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    children,
    title,
    description,
    location,
    bigScreen = false,
    reference,
}) => {
    const isBigEnough = useMediaQuery("(min-width: 640px)");

    return (
        <div className="container space-y-8 py-8">
            {/* Set the page title */}
            <PageTitle title={`${title} | URC`} />

            {/* Title section */}
            <section>
                <h2 className="h2 mb-2 font-bold">{title}</h2>

                {description && <p className="h6">{description}</p>}
            </section>

            {/* Demo section */}
            {children && (
                <section
                    id="demo"
                    className="flex min-h-52 scroll-mt-8 items-center justify-center rounded-lg border-2 border-border-dark bg-white/10 p-2 transition hover:border-border md:p-4"
                >
                    {bigScreen && !isBigEnough ? (
                        // If the `bigScreen` prop is true and the screen width is not big enough (smaller than 640px),
                        // display a message prompting the user to open the demo on a bigger screen.
                        <p>Open this demo on a bigger screen</p>
                    ) : (
                        // Otherwise, render the children
                        children
                    )}
                </section>
            )}

            {location && (
                <section id="location" className="scroll-mt-8">
                    <h4 className="h4">Location</h4>

                    <p className="h6">{location}</p>
                </section>
            )}

            {/* Reference section */}
            {reference && reference.length > 0 && (
                <section id="reference" className="scroll-mt-8">
                    <h4 className="h4">Reference</h4>

                    <ul className="h6 list-inside list-disc">
                        {reference.map(({ name, url }, idx) => (
                            <li key={idx}>
                                <a
                                    href={url}
                                    target="_blank"
                                    className="hover:underline"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
};

export default PageTemplate;
