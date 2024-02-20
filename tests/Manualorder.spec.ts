import { test } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByRole("textbox", {name: "email@example.com", exact:true}).fill('susmitha.soundararajan@solitontech.com');
  await page.getByRole("textbox", {name: "enter your passsword", exact:true}).fill('qwerty123!');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  const adidas = page.locator("xpath = //b[text()='ADIDAS ORIGINAL']/ancestor::div[@class='card']");
  await adidas.getByRole('button', { name: 'View', exact: true}).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'Cart' }).nth(0).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByPlaceholder('Select Country').fill('India');
  await page.locator('input[type="text"]').nth(1).fill('012');
  await page.locator('input[type="text"]').nth(2).fill('SGS');
  await page.locator('input[name="coupon"]').fill('aaa');
  await page.getByText('Place Order ').click();

});