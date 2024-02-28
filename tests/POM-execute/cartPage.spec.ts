import { test } from "@playwright/test";
import LoginPage from "../POM/loginPage.spec";
import HomePage from "../POM/homePage.spec";
import PaymentPage from "../POM/paymentPage.spec";

const email = "susmitha.soundararajan@solitontech.com";
const password = "qwerty123!";
const cvv = "123";
const name = "Qwerty";
const coupon = "F1";
test("Add product", async ({page , baseURL}) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const payment = new PaymentPage(page);
    await page.goto('https://rahulshettyacademy.com/client');
    await login.enterEmail(email);
    await login.enterPassword(password);
    await login.clickLogin();
    await home.viewProduct();
    await home.addProduct();
    await home.goToCart();
    await payment.selectCountry("India");
    await payment.personalInfo(cvv,name,coupon);
    await payment.placeOrder();
});
       