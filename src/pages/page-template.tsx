import React from "react";

interface PageTemplateProps {
    children?: React.ReactNode;
    title: string;
    description?: string;
    location?: string;
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
    reference,
}) => {
    return (
        <div className="container space-y-8 py-8">
            {/* Title section */}
            <section className="">
                <h2 className="h2 mb-2 font-bold">{title}</h2>

                {description && <p className="h6">{description}</p>}
            </section>

            {/* Demo section */}
            {children && (
                <section
                    id="demo"
                    className="border-border-dark flex min-h-52 scroll-mt-8 items-center justify-center rounded-lg border-2 bg-white/10 p-2 transition hover:border-border md:p-4"
                >
                    {children}
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
