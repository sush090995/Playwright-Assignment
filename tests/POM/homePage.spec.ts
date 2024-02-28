import { Page } from "@playwright/test";
export default class HomePage  {

    constructor(public page: Page) { }

    async viewProduct(){
        await this.page.getByRole('button', { name: 'View' }).nth(1).click();
    }
    async addProduct(){
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
    }
    async goToCart(){
        await this.page.getByRole('button', { name: ' Cart' }).click();
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }
}