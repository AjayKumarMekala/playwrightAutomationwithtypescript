import {test,expect,Locator} from '@playwright/test'
test('keyboard actions',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

   const input1= page.locator('#input1');

   await input1.focus()//input1.click()

   await page.keyboard.insertText("welcome");

//    await page.keyboard.down('Control');
//    await page.keyboard.press('A');
//    await page.keyboard.up('Control');
      await page.keyboard.press('Control+a')

//    await page.keyboard.down('Control');
//    await page.keyboard.press('C');
//    await page.keyboard.up('Control');
 await page.keyboard.press('Control+c')

   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab')
 
//    await page.keyboard.down('Control');
//    await page.keyboard.press('V');
//    await page.keyboard.up('Control');
 await page.keyboard.press('Control+V')

   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab')

//    await page.keyboard.down('Control');
//    await page.keyboard.press('V');
//    await page.keyboard.up('Control');
 await page.keyboard.press('Control+v')
   

await page.waitForTimeout(3000)


})