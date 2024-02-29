import { Locator, Page } from "@playwright/test";

export default class LoginPage  {
    readonly inputEmail : Locator;
    readonly inputPassword: Locator;
    readonly buttonlogin: Locator;

    constructor(public page: Page) { 
        this.inputEmail = page.getByPlaceholder('email@example.com')
        this.inputPassword = page.getByPlaceholder('enter your passsword')
        this.buttonlogin = page.getByRole('button', { name: 'Login' })
    }

    async enterEmail(emailaddress: string){ 
        await this.inputEmail.fill(emailaddress);
    }
    async enterPassword(password: string){
        await this.inputPassword.fill(password);
    }
    async clickLogin(){
        await this.buttonlogin.press('Enter');
    }
        
}
    
