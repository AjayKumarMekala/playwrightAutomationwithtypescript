import{test,expect,Locator} from '@playwright/test'
test('auto suggest dropdowns',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator("input[name='q']").fill('smart');
    await page.waitForTimeout(4000)
    const options:Locator=page.locator('ul>li')
    const count=await options.count();
    console.log('count........',count)
    expect(count).toBe(8)
})