// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.numbersense.co.za/');
//   await page.locator('#header').getByRole('link', { name: 'NumberSense', exact: true }).click();
//   await page.getByRole('link', { name: 'About', exact: true }).click();
//   await page.getByRole('heading', { name: 'About the NumberSense Mathematics Programme' }).click();
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
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('#menu-item-481').getByRole('link', { name: 'Resources', exact: true }).click();
//   await page.getByRole('heading', { name: 'Resources' }).click();
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
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.getByRole('link', { name: 'Videos' }).click();
//   await page.getByRole('heading', { name: 'Videos' }).click();
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
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
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
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.getByRole('link', { name: 'App', exact: true }).click();
//   await page.getByRole('heading', { name: 'The NumberSense Mobile App' }).click();
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
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.getByRole('link', { name: 'Events' }).click();
//   await page.getByRole('heading', { name: 'Events' }).click();
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
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.locator('body').press('ArrowUp');
//   await page.getByRole('link', { name: 'News' }).click();
//   await page.getByRole('heading', { name: 'News' }).click();
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
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.getByRole('link', { name: 'Contact' }).click();
//   await page.getByRole('heading', { name: 'Contact Us' }).click();
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
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('#menu-item-2340').getByRole('link', { name: 'Home' }).click();
//   await page.goto('https://www.numbersense.co.za/');
//   await page.locator('#header').getByRole('link', { name: 'NumberSense', exact: true }).click();
//   await page.goto('https://www.numbersense.co.za/my-profile/edit-account/?redirect_to=https://www.numbersense.co.za/');
//   await page.getByRole('link', { name: 'Register', exact: true }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Login' }).getByRole('link', { name: 'Login' }).click();
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('body').press('ArrowDown');
//   await page.locator('#username').click();
//   await page.locator('#username').fill('jack@bluegrassdigital.com');
//   await page.locator('#password').click();
//   await page.locator('#password').press('CapsLock');
//   await page.locator('#password').fill('C');
//   await page.locator('#password').press('CapsLock');
//   await page.locator('#password').fill('Cape');
//   await page.locator('#password').press('CapsLock');
//   await page.locator('#password').fill('CapeT');
//   await page.locator('#password').press('CapsLock');
//   await page.locator('#password').fill('CapeTown2022!');
//   await page.goto('https://www.numbersense.co.za/#login');
//   await page.goto('https://www.numbersense.co.za/');
// });