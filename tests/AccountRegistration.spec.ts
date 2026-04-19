/**
 * Testcase: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * steps:
 * 1) Naviagte to application URL
 * 2) Go to 'MY Account' and click 'Register'
 * 3) Fill in registartion details with random data 
 * 4) Agree to privacy policy and submit the form 
 * 5) validate the confirmation message 
 * 
 * 
 * 
 */

import { test, expect } from '@playwright/test'
import { homepage } from '../pages/HomePage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { DataProvider } from '../utilis/dataProvider'
import { RandomDataUtil } from '../utilis/randomDataGenerator'
import { TestConfig } from '../test.config';


let homepages: homepage;
let registrationpage: RegistrationPage;
let config: TestConfig;

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl); // Navigate to application url 
    homepages = new homepage(page);
    registrationpage = new RegistrationPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
    await page.close();

})


test('user registration test @master @sanity @regression', async () => {

    // Go to 'My Account' and click 'Register'

    await homepages.clickMyAccount();
    await homepages.clickRegister();

    // Fill in registration details with random data 


    await registrationpage.setFirstName(RandomDataUtil.getFirstName());
    await registrationpage.setLastName(RandomDataUtil.getlastName());
     await registrationpage.setEmail(RandomDataUtil.getEmail());
/*     const email = RandomDataUtil.getEmail();
await registrationpage.setEmail(email);
console.log(email);
 */

    await registrationpage.setTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
   await registrationpage.setPassword(password);
  /*  await registrationpage.setPassword(password);
console.log(password); */
    await registrationpage.setConfirmPassword(password);

    await registrationpage.setPrivacyPolicy();
    await registrationpage.clickContinue();

    // validate the confirmation message 

    const confirmationMsg = await registrationpage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!')


});