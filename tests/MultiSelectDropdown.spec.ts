import {test,expect,Locator} from '@playwright/test'
test('Multi select dropdowns',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

//check multiple options 
await page.locator('#colors').selectOption(['Red','Yellow','Blue','Green'])//visible text
await page.locator('#colors').selectOption(['red','yellow'])//by value
await page.locator('#colors').selectOption([{label:'Red'},{label:'Yellow'},{label:'Blue'}])//by label
await page.locator('#colors').selectOption([{index:1},{index:2},{index:4}])//By index
//check number of options in dropdown
    const elements:Locator= page.locator('#colors>option')
    await expect(elements).toHaveCount(7);

    //check an option in the dropdowns

    let elementsText:string[]=(await elements.allTextContents()).map(element=>element.trim());
    console.log(elementsText)
    // for(let element of elementsText){
    //     console.log(element)
    // }
    await expect(elementsText).toContain('Yellow');
await page.waitForTimeout(5000)

})