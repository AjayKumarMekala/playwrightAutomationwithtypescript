import {test,expect,Locator} from '@playwright/test'
test('Single file download ',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#singleFileInput').setInputFiles('uploads/test1.txt');

    await page.getByRole('button',{name:'Upload Single File'}).click();
     const text=await page.locator('#singleFileStatus').textContent();
     expect(text).toContain('test1.txt')
     await page.waitForTimeout(2000)
})
test.only('multiple file upload ',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#multipleFilesInput').setInputFiles(['uploads/test1.pdf','uploads/test2.pdf']);

    await page.getByRole('button',{name:'Upload Multiple Files'}).click();
     const text=await page.locator('#multipleFilesStatus').textContent();
     expect(text).toContain('test1.pdf')
     expect(text).toContain('test2.pdf')
     await page.waitForTimeout(2000)
})