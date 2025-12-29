import{test,expect,chromium} from '@playwright/test'
test('browser settings-port like window size',async()=>{
  const browser= await chromium.launch({headless:false});
  const context=await browser.newContext( );
  context.addCookies([{name:'mycookie',value:'12345',url:'https://www.flipkart.com/'},
    //{name:'mycookie',value:'12345',url:'https://www.flipkart.com/'}
  ])
  const page1=await context.newPage();
  
  await page1.goto('https://www.flipkart.com/');
  const cookieslist=await context.cookies();
  const cook=cookieslist.find((i)=>i.name==='mycookie')
  expect(cook?.value).toBe('12345');
  expect(cook).toBeDefined();
  console.log("Total number of cookies: ",cookieslist.length)
  for(const i of cookieslist){
    console.log(`${i.name}:${i.value}`)
  }

  context.clearCookies();
 
  const cookieslistafterclear=await context.cookies();
   console.log(`number of cookies after clear ${cookieslistafterclear.length}`)
   for(const i of cookieslistafterclear){
    console.log(`${i.name}:${i.value}`)
  }
   expect(cookieslistafterclear.length).toBe(0);
})