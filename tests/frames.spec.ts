import{test,expect} from '@playwright/test'
//An iFrame is a HTML element that allow you to embed another HTML document within the current document.
//  Ifrmaes are commonly to embed external content such as videos,maps,or other web pages into a web page without affecting the parent document
test('using frames() method',async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/');
//total number of frames
const frames=page.frames();//returns array of frames
console.log('Number of frames',frames.length)
//using page.frame()
const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
if(frame){
   await frame.locator("//input[@name='mytext1']").fill('Ajay')
   //await frame.fill("//input[@name='mytext1']",'John')
}
else{
    console.log("Frame is not available")
}
})
test('using frameLocator',async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/');
await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill('Ajay')

})

test.only('Inner/child frames',async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/');
const frame= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
if(frame){
   await frame.locator("//input[@name='mytext3']").fill('Ajay')
   //await frame.fill("//input[@name='mytext1']",'John')
   const childframes=frame.childFrames();
   console.log('childframes',childframes.length)
   const radio=childframes[0].getByLabel("I am a human")
   radio.check();
   await    expect(radio).toBeChecked();
}
else{
    console.log("Frame is not available")
}
})