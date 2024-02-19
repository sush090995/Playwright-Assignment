import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('email@example.com').fill('susmitha.soundararajan@solitontech.com');
  await page.getByPlaceholder('email@example.com').press('Tab');
  await page.getByPlaceholder('enter your passsword').fill('Sush090995!');
  await page.getByPlaceholder('enter your passsword').press('Tab');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  //****** Add the product to the cart manually ******
  await page.getByRole('button', { name: 'View' }).nth(1).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  //****** Add product to the cart usine API ******
  const addToCartResponse = await page.request.post(' https://rahulshettyacademy.com/api/ecom/user/add-to-cart', {
    data: {
      "productOrderedId": "6581ca979fd99c85e8ee7faf",
    }
  });
  await page.getByRole('button', { name: ' Cart' }).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByPlaceholder('Select Country').fill('India');
  await page.getByPlaceholder('Select Country').press('ArrowDown');
  await page.getByPlaceholder('Select Country').press('ArrowDown');
  await page.getByPlaceholder('Select Country').press('Enter');
  //await page.waitForTimeout(50000);
  //await page.getByRole('button', { name: 'India' }).click();
  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).fill('012');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('SGS');
  await page.locator('input[name="coupon"]').click();
  await page.locator('input[name="coupon"]').fill('aaa');
  //await page.getByRole('button', { name: 'Apply Coupon' }).click();
  await page.getByText('Place Order').click();
  //****** Get OrderId from UI and compare it with the response ******
  const orderId = page.locator('xpath=//*[@id="htmlData"]/tbody/tr[4]/td/table/tbody/tr/td/table/tbody/tr[3]/td/label');
  const productDetailsResponse = await page.request.get('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/65cdaba4a86f8f74dc790b03');
  await expect(productDetailsResponse).toBeOK();
 // const orderDetails = await productDetailsResponse.body();
  console.log(await productDetailsResponse.json());
  const orderPayLoad: {
    productDetailsResponse: {
        _id: string;
    }[];
}
  if(orderId == )
  {

  }
});