
import {test,expect} from '@playwright/test'
test('Scrolling',async({page})=>{
await page.goto('https://demowebshop.tricentis.com/')

await page.getByRole('link',{name:'nopCommerce'}).click();
await page.waitForTimeout(3000);
})
test('Scrolling-inside dropdown',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
//placeholder="Select an item"

await page.getByPlaceholder('Select an item').click();
const option=await page.locator('#dropdown div:nth-child(55)');
console.log("option text:",await option.innerText());
option.click();

await page.waitForTimeout(3000);
})

test.only('Scrolling-inside table',async({page})=>{
await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html')
//placeholder="Select an item"
const option= page.locator("//table[@id='example']//tr//td[text()='Bruno']");
await option.click();
console.log("option text:",await option.innerText());


await page.waitForTimeout(3000);
})