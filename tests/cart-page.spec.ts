import { test } from "@playwright/test";
import LoginPage from "../page-objects/login-page.po";
import HomePage from "../page-objects/home-page.po";
import PaymentPage from "../page-objects/payment-page.po";

const email = "susmitha.soundararajan@solitontech.com";
const password = "qwerty123!";
const cvv = "123";
const name = "Qwerty";
const coupon = "F1";
test("Add product", async ({page , baseURL}) => {
    await page.goto('https://rahulshettyacademy.com/client');
    const login = new LoginPage(page);
    await login.enterEmail(email);
    await login.enterPassword(password);
    await login.clickLogin();
    const home = new HomePage(page);
    await home.viewProduct();
    await home.addProduct();
    await home.goToCart();
    const payment = new PaymentPage(page);
    await payment.selectCountry("India");
    await payment.enterCardDetails(cvv,name,coupon);
    await payment.placeOrder();
});
       