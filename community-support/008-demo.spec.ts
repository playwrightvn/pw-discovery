import base, { expect } from '@playwright/test';

// Define test fixtures "hello" and "helloWorld".
type TestFixtures = {
  hello: { data: { name: string }[] };
};

// Extend base test with our fixtures.
const test = base.extend<TestFixtures>({
  // This fixture is a constant, so we can just provide the value.
  hello: { data: [] },
});

// Now, this "test" can be used in multiple test files, and each of them will get the fixtures.
export default test;

test.use({
  hello: {
    data: [
      {
        name: 'abc',
      },
      {
        name: 'xyz'
      }
    ]
  }
});

test('my test', async ({ hello }) => {
  console.log(hello);
  //    expect(helloWorld).toBe('abc, world!')
});