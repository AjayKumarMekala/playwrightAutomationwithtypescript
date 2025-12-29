import {test,expect} from '@playwright/test'
test('Shadom DOM',async({page})=>{
await page.goto('https://books-pwakit.appspot.com/')

await page.locator('#input').fill("Playwright Automation");
await page.keyboard.press('Enter');
await page.waitForTimeout(5000)
const books=await page.locator('h2.title').all();

console.log(books.length)
expect(books.length).toBe(20);


})
