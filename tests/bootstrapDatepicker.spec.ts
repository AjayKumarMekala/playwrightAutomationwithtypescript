import {test,expect,Page} from '@playwright/test'



test('jQueryDatepicker',async({page})=>{
  await page.goto('https://www.booking.com/')
  //await page.locator('#datepicker').fill('11/08/2025');
const datebutton= page.getByTestId('searchbox-dates-container');

await expect(datebutton).toBeVisible({timeout:2000})
 await datebutton.click();
    
    const checkInDay='29';
    const checkInMonth='December';
    const checkInYear='2025';
  
while(true){
    const datefromUI=await page.locator('.d7bd90e008 h3').first().innerText();
    const currentMonth=datefromUI.split(" ")[0];
    const currentYear=datefromUI.split(" ")[1];

    if( currentMonth===checkInMonth && currentYear===checkInYear){
        break;
    }
   else{
   await page.locator('//button[@aria-label="Next month"]').click();
   }
}

 const dates=await page.locator('table.b8fcb0c66a tbody').nth(0).locator('td').all();

    for(let date of dates){
        let dt=await date.innerText();
        if(dt===checkInDay){
            await expect(date).toBeVisible({ timeout: 5000 });
            await date.click();
        }
    }


   const checkOutDay='24';
    const checkOutMonth='February';
    const checkOutYear='2026';
  
while(true){
    const datefromUI=await page.locator('.d7bd90e008 h3').nth(1).innerText();
    const currentMonth=datefromUI.split(" ")[0];
    const currentYear=datefromUI.split(" ")[1];

    if( currentMonth===checkOutMonth && currentYear===checkOutYear){
        break;
    }
   else{
   await page.locator('//button[@aria-label="Next month"]').click();
   }
}
 const checkoutdates=await page.locator('table.b8fcb0c66a tbody').nth(1).locator('td').all();

    for(let date of checkoutdates){
        let dt=await date.innerText();
        if(dt===checkOutDay){
            await expect(date).toBeVisible({ timeout: 5000 });
            await date.click();
        }
    }
await page.waitForTimeout(2000)

//  const expectedDate='12/24/2024';
//  await expect(page.locator('#datepicker')).toHaveValue(expectedDate)
})