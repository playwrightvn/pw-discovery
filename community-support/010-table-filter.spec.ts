import { expect, test } from '@playwright/test';

test('example filter', async ({ page }) => {
    await page.setContent(
        `
<table id="single_table" border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>STT</th>
      <th>Tên ca sĩ</th>
      <th>Bài hát hay</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Sơn Tùng</td>
      <td>Lạc Trôi</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mỹ Tâm</td>
      <td>Ước Gì</td>r
    </tr>
    <tr>
      <td>3</td>
      <td>Đen Vâu</td>
      <td>Trốn Tìm</td>
    </tr>
  </tbody>
</table>
        `
    );

    const table = page.locator("#single_table");
    const rows = table.getByRole("row");
    const targetRow = rows.filter({ hasText: 'Sơn Tùng' });
    await expect(targetRow).toContainText("Lạc Trôi");
})