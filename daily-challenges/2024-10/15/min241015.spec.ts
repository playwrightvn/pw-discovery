/*
# Playwright
- Thế giới di động (https://www.thegioididong.com/) và di động Việt (https://didongviet.vn/) là hai đơn vị uy tín của Việt Nam chuyên cung cấp các thiết bị di động.
- Bạn là một tín đồ của Apple, bạn muốn mua iPhone tại thời điểm thích hợp nhất.
## Đề bài:
Viết code cho test case sau:
- Truy cập hai trang web Di động Việt và thế giới di động tại hai tab khác nhau.
- Search từ khoá "iPhone 16" và kiểm tra kết quả trả về đầu tiên.
- In ra ngoài console "<đơn vị> có giá iPhone 16 rẻ hơn"
- Nếu giá nhỏ nhất < 25 triệu đồng, in ra console: "Tôi đã đủ tiền mua"
- Nếu giá nhỏ nhất > 25 triệu đồng, in ra console: "Tôi không đủ tiền mua"

## Kiến thức bổ sung
- Xử lý nhiều tab (page): https://playwright.dev/docs/pages#multiple-pages
*/

import { test, expect } from '@playwright/test'
import { TIMEOUT } from 'dns'

const keyword = 'iPhone 16'
const price:number = 25000000

test('min241015', async ({context}) => {
    const page = await context.newPage()
    await page.goto('https://www.thegioididong.com/')
    await page.locator('//input[@class="input-search"]').fill(`${keyword}`)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(10000)
    const firstProdutcTGDD = await page.locator(`(//ul[@class="listproduct"]/li)[1]`).innerText()
    expect(await page.locator(`(//ul[@class="listproduct"]/li)[1]`)).toContainText("iPhone 16 Pro Max 256GB")
    const priceOfFirstProductTGDD = await page.locator(`(//ul[@class="listproduct"]/li)[1]//strong[@class="price"]`).innerText()
    const priceOfTGDD = priceOfFirstProductTGDD.replace(/[^\d]/g, '')
    console.log(priceOfTGDD)

    const secondPage = await context.newPage()
    await secondPage.goto('https://didongviet.vn/')
    await secondPage.locator(`(//input[@id="input-search"])[1]`).fill(`${keyword}`)
    await secondPage.keyboard.press('Enter')
    await secondPage.waitForTimeout(10000)
    const firstProdutcDDV = await secondPage.locator(`(//div[@class="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4"]/div)[1]`).innerText()
    expect(await secondPage.locator(`(//div[@class="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4"]/div)[1]`)).toContainText("iPhone 16 128GB Chính Hãng (VN/A)")
    const priceOfFirstProductDDV = await secondPage.locator(`(//div[@class="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4"]/div)[1]//p[@class="font-bold !text-17"]`).innerText()
    const priceOfDDV = priceOfFirstProductDDV.replace(/[^\d]/g, '')

    if (priceOfTGDD > priceOfDDV) {
        console.log('DDV is cheaper than TGDD')
        if(Number(priceOfDDV) > price){
            console.log(`Tôi không đủ tiền mua`)
        }else{
            console.log(`Tôi đã đủ tiền mua`)
        }
    } else {
        console.log('TGDD is cheaper than DDV')
        if(Number(priceOfTGDD) > price){
            console.log(`Tôi không đủ tiền mua`)
        }else{
            console.log(`Tôi đã đủ tiền mua`)
        }
    }
    
})