import{test,expect,chromium} from '@playwright/test'
test('Handle tabs',async()=>{
  const browser= await chromium.launch();
  const context=await browser.newContext();
  const parentPage=await context.newPage();
  await parentPage.goto('https://testautomationpractice.blogspot.com/');

  const [childpage]=await Promise.all([context.waitForEvent('page'),parentPage.locator("//button[text()='New Tab']").click()]);

  //switch between pages and get titles(using context)
  const pages=context.pages();
  console.log("number of pages",pages.length)
  console.log("Parent page title",await pages[0].title())
  console.log("child page title",await pages[1].title())

  
})

test.only('Handle popups',async({browser})=>{
  
  const context=await browser.newContext();
  const page=await context.newPage();
  await page.goto('https://testautomationpractice.blogspot.com/');

  await Promise.all([page.waitForEvent('popup'),await page.locator("//button[text()='Popup Windows']").click()]);

  await page.waitForTimeout(5000)
  //switch between pages and get titles(using context)
  const popupwindows=context.pages();
  console.log("number of popups",popupwindows.length)

  console.log(popupwindows[0].url());
  console.log(popupwindows[1].url());
  console.log(popupwindows[2].url());

  for(const pw of popupwindows ){
   const title=await pw.title()
    if(title.includes('Selenium')){
      await pw.getByRole('link',{name:'Register now!'}).click();
     //await pw.locator("//a[text()='Register now!']").click()
      console.log("clicked successfully!")
      await page.waitForTimeout(3000)
      await pw.close();
    }
  }
  

  
})