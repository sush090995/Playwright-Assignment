import { Locator, Page } from "@playwright/test";

export default class HomePage  {
    readonly buttonViewProduct: Locator;
    readonly butonAddProduct: Locator;
    readonly buttonCart: Locator;
    readonly buttonCheckout: Locator;

    constructor(public page: Page) { 
        this.buttonViewProduct = page.getByRole('button', { name: 'View' }).nth(1)
        this.butonAddProduct = page.getByRole('button', { name: 'Add to Cart' })
        this.buttonCart = page.getByRole('button', { name: 'Cart' }).nth(0)
        this.buttonCheckout = page.getByRole('button', { name: 'Checkout' })
    }

    async viewProduct(){
        await this.buttonViewProduct.click();
    }
    async addProduct(){
        await this.butonAddProduct.click();
    }
    async goToCart(){
        await this.buttonCart.click();
        await this.buttonCheckout.click();
    }
}