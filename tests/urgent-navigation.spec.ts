import { test, expect } from '@playwright/test';

test.describe('Urgent Mode Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://pascal-confort.vercel.app');
  });

  test.describe('Navigation from Urgent Mode to Normal Mode Sections', () => {
    test('Clicking "Servicii" in urgent mode switches to normal mode and scrolls to services section', async ({ page }) => {
      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeVisible();

      // Click Servicii button
      await page.click('button:has-text("Servicii")');

      // Wait for transition
      await page.waitForTimeout(600);

      // Verify switched to normal mode
      await expect(page.locator('h1:has-text("🚨 URGENȚĂ PLUMBING")')).toBeHidden();
      await expect(page.locator('nav.hidden.md\\:flex')).toBeVisible();

      // Verify scrolled to services section
      const servicesSection = page.locator('#servicii');
      await expect(servicesSection).toBeInViewport();
    });

    test('Clicking "Despre" in urgent mode switches to normal mode and scrolls to about section', async ({ page }) => {
      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeVisible();

      // Click Despre button
      await page.click('button:has-text("Despre")');

      // Wait for transition
      await page.waitForTimeout(600);

      // Verify switched to normal mode
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeHidden();

      // Verify scrolled to about section
      const aboutSection = page.locator('#despre');
      await expect(aboutSection).toBeInViewport();
    });

    test('Clicking "Contact" in urgent mode switches to normal mode and scrolls to contact section', async ({ page }) => {
      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeVisible();

      // Click Contact button
      await page.click('button:has-text("Contact")');

      // Wait for transition
      await page.waitForTimeout(600);

      // Verify switched to normal mode
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeHidden();

      // Verify scrolled to contact section
      const contactSection = page.locator('#contact');
      await expect(contactSection).toBeInViewport();
    });
  });

  test.describe('Visual Feedback and Transition Overlay', () => {
    test('Transition overlay appears during mode switch', async ({ page }) => {
      // Start transition to urgent mode
      await page.click('button:has-text("Urgent")');

      // Check overlay appears
      await expect(page.locator('text=Trecere la Mod Urgență')).toBeVisible();
      await expect(page.locator('.animate-spin')).toBeVisible();

      // Wait for transition to complete
      await page.waitForTimeout(600);

      // Overlay should disappear
      await expect(page.locator('text=Trecere la Mod Urgență')).toBeHidden();
    });

    test('Transition overlay appears when switching back from urgent mode', async ({ page }) => {
      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await page.waitForTimeout(600);

      // Click to switch back
      await page.click('button:has-text("Normal")');

      // Check overlay appears
      await expect(page.locator('text=Trecere la Mod Normal')).toBeVisible();

      // Wait for transition
      await page.waitForTimeout(600);

      // Overlay should disappear
      await expect(page.locator('text=Trecere la Mod Normal')).toBeHidden();
    });

    test('Buttons are disabled during transition', async ({ page }) => {
      // Start transition
      await page.click('button:has-text("Urgent")');

      // Check buttons are disabled (opacity and pointer-events)
      await expect(page.locator('button:has-text("...")')).toBeVisible();
      await expect(page.locator('button:has-text("Servicii")')).toHaveClass(/pointer-events-none/);

      // Wait for transition
      await page.waitForTimeout(600);

      // Buttons should be enabled
      await expect(page.locator('button:has-text("Normal")')).toBeVisible();
    });
  });

  test.describe('Cross-Device Consistency', () => {
    test('Navigation works on mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeVisible();

      // Open mobile menu
      await page.click('button[aria-label="Toggle menu"]');

      // Click Servicii in mobile menu
      await page.click('button:has-text("Servicii")');

      // Wait for transition
      await page.waitForTimeout(600);

      // Verify switched to normal mode and scrolled
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeHidden();
      const servicesSection = page.locator('#servicii');
      await expect(servicesSection).toBeInViewport();
    });

    test('Navigation works on desktop viewport', async ({ page }) => {
      await page.setViewportSize({ width: 1200, height: 800 });

      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeVisible();

      // Click Servicii button
      await page.click('button:has-text("Servicii")');

      // Wait for transition
      await page.waitForTimeout(600);

      // Verify switched to normal mode and scrolled
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeHidden();
      const servicesSection = page.locator('#servicii');
      await expect(servicesSection).toBeInViewport();
    });
  });

  test.describe('Cross-Browser Consistency', () => {
    test('Navigation works in Chrome', async ({ page, browserName }) => {
      test.skip(browserName !== 'chromium', 'Chrome-specific test');

      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await page.waitForTimeout(600);

      // Click Servicii
      await page.click('button:has-text("Servicii")');
      await page.waitForTimeout(600);

      // Verify navigation
      await expect(page.locator('#servicii')).toBeInViewport();
    });

    test('Navigation works in Firefox', async ({ page, browserName }) => {
      test.skip(browserName !== 'firefox', 'Firefox-specific test');

      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await page.waitForTimeout(600);

      // Click Despre
      await page.click('button:has-text("Despre")');
      await page.waitForTimeout(600);

      // Verify navigation
      await expect(page.locator('#despre')).toBeInViewport();
    });

    test('Navigation works in Safari', async ({ page, browserName }) => {
      test.skip(browserName !== 'webkit', 'Safari-specific test');

      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await page.waitForTimeout(600);

      // Click Contact
      await page.click('button:has-text("Contact")');
      await page.waitForTimeout(600);

      // Verify navigation
      await expect(page.locator('#contact')).toBeInViewport();
    });
  });

  test.describe('Smooth Scrolling and Timing', () => {
    test('Smooth scrolling occurs after mode switch', async ({ page }) => {
      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await page.waitForTimeout(600);

      // Click Servicii
      await page.click('button:has-text("Servicii")');

      // Wait for transition
      await page.waitForTimeout(600);

      // Check that scroll happened smoothly (viewport should contain services section)
      const servicesSection = page.locator('#servicii');
      await expect(servicesSection).toBeInViewport();
    });

    test('Multiple rapid clicks do not cause race conditions', async ({ page }) => {
      // Activate urgent mode
      await page.click('button:has-text("Urgent")');
      await page.waitForTimeout(600);

      // Rapidly click multiple navigation buttons
      await page.click('button:has-text("Servicii")');
      await page.click('button:has-text("Despre")');
      await page.click('button:has-text("Contact")');

      // Wait for all transitions
      await page.waitForTimeout(2000);

      // Should end up in normal mode, not broken state
      await expect(page.locator('text=Solicită Intervenție Rapidă')).toBeHidden();
      await expect(page.locator('nav.hidden.md\\:flex')).toBeVisible();

      // Should be at contact section (last click)
      const contactSection = page.locator('#contact');
      await expect(contactSection).toBeInViewport();
    });

    test('Navigation during ongoing transition is handled gracefully', async ({ page }) => {
      // Start transition to urgent mode
      await page.click('button:has-text("Urgent")');

      // Immediately try to navigate
      await page.click('button:has-text("Servicii")');

      // Wait for everything to settle
      await page.waitForTimeout(1500);

      // Should not be in broken state
      const isEmergencyVisible = await page.locator('text=Solicită Intervenție Rapidă').isVisible();
      const isNormalVisible = await page.locator('nav.hidden.md\\:flex').isVisible();

      // Either emergency or normal mode should be visible, not both hidden
      expect(isEmergencyVisible || isNormalVisible).toBe(true);
    });
  });
});