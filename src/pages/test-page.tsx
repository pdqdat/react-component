import PageTemplate from "@comp/page-template";
import Button from "@ui/button";
import PageTitle from "@comp/page-title";

const TestPage = () => {
    return (
        <PageTemplate
            title="Test page 1 2 3 ..."
            description="This is a page dedicated for testing stuff"
        >
            <PageTitle title="Dat Phan is testing things..." />

            <Button onClick={() => alert("You clicked a button")}>
                A button
            </Button>
        </PageTemplate>
    );
};

export default TestPage;
