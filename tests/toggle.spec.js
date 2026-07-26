const { test, expect } = require('@playwright/test');

test('starts with blue background', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toHaveClass(/bg-blue/);
});

test('toggle switches from blue to pink', async ({ page }) => {
  await page.goto('/');
  await page.click('#bg-toggle');
  await expect(page.locator('body')).toHaveClass(/bg-pink/);
  await expect(page.locator('body')).not.toHaveClass(/bg-blue/);
});

test('toggle switches back from pink to blue', async ({ page }) => {
  await page.goto('/');
  await page.click('#bg-toggle');
  await page.click('#bg-toggle');
  await expect(page.locator('body')).toHaveClass(/bg-blue/);
  await expect(page.locator('body')).not.toHaveClass(/bg-pink/);
});

test('toggle aria-checked reflects state', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#bg-toggle')).toHaveAttribute('aria-checked', 'true');
  await page.click('#bg-toggle');
  await expect(page.locator('#bg-toggle')).toHaveAttribute('aria-checked', 'false');
});
