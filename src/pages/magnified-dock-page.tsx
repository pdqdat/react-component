import PageTemplate from "@comp/page-template";
import MagnifiedDock from "@comp/magnified-dock";

const reference = [
    {
        name: "Sam Selikoff tutorial",
        url: "https://youtu.be/JV5BlbRy_mg?si=lTfbVAsWUrZBWbVR",
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

const MagnifiedDockPage = () => {
    return (
        <PageTemplate
            title="Magnified dock"
            description="A recreation of the Mac OS dock with magnification"
            location="src/components/magnified-dock.tsx"
            bigScreen
            reference={reference}
        >
            <MagnifiedDock />
        </PageTemplate>
    );
};

export default MagnifiedDockPage;
