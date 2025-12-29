//By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
// However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

// page.on('dialog', dialog => dialog.accept());
// await page.getByRole('button').click();

import {test,expect} from '@playwright/test'

test('Simple Dialog',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  page.on('dialog',async(dialog)=>{
    console.log( dialog.message())
     expect(dialog.type()).toContain('alert');
     expect(dialog.message()).toContain('I am an alert box!')
   await dialog.accept();
})
await page.getByRole('button',{name:'Simple Alert'}).click()
})

test('Confirm dialog box',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  page.on('dialog',async(dialog)=>{
    console.log( dialog.message())
     expect(dialog.type()).toContain('confirm');
     expect(dialog.message()).toContain('Press a button!')
   await dialog.accept();
   //await dialog.dismiss();
  
})
await page.getByRole('button',{name:'Confirmation Alert'}).click()
await expect( page.locator('#demo')).toHaveText('You pressed OK!')
})

test('Prompt dialog box',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  page.on('dialog',async(dialog)=>{
    console.log( dialog.message())
    expect(dialog.message()).toContain('Please enter your name:')
    console.log('@@@',dialog.defaultValue())
    expect(dialog.defaultValue()).toContain('Harry Potter');
    
   await dialog.accept('Ajay');
   //await dialog.dismiss();
})
await page.getByRole('button',{name:'Prompt Alert'}).click()
await expect( page.locator('#demo')).toHaveText('Hello Ajay! How are you today?')
console.log(await page.locator('#demo').innerText())
})
