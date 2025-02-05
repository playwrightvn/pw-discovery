import { test as base } from "@playwright/test";

export type TagInfo = {
    tagName: string;
    tagSlug: string;
    tagDesc: string;
}[];

type TagFixtures = {
    tagInfo: TagInfo;
};

//const tag1Name = "K11-Tien-Tag01";
//const tag2Name = "K11-Tien-Tag02";

const tagPageTest = base.extend<TagFixtures>({
    tagInfo: [],
});

export { tagPageTest };

tagPageTest.use({
    tagInfo : [
        { tagName: "K11-Tien-Tag01", tagSlug: "k11-tien-tag01", tagDesc: "Description for K11-Tien-Tag01" },
        { tagName: "K11-Tien-Tag02", tagSlug: "k11-tien-tag02", tagDesc: "Description for K11-Tien-Tag02" }
    ]
})

tagPageTest("POST - Post Tag Passed", async ({ tagInfo }) => {
    console.log('Test - tagInfo: ', tagInfo);
    // Verification
    for (const tag of tagInfo) {
        console.log(tag);
    }
});