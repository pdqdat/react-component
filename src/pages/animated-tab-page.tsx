import PageTemplate from "@page/page-template";
import AnimatedTab from "@comp/animated-tab";

const reference = [
    {
        name: "Sam Selikoff tutorial",
        url: "https://youtu.be/kep_Iaxuzy0?si=z0ODiEfvR5MwALNr",
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

const AnimatedTabPage = () => {
    return (
        <PageTemplate
            title="Animated tab"
            location="src/components/animated-tab.tsx"
            reference={reference}
        >
            <AnimatedTab />
        </PageTemplate>
    );
};

export default AnimatedTabPage;
