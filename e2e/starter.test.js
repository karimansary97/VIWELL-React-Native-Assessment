import { describe, beforeAll } from "@jest/globals";

import { device, expect, element, by } from "detox";

describe("App Flow", () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it("Check if products exist in home screen", async () => {
    await expect(element(by.id("product-0"))).toBeVisible();
    await expect(element(by.id("product-1"))).toBeVisible();
  });

  it("Navigate to product screen", async () => {
    await element(by.id("product-0")).tap();
    await expect(element(by.id("wishlist-button"))).toBeVisible();
  });

  it("Add product to wishlist from product screen", async () => {
    await expect(element(by.id("wishlist-button-text"))).toHaveText(
      "Add To WishList"
    );
    await element(by.id("wishlist-button")).tap();
    await expect(element(by.id("wishlist-button-text"))).toHaveText(
      "Remove from WishList"
    );
  });

  it("Go back to products", async () => {
    await element(by.id("back-button")).tap();
    await expect(element(by.id("product-list"))).toBeVisible();
  });

  it("Add product to wishlist from home screen and check if is added", async () => {
    await expect(element(by.id("1-tab"))).toExist();
    await element(by.id("1-tab")).tap();
  });

  it("Remove product from wishlist", async () => {
    await element(by.id("Fav-button-0")).tap();
    await expect(element(by.id("product-2"))).not.toBeVisible();
  });

  it("Check if the whish screen empty ", async () => {
    await expect(element(by.id("Empty-View"))).toBeVisible();
  });
});
