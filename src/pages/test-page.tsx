import PageTemplate from "@page/page-template";
import Button from "@ui/button";

const TestPage = () => {
    return (
        <PageTemplate
            title="Test page 1 2 3 ..."
            description="This is a page dedicated for testing stuff"
        >
            <Button onClick={() => alert("You clicked a button")}>
                A button
            </Button>
        </PageTemplate>
    );
};

export default TestPage;
