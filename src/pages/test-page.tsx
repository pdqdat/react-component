import PageTemplate from "@comp/page-template";
import Button from "@ui/button";
import PageTitle from "@comp/page-title";

import { toast } from "react-toastify";

const TestPage = () => {
    return (
        <PageTemplate
            title="Test page 1 2 3 ..."
            description="This is a page dedicated for testing stuff"
        >
            <PageTitle title="Dat Phan is testing things..." />

            <Button
                onClick={() =>
                    toast.info("You clicked a button", {
                        autoClose: 3000,
                    })
                }
            >
                A button
            </Button>
        </PageTemplate>
    );
};

export default TestPage;
