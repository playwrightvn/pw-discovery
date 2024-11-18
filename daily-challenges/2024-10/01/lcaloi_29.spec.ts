import {test, Page} from '@playwright/test';

test.describe("Demo annotation", () => {
    test.beforeEach("Test01", async ({isMobile}) => {
        test.fixme(isMobile, "Please fix me");
    });

    test("Test01", {
        annotation: {
            type: "demo",
            description: "https://github.com/playwrightvn/pw-discovery",
        }
    }, async () => {
        console.log("Hello from test 1");
    });

    test("Test02", async ({browser}) => {
        console.log("Hello from test 2");
        test.info().annotations.push({
            type: "browser version",
            description: browser.version(),
        });
    })
})