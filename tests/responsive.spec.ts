import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://pascalconfort.vercel.app/');
  });

  test('Mobile layout - Header navigation', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile menu button is visible
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeVisible();

    // Check desktop navigation is hidden
    await expect(page.locator('nav.hidden.md\\:flex')).toBeHidden();

    // Check mobile-specific buttons
    await expect(page.locator('button:has-text("WhatsApp")').first()).toBeHidden();
    await expect(page.locator('a:has-text("Sună Acum")')).toBeVisible();
  });

  test('Tablet layout - Header navigation', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });

    // Check desktop navigation is visible
    await expect(page.locator('nav.hidden.md\\:flex')).toBeVisible();

    // Check mobile menu button is hidden
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeHidden();

    // Check WhatsApp button is visible
    await expect(page.locator('a:has-text("WhatsApp")')).toBeVisible();
  });

  test('Desktop layout - Header navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });

    // Check desktop navigation is visible
    await expect(page.locator('nav.hidden.md\\:flex')).toBeVisible();

    // Check mobile menu button is hidden
    await expect(page.locator('button[aria-label="Toggle menu"]')).toBeHidden();
  });

  test('Hero section - Mobile vs Desktop image display', async ({ page }) => {
    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('section.pt-16 img').first()).toBeVisible();

    // Desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('section.pt-16 img').first()).toBeVisible();
  });

  test('Services section - Grid responsiveness', async ({ page }) => {
    // Mobile: single column
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileCards = page.locator('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 .card');
    await expect(mobileCards).toHaveCount(5);

    // Tablet: two columns
    await page.setViewportSize({ width: 768, height: 1024 });
    const tabletCards = page.locator('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 .card');
    await expect(tabletCards).toHaveCount(5);

    // Desktop: three columns
    await page.setViewportSize({ width: 1200, height: 800 });
    const desktopCards = page.locator('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 .card');
    await expect(desktopCards).toHaveCount(5);
  });

  test('Contact form - Layout responsiveness', async ({ page }) => {
    // Mobile: stacked layout
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('.grid.grid-cols-1.lg\\:grid-cols-2')).toBeVisible();

    // Desktop: side-by-side layout
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('.grid.grid-cols-1.lg\\:grid-cols-2')).toBeVisible();
  });

  test('Emergency mode - Mobile responsiveness', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Toggle emergency mode
    await page.click('button:has-text("Urgent")');

    // Check emergency header
    await expect(page.locator('h1:has-text("🚨 URGENȚĂ PLUMBING")')).toBeVisible();

    // Check contact buttons are visible
    await expect(page.locator('button:has-text("📞 Sună Acum")')).toBeVisible();
    await expect(page.locator('button:has-text("💬 WhatsApp")')).toBeVisible();

    // Check emergency services grid
    await expect(page.locator('.grid.grid-cols-2')).toBeVisible();

    // Check contact info is hidden on mobile
    await expect(page.locator('.hidden.md\\:block')).toBeHidden();
  });

  test('Emergency mode - Desktop responsiveness', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });

    // Toggle emergency mode
    await page.click('button:has-text("Urgent")');

    // Check emergency header
    await expect(page.locator('h1:has-text("🚨 URGENȚĂ PLUMBING")')).toBeVisible();

    // Check contact info is visible on desktop
    await expect(page.locator('.hidden.md\\:block')).toBeVisible();
  });

  test('Button sizes and visibility across breakpoints', async ({ page }) => {
    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('a:has-text("Sună Acum")')).toBeVisible();
    await expect(page.locator('a:has-text("WhatsApp").hidden.sm\\:inline-flex')).toBeHidden();

    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('a:has-text("Sună Acum")')).toBeVisible();
    await expect(page.locator('a:has-text("WhatsApp")')).toBeVisible();

    // Desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('a:has-text("Sună Acum")')).toBeVisible();
    await expect(page.locator('a:has-text("WhatsApp")')).toBeVisible();
  });

  test('Text scaling and readability', async ({ page }) => {
    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileTitle = page.locator('h1.text-4xl.md\\:text-5xl.lg\\:text-6xl');
    await expect(mobileTitle).toHaveCSS('font-size', '36px'); // text-4xl

    // Desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    const desktopTitle = page.locator('h1.text-4xl.md\\:text-5xl.lg\\:text-6xl');
    await expect(desktopTitle).toHaveCSS('font-size', '60px'); // text-6xl
  });

  test('Touch targets - Minimum size on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Check button sizes
    const callButton = page.locator('a:has-text("Sună Acum")');
    const box = await callButton.boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(44); // Minimum touch target
    expect(box?.height).toBeGreaterThanOrEqual(44);
  });
});