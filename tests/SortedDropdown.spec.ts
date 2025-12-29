import {test,expect,Locator} from '@playwright/test'
test('Verify dropdown sorted or not',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    let dropdownoptions:Locator=page.locator('#animals>option');
    console.log(await dropdownoptions.allTextContents())

   const trimmed:string[]=(await dropdownoptions.allTextContents()).map(element=>element.trim())
   console.log(trimmed)

   let original:string[]=[...trimmed];
   let sorted:string[]=[...trimmed].sort()
   console.log(original,sorted)
})