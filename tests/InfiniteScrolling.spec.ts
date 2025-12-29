import {test,expect} from '@playwright/test'
test('Scrolling-inside web page',async({page})=>{
    test.slow();//slows the test triple to defaut time like default=30 secx3=90
await page.goto('https://www.booksbykilo.in/new-books')
//placeholder="Select an item"
let previousHeight=0;
while(true){
    
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight);
    })
    await page.waitForTimeout(2000)
    //cpature the height of the page
    const currentHeight=await page.evaluate(()=>{
        return document.body.scrollHeight;
    })
    console.log("previousHeight:: ",previousHeight)
    console.log("currentHeight:: ",currentHeight)
    if(previousHeight===currentHeight){
        break;
    }
    previousHeight=currentHeight;
}
console.log("Reached")
})

test.only('Scrolling-inside web page to find a book',async({page})=>{
    test.slow();//slows the test triple to defaut time like default=30 secx3=90
await page.goto('https://www.booksbykilo.in/new-books')
//placeholder="Select an item"
let previousHeight=0;
let bookfound=false;
while(true){
const books=await page.locator('#divItemCard h3').allInnerTexts();
   if(books.includes('Roary and Friends')){
    bookfound=true;
    console.log("Book Found");
    expect(bookfound).toBeTruthy();
    break;
   }
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight);
    })
    await page.waitForTimeout(2000)
    //cpature the height of the page
    const currentHeight=await page.evaluate(()=>{
        return document.body.scrollHeight;
    })
    console.log("previousHeight:: ",previousHeight)
    console.log("currentHeight:: ",currentHeight)
    if(previousHeight===currentHeight){
        break;
    }
    previousHeight=currentHeight;
}
console.log("Reached")
if(!bookfound){
    console.log("Book not found");
}
})