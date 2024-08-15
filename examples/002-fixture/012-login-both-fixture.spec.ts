import { test } from "./011-merge-fixture";

test.beforeEach(() => {
    console.log('BeforeEach fixture');
});

test('Login with both fixture', ({ myLoginFixture, myLoginPage }) => {
    console.log('Me in both fixture');
});