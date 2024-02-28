import { Page } from "@playwright/test";
export default class LoginPage  {

    constructor(public page: Page) { }

    async enterEmail(emailaddress: string){ 
        await this.page.getByPlaceholder('email@example.com').fill(emailaddress);
    }
    async enterPassword(password: string){
        await this.page.getByPlaceholder('enter your passsword').fill(password);
    }
    async clickLogin(){
        await this.page.getByRole('button', { name: 'Login' }).press('Enter');
    }
        
}
    
