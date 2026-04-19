import { Page,expect,Locator } from "@playwright/test";

export class homepage{


 private readonly page:Page;   
// locators 
  private readonly linkMyAccount: Locator;
  private readonly linkRegister: Locator;
  private readonly linkLogin: Locator;
  private readonly txtsearchbox: Locator;
  private readonly btnsearch: Locator;

// constructors 

 constructor(page:Page){
    this.page=page;
    this.linkMyAccount=page.locator('span:has-text("My Account")');
    this.linkRegister=page.locator('a:has-text("Register")');
    this.linkLogin= page.locator('a:has-text("Login")');
    this.txtsearchbox=page.locator('input[placeholder="Search"]');
    this.btnsearch=page.locator('.btn.btn-default.btn-lg');
 }


// action methods 
// which will veirfy the page exist or not 
// we should not write any asserations 
async isHomePageExists(){

        let title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

 // Click "My Account" link
    async clickMyAccount(){
        try {
            await this.linkMyAccount.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'My Account': ${error}`);
            throw error;
        }
    }

 // Click "Register" link
    async clickRegister(){
        try {
            await this.linkRegister.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }

    // Click "Login" link
    async clickLogin(){
        try {
            await this.linkLogin.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.txtsearchbox.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.btnsearch.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }
    


}