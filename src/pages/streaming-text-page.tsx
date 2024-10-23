import PageTemplate from "@comp/page-template";
import StreamingText from "@comp/streaming-text";

const reference = [
    {
        name: "Sam Selikoff tutorial",
        url: "https://youtu.be/vgICBsz5Qtc?si=HtQIUM-2vJweUMnU",
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

const StreamingTextPage = () => {
    return (
        <PageTemplate
            title="Animated streaming text"
            location={[
                "src/components/streaming-text.tsx",
                "src/hooks/use-animated-text.tsx",
            ]}
            reference={reference}
        >
            <StreamingText />
        </PageTemplate>
    );
};

export default StreamingTextPage;
