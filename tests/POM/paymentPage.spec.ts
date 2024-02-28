import { Page } from "@playwright/test";
export default class PaymentPage  {

    constructor(public page: Page) { }

    async selectCountry(country: string){
        await this.page.getByPlaceholder('Select Country').fill(country);
    }
    async personalInfo(cvv: string, name: string, coupon: string){
        await this.page.locator('input[type="text"]').nth(1)
        .fill(cvv);  
        await this.page.locator('input[type="text"]').nth(2)
        .fill(name); 
        await this.page.locator('input[name="coupon"]')
        .fill(coupon); 
    }
    async placeOrder(){
        await this.page.getByText('Place Order').click();
    }
}