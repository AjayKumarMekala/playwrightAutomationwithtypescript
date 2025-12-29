import{test,expect,chromium} from '@playwright/test'
test('browser settings-port like window size',async()=>{
  const browser= await chromium.launch({headless:false});
  const context=await browser.newContext({
    viewport:{width:700,height:700}
  });
  const page1=await context.newPage();
  
  await page1.goto('https://www.flipkart.com/')
})

test('browser settings-language & proxy',async()=>{
  const browser= await chromium.launch({headless:false});
  const context=await browser.newContext({
    viewport:{width:700,height:700},
    locale:'en-US',
   // proxy:{server:'http://myproxy.com:3245'}
  });
  const page1=await context.newPage();
  
  await page1.goto('https://www.flipkart.com/')
})
test.only('browser settings-SSL certificate',async()=>{
  const browser= await chromium.launch({headless:false});
  const context=await browser.newContext({
    viewport:{width:700,height:700},
    //locale:'en-US',
   // proxy:{server:'http://myproxy.com:3245'},
   ignoreHTTPSErrors:true
   
  });
  const page1=await context.newPage();
  
  await page1.goto('http://expiredbadssl.com/')
  console.log('----->',await page1.title())
})