import {test,expect,Locator} from '@playwright/test'
test('duplicates in an array',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    let dropdownoptions:Locator=page.locator('#colors>option');
    console.log(await dropdownoptions.allTextContents())

   const trimmed:string[]=(await dropdownoptions.allTextContents()).map(element=>element.trim())
   console.log(trimmed)

   let myset=new Set<string>();
   let duplicates:string[]=[]
   
   for(let text of trimmed){
    if(myset.has(text)){
        duplicates.push(text)
    }
    else{
        myset.add(text)
    }
   }
   console.log(duplicates)
})