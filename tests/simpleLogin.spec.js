// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   test.setTimeout(220000);
//   await page.goto('https://numbersense-co-za-san-uat.azurewebsites.net/');
//   await page.locator('#menu-item-80').getByRole('link', { name: 'Shop' }).click();
//   await page.getByRole('heading', { name: 'Shop' }).click();
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('div:nth-child(6) > .card-btn-holder > .card-btn').click();
//   await page.getByRole('heading', { name: 'MathsSense Mathematics Programme (Grade 8 & 9)' }).click();
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.getByRole('button', { name: 'trolly ADD TO BASKET' }).click();
//   await page.getByRole('link', { name: ' 1 My Basket' }).click();
//   await page.getByRole('heading', { name: 'MathsSense Mathematics Programme (Grade 8 & 9)' }).click();
//   await page.getByRole('link', { name: 'Proceed to Checkout ' }).click();
//   await page.getByRole('heading', { name: 'Checkout & Payment' }).click();
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('#billing_first_name').click();
//   await page.locator('#billing_first_name').fill('Terry');
//   await page.locator('#billing_last_name').click();
//   await page.locator('#billing_last_name').fill('Janner');
//   await page.locator('#billing_company').click();
//   await page.locator('#billing_company').press('CapsLock');
//   await page.locator('#billing_company').fill('NA');
//   await page.locator('#billing_company').press('CapsLock');
//   await page.locator('#billing_country_field').click();
//   await page.locator('#billing_address_1').click();
//   await page.locator('#billing_address_1').fill('282 Kloon Way');
//   await page.locator('#billing_address_2').click();
//   await page.locator('#billing_address_2').fill('Big Bay');
//   await page.locator('#billing_city').click();
//   await page.locator('#billing_city').fill('Cape Town');
//   await page.locator("xpath=//p[@id='billing_state_field']//span[@class='jcf-select-opener']").click();
//   await page.getByRole('listbox', { name: 'Province *' }).press('ArrowDown');
//   await page.getByRole('listbox', { name: 'Province *' }).press('ArrowDown');
//   await page.getByRole('listbox', { name: 'Province *' }).press('ArrowDown');
//   await page.locator('#billing_postcode').click();
//   await page.locator('#billing_postcode').fill('7448');
//   await page.locator('#billing_phone').click();
//   await page.locator('#billing_phone').fill('0987829182');
//   await page.getByLabel('Email address *').click();
//   await page.getByLabel('Email address *').fill('testtwywisiijwsa@gmail.com');
//   await page.getByText('Email address *').click();
//   await page.getByLabel('Email address *').press('ArrowDown');
//   await page.getByLabel('Email address *').press('ArrowDown');
//   await page.getByLabel('Email address *').press('ArrowDown');
//   await page.locator('#shipping_first_name_field').getByText('First Name *').click();
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#shipping_first_name').press('ArrowDown');
//   await page.locator('#customer_details div').filter({ hasText: 'Billing details First Name *Last Name *Company Name (optional)Country *South Afr' }).locator('div').click();
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.getByLabel('Deliver to a different address?').uncheck();
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('jashduhoqidhqw!!!');
//   await page.locator("xpath=//label[@for='dawnwing_method_2']").click();
//   // await page.getByLabel('Economy (2 to 3 working days)').check();
//   // await page.locator("xpath=//a[@id='pay-by-payfast']").click();
//   await page.getByLabel('Economy (2 to 3 working days)').check();



//   // Below 2 line complete 3 line below 
//   await page.locator("xpath=span[@class='wf-button button-label']").click();
//   await page.locator("xpath=//a[@id='complete-payment']").click();
//   // await page.goto('https://numbersense-co-za-san-uat.azurewebsites.net/checkout-payment/order-pay/8733/?key=wc_order_C3NdLWinxoh9t');
//   // await page.goto('https://sandbox.payfast.co.za/eng/process/payment/e37eb6a3-55dd-4f76-a935-aeeec4ca2658');
//   // await page.goto('https://sandbox.payfast.co.za/eng/process/payment/e37eb6a3-55dd-4f76-a935-aeeec4ca2658#wf');
//   // await page.getByRole('button', { name: 'Complete Payment' }).click();
//   // await page.goto('https://sandbox.payfast.co.za/eng/process/finish/e37eb6a3-55dd-4f76-a935-aeeec4ca2658');

  
//   await page.getByRole('heading', { name: 'Order Confirmation' }).click();
// });



// // import { test, expect } from '@playwright/test';

// // test('Succesful Login', async ({ page }) => {
// //   test.setTimeout(120000);
// //   await page.goto('https://www.numbersense.co.za/');
// //   await page.getByRole('link', { name: 'Login / Register' }).click();
// //   await page.locator('#username').click();
// //   await page.locator('#username').fill('admin');
// //   await page.locator('#password').click();
// //   await page.locator("#password").type('rsj2Wjsdsj7VujY6QSrsyAfS');
// //   await page.locator('#password').press('ArrowDown');
// //   await page.locator('#password').press('ArrowDown');
// //   await page.getByRole('listitem').filter({ hasText: 'Login' }).getByRole('link', { name: 'Login' }).click();
// //   await page.locator("xpath=//input[@name='login']").click();
// //   // await page.goto("https://www.numbersense.co.za/#login");
// //   await page.screenshot({ path: 'loggedin.png' });
// //   await expect(page).toHaveURL(/#login/);
  
// // });

// // test('Smoke Test Site', async ({ page }) => {
// //   test.setTimeout(120000);
// //   await page.goto('https://www.numbersense.co.za/');
// //   await page.getByRole('link', { name: 'OK' }).click();
// //   await page.getByRole('heading', { name: 'Welcome to NumberSense' }).click();
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('#menu-item-2340').getByRole('link', { name: 'Home' }).click();
// //   await page.getByRole('link', { name: 'About', exact: true }).click();
// //   await page.getByRole('heading', { name: 'About the NumberSense Mathematics Programme' }).click();
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('#menu-item-5039').getByRole('link', { name: 'Resources' }).click();
// //   await page.getByRole('heading', { name: 'Resources' }).click();
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.getByRole('link', { name: 'Contact' }).click();
// //   await page.getByRole('heading', { name: 'Contact Us' }).click();
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('body').press('ArrowDown');
// //   await page.locator('#menu-item-111').getByRole('link', { name: 'Shop' }).click();
// //   await page.getByRole('heading', { name: 'Shop' }).click();
// //   await page.getByRole('link', { name: 'Videos' }).click();
// // });
