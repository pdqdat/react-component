import PageTemplate from "@comp/page-template";
import HighlightPanel from "@comp/highlight-panel";

const reference = [
    {
        name: "Sam Selikoff tutorial",
        url: "https://youtu.be/Q2CJNB6yvwY?si=xp6MiM8i58jvljfH",
    },
    {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/docs",
    },
    {
        name: "Framer Motion",
        url: "https://www.framer.com/motion/",
    },
];

const HighlightPanelPage = () => {
    return (
        <PageTemplate
            title="Highlight panel"
            location="src/components/highlight-panel.tsx"
            reference={reference}
        >
            <HighlightPanel />
        </PageTemplate>
    );
};

export default HighlightPanelPage;
