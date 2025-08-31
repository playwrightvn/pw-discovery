import test, { expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test.describe("Demo upload file", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/030-upload.html");
    });

    test("Single file upload", async ({ page }) => {
        const testFile = path.join(__dirname, "../test-data/sample.txt");
        

        await test.step("Step 1: check file exist", async () => {
            if (!fs.existsSync(testFile)) {
                fs.mkdirSync(path.dirname(testFile), { recursive: true });
                fs.writeFileSync(testFile, "This is a test file for single upload");
            }
        });

        await test.step("Step 2: upload file", async () => {
            const result = getData();
            const fileInput = page.locator("#singleFile");
            await fileInput.setInputFiles(testFile);
            await page.locator("//button[@id='uploadSingle']").click();
        });

        await test.step("Step 3: Verify data", async () => {
            const filePreview = page.locator("#singleFilePreview .file-item");
            await expect(filePreview).toBeVisible();
            await expect(filePreview).toContainText("sample.txt");
        })
    });

    async function getData () {
        const a = 1;
        const b = 2;
        return a + b;
    }

    test("Multiple files upload", async ({ page }) => {
        const testFiles = [
            path.join(__dirname, "../test-data/file1.txt"),
            path.join(__dirname, "../test-data/file2.txt"),
            path.join(__dirname, "../test-data/file3.txt")
        ];

        testFiles.forEach((file, index) => {
            if (!fs.existsSync(file)) {
                fs.mkdirSync(path.dirname(file), { recursive: true });
                fs.writeFileSync(file, `Test file ${index + 1} content`);
            }
        });

        const fileInput = page.locator("#multipleFiles");
        await fileInput.setInputFiles(testFiles);

        await expect(page.locator("#multipleFilesStatus")).toContainText("3 files selected");

        const fileItems = page.locator("#multipleFilesPreview .file-item");
        await expect(fileItems).toHaveCount(3);

        for (let i = 0; i < 3; i++) {
            await expect(fileItems.nth(i)).toContainText(`file${i + 1}.txt`);
        }
    });

    test("Image upload with preview", async ({ page }) => {
        const imageFile = path.join(__dirname, "../test-data/test-image.png");

        if (!fs.existsSync(imageFile)) {
            fs.mkdirSync(path.dirname(imageFile), { recursive: true });
            const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
            fs.writeFileSync(imageFile, Buffer.from(base64Image, "base64") as any);
        }

        const fileInput = page.locator("#imageFiles");
        await fileInput.setInputFiles(imageFile);

        await expect(page.locator("#imageFilesStatus")).toContainText("1 image(s) selected");

        const imagePreview = page.locator("#imageFilesPreview .image-item img");
        await expect(imagePreview).toBeVisible();
        await expect(imagePreview).toHaveAttribute("src", /^data:image/);
    });

    test("Drag and drop upload", async ({ page }) => {
        const testFile = path.join(__dirname, "../test-data/drag-drop.txt");

        if (!fs.existsSync(testFile)) {
            fs.mkdirSync(path.dirname(testFile), { recursive: true });
            fs.writeFileSync(testFile, "Drag and drop test file");
        }

        const dropZone = page.locator("#dropZone");
        const dataTransfer = await page.evaluateHandle(() => new DataTransfer());

        await page.dispatchEvent("#dropZone", "dragenter", { dataTransfer });
        await expect(dropZone).toHaveClass(/drag-over/);

        const fileInput = page.locator("#dropInput");
        await fileInput.setInputFiles(testFile);

        await expect(page.locator("#dropFilesPreview .file-item")).toBeVisible();
        await expect(page.locator("#dropFilesPreview")).toContainText("drag-drop.txt");
    });

    test("Advanced upload with validation - valid file", async ({ page }) => {
        const pdfFile = path.join(__dirname, "../test-data/document.pdf");

        if (!fs.existsSync(pdfFile)) {
            fs.mkdirSync(path.dirname(pdfFile), { recursive: true });
            const pdfContent = Buffer.from("%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n2 0 obj\n<<\n/Type /Pages\n/Kids []\n/Count 0\n>>\nendobj\nxref\n0 3\n0000000000 65535 f\n0000000009 00000 n\n0000000058 00000 n\ntrailer\n<<\n/Size 3\n/Root 1 0 R\n>>\nstartxref\n116\n%%EOF");
            fs.writeFileSync(pdfFile, pdfContent as any);
        }

        const fileInput = page.locator("#advancedFile");
        await fileInput.setInputFiles(pdfFile);

        await page.click("button:has-text('Upload')");

        await expect(page.locator("#advancedFileStatus")).toContainText("document.pdf");
        await expect(page.locator(".progress-bar")).toBeVisible();

        await page.waitForTimeout(1000);
        await expect(page.locator("#advancedFileStatus")).toContainText("uploaded successfully");
    });

    test("Advanced upload with validation - invalid file type", async ({ page }) => {
        const invalidFile = path.join(__dirname, "../test-data/invalid.exe");

        if (!fs.existsSync(invalidFile)) {
            fs.mkdirSync(path.dirname(invalidFile), { recursive: true });
            fs.writeFileSync(invalidFile, "Invalid file content");
        }

        const fileInput = page.locator("#advancedFile");
        await fileInput.setInputFiles(invalidFile);

        await page.click("button:has-text('Upload')");

        await expect(page.locator("#advancedFileStatus")).toContainText("Invalid file type");
    });

    test("Advanced upload with validation - file too large", async ({ page }) => {
        const largeFile = path.join(__dirname, "../test-data/large.pdf");

        if (!fs.existsSync(largeFile)) {
            fs.mkdirSync(path.dirname(largeFile), { recursive: true });
            const largeContent = Buffer.alloc(6 * 1024 * 1024, "a");
            fs.writeFileSync(largeFile, largeContent as any);
        }

        const fileInput = page.locator("#advancedFile");
        await fileInput.setInputFiles(largeFile);

        await page.click("button:has-text('Upload')");

        await expect(page.locator("#advancedFileStatus")).toContainText("File size exceeds 5MB");
    });

    test("Hidden input upload", async ({ page }) => {
        const testFile = path.join(__dirname, "../test-data/hidden-upload.txt");

        if (!fs.existsSync(testFile)) {
            fs.mkdirSync(path.dirname(testFile), { recursive: true });
            fs.writeFileSync(testFile, "Hidden input test file");
        }

        const fileInput = page.locator("#hiddenFile");
        await fileInput.setInputFiles(testFile);

        await expect(page.locator("#hiddenFileStatus")).toContainText("hidden-upload.txt");
        await expect(page.locator("#hiddenFileName")).toContainText("hidden-upload.txt");
    });

    test("Clear uploaded files", async ({ page }) => {
        const testFile = path.join(__dirname, "../test-data/clear-test.txt");

        if (!fs.existsSync(testFile)) {
            fs.mkdirSync(path.dirname(testFile), { recursive: true });
            fs.writeFileSync(testFile, "File to be cleared");
        }

        const fileInput = page.locator("#singleFile");
        await fileInput.setInputFiles(testFile);

        await expect(page.locator("#singleFileStatus")).toContainText("clear-test.txt");

        await fileInput.setInputFiles([]);

        await expect(page.locator("#singleFileStatus")).toContainText("No file selected");
        await expect(page.locator("#singleFilePreview")).toBeEmpty();
    });

    test("Remove individual file from multiple uploads", async ({ page }) => {
        const testFiles = [
            path.join(__dirname, "../test-data/remove1.txt"),
            path.join(__dirname, "../test-data/remove2.txt"),
            path.join(__dirname, "../test-data/remove3.txt")
        ];

        testFiles.forEach((file, index) => {
            if (!fs.existsSync(file)) {
                fs.mkdirSync(path.dirname(file), { recursive: true });
                fs.writeFileSync(file, `Remove test file ${index + 1}`);
            }
        });

        const fileInput = page.locator("#multipleFiles");
        await fileInput.setInputFiles(testFiles);

        await expect(page.locator("#multipleFilesStatus")).toContainText("3 files selected");

        const removeButton = page.locator("#multipleFilesPreview .file-item").first().locator("button");
        await removeButton.click();

        const remainingFiles = page.locator("#multipleFilesPreview .file-item");
        await expect(remainingFiles).toHaveCount(2);
        await expect(page.locator("#multipleFilesStatus")).toContainText("2 files selected");
    });

    test("Multiple image uploads with individual removal", async ({ page }) => {
        const imageFiles = [
            path.join(__dirname, "../test-data/image1.png"),
            path.join(__dirname, "../test-data/image2.png")
        ];

        const base64Image = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
        imageFiles.forEach((file) => {
            if (!fs.existsSync(file)) {
                fs.mkdirSync(path.dirname(file), { recursive: true });
                fs.writeFileSync(file, Buffer.from(base64Image, "base64") as any);
            }
        });

        const fileInput = page.locator("#imageFiles");
        await fileInput.setInputFiles(imageFiles);

        await expect(page.locator("#imageFilesStatus")).toContainText("2 image(s) selected");

        const removeButton = page.locator("#imageFilesPreview .image-item").first().locator("button");
        await removeButton.click();

        await expect(page.locator("#imageFilesPreview .image-item")).toHaveCount(1);
        await expect(page.locator("#imageFilesStatus")).toContainText("1 image(s) selected");
    });

    test.afterAll(() => {
        const testDataDir = path.join(__dirname, "../test-data");
        if (fs.existsSync(testDataDir)) {
            fs.rmSync(testDataDir, { recursive: true, force: true });
        }
    });
});