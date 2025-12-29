import {test,expect} from '@playwright/test'

test('Verify logo',async({page})=>{
  await page.goto('https://www.nopcommerce.com/en?srsltid=AfmBOopOINO6pYBmU0pn95ZLYLE-MjOVcuEfVK-8stqIoBZufRm6Q3jh');
  await expect(page.getByAltText('nopCommerce')).toBeVisible();//getByAltText-especially for images

  //getByText-find an element by the text it contains.you can match by substring ,entire string
  //this will be used for non intercative locators ,like div,span,labels
  //for interative locators like button,a,input.use role locators

 await expect(page.getByText('The most popular ')).toBeVisible();

 //getByRole-locate by Role-(role is not a attribute)
 /*role locator include buttons,checkboxes,headings,links,lists,tables
 prefer for interative locators like button,a,input.use role locators
 */
// await page.locator("//span[text()='My account             ']").click();

// await page.getByRole('link',{name:'Register'}).click();
})
test('Verify other ',async({page})=>{
  await page.goto('https://www.nopcommerce.com/en/register?returnUrl=%2Fen');
  //locates form control by labels text
  //when to use:Ideal for form fields with visible labels
  await page.getByLabel('First name:').fill('Ajay');
    await page.getByLabel('Last name:').fill('M');
      await page.getByLabel('Email:').first().fill('ajay@gmail.com');
      await page.getByLabel('Confirm email:').fill('ajay@gmail.com');
      await page.getByLabel('Username:').fill('Ajay');
   
})
