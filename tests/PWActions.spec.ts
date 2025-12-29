import{test,expect} from '@playwright/test'

test('Hanling check-boxes',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByPlaceholder('Enter Name').fill('Ajay')
})