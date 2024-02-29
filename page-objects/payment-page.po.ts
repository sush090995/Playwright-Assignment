import { Locator, Page } from "@playwright/test";

export default class PaymentPage  {
    readonly inputCountry: Locator;
    readonly inputCvv: Locator;
    readonly inputCardName: Locator;
    readonly inputCoupon: Locator;
    readonly buttonPlaceOrder: Locator;

    constructor(public page: Page) { 
        this.inputCountry = page.getByPlaceholder('Select Country')
        this.inputCvv = page.locator('input[type="text"]').nth(1)
        this.inputCardName = page.locator('input[type="text"]').nth(2)
        this.inputCoupon = page.locator('input[name="coupon"]')
        this.buttonPlaceOrder = page.getByText('Place Order')
    }

    async selectCountry(country: string){
        await this.inputCountry.fill(country);
    }
    async enterCardDetails(cvv: string, name: string, coupon: string){
        await this.inputCvv.fill(cvv);  
        await this.inputCardName.fill(name); 
        await this.inputCoupon.fill(coupon); 
    }
    async placeOrder(){
        await this.buttonPlaceOrder.click();
    }
}