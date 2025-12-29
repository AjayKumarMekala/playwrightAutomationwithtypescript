import {test,expect,Locator} from '@playwright/test'

test('Handle select Dropdowns',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#country','France')
    await page.selectOption('#country',{label:'India'})
    await page.selectOption('#country',{value:'germany'})
    await page.selectOption('#country',{index:0})

//check number of options in dropdown
    const elements:Locator= page.locator('#country>option')
    await expect(elements).toHaveCount(10);

    //check an option in the dropdowns

    let elementsText:string[]=(await elements.allTextContents()).map(element=>element.trim());
    console.log(elementsText)
    // for(let element of elementsText){
    //     console.log(element)
    // }
    await expect(elementsText).toContain('Canada');

    await page.waitForTimeout(5000)

})