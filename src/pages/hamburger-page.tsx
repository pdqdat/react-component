import Hamburger from "@comp/hamburger";
import PageTemplate from "@comp/page-template";

const HamburgerPage = () => {
    return (
        <PageTemplate
            title="Animated hamburger"
            location="src/components/hamburger.tsx"
        >
            <Hamburger />
        </PageTemplate>
    );
};

export default HamburgerPage;
