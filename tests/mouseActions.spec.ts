import {test,expect} from '@playwright/test'

test('mouse actions-hover',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/#')
const pointme=page.locator('.dropbtn');
await pointme.hover();

const drpdwn= page.locator('.dropdown a:nth-child(2)')
await drpdwn.click();

await page.waitForTimeout(3000);
})

test('mouse actions-rightclick',async({page})=>{
await page.goto('https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html')

page.on('dialog',async(dialog)=>{
    console.log(dialog.message());
await dialog.accept();
})
const pointme=page.locator("//span[text()='right click me']");
await pointme.click({button:'right'});

await page.locator("//span[text()='Copy']").click();

await page.waitForTimeout(1000);
})

test('mouse actions-dblclick()',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/#')
const pointme=page.locator("//button[text()='Copy Text']");
await pointme.dblclick();

const value=await page.locator('#field2');

expect(value).toHaveValue('Hello World!')
await page.waitForTimeout(3000);
})

test.only('mouse actions-draganddrop',async({page})=>{
await page.goto('https://www.w3schools.com/html/html5_draganddrop.asp')
//approach1
// const src=page.locator("#div1");
// const dest=page.locator('#div2');
// await src.dragTo(dest);
//approach 2
await page.locator("#div1").hover();
await page.mouse.down();
await page.locator("#div2").hover();
await page.mouse.up()
await page.waitForTimeout(3000);
})


