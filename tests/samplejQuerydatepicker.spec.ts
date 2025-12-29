import {test,expect,Page} from '@playwright/test'


async function selectDate(targetdate:string,page:Page,isFuture:boolean){

    const datevalues=targetdate.split('/');
    const day=datevalues[0];
    const month=datevalues[1];
    const year=datevalues[2];
  
while(true){
    const currentMonth=await page.locator('.ui-datepicker-month').textContent();
    const currentYear=await page.locator('.ui-datepicker-year').textContent();

    if( currentMonth===month && currentYear===year){
        break;
    }
   if(isFuture){
    await page.locator('.ui-datepicker-next').click();
   }
   else{
   await page.locator('.ui-datepicker-prev').click();
   }
}
 const dates=await page.locator('td .ui-state-default').all();

    for(let date of dates){
        let dt=await date.innerText();
        if(dt===day){
            await expect(date).toBeVisible({ timeout: 5000 });
            await date.click();
        }
    }
}
test('jQueryDatepicker',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  //await page.locator('#datepicker').fill('11/08/2025');
await page.locator('#datepicker').click()
 await selectDate('24/December/2024',page,false)

 const expectedDate='12/24/2024';
 await expect(page.locator('#datepicker')).toHaveValue(expectedDate)
})