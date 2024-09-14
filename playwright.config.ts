const {defineConfig,devices}= require('@playwright/test')

module.exports= defineConfig({
    //test Directory
    testDir: './tests',
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    reporter: 'html',
    // CI environment
    retries: process.env.CI ? 1 : 0,
    // local
    use: {
        actionTimeout: 5*1000, // tìm kiếm tối đa 5 giây, giống implicit wait
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
});