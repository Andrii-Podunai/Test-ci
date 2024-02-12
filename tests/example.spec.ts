import { test, expect } from "../fixtures/puma-fixtures";
// import { PumaLandingPage } from "../page-obgects/puma-landing-page";

test("get started link", async ({ pumaLandingPage, page }) => {
  await pumaLandingPage.getNavigationSport.click();

  await expect(page).toHaveTitle(/Shop All Sport/);
});

test("enter text", async ({ pumaLandingPage, page }) => {
  await pumaLandingPage.getSearchButton.click();
  const inputField = pumaLandingPage.setSearchInput;
  await inputField.fill("Sneakers");
  await pumaLandingPage.getSearchClick.click();

  await page.waitForSelector("img", { state: "attached" });
  await expect(page.getByLabel("Go to Defy Varsity Mid Women'")).toBeVisible();
});

test("check user is not loginned", async ({ pumaLandingPage, page }) => {
  await pumaLandingPage.getWishList.click();
  await expect(pumaLandingPage.getForm).toBeVisible();
});
test("check filters", async ({ pumaLandingPage, page }) => {
  await pumaLandingPage.getNavigationListKids.hover();
  await pumaLandingPage.getNavifationClassik.click();

  await pumaLandingPage.getButtonSize.click();
  await pumaLandingPage.getSizeTen.click();

  await expect(pumaLandingPage.getChoosedFilter).toBeVisible();
});
test("check autoloading in the page", async ({ pumaLandingPage, page }) => {
  await pumaLandingPage.getNavigationMan.click();
  await page.waitForLoadState();

  await page.waitForTimeout(2000);
  const initialCount = await pumaLandingPage.getProductItem.count();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForFunction(
    (initialCount) =>
      document.querySelectorAll('[data-test-id="product-list-item"]').length >
      initialCount,
    initialCount
  );

  const finalCount = await pumaLandingPage.getProductItem.count();
  expect(finalCount).toBeGreaterThan(initialCount);
});
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === "failed") {
    await page.screenshot({
      path: `../screenshots/${testInfo.title}.png`,
      fullPage: true,
    });
  }
});
test("check modal of feedback", async ({ pumaLandingPage, page }) => {
  await pumaLandingPage.getButtonFeedback.click();
  const isModalVisible = await page.isVisible(
    "#QSIFeedbackButton-target-container"
  );

  await expect(isModalVisible).toBeTruthy();
});
// test("check modal of Select a Location", async ({ pumaLandingPage, page }) => {
//   await expect(pumaLandingPage.getModalLocation).toBeVisible();
// });
// test("check slider", async ({ pumaLandingPage, page }) => {
//   // await page
//   //   .locator('[data-test-id="recommendation-product-carousel"]')
//   //   .scrollIntoViewIfNeeded();
//   await page.evaluate(() => {
//     if (page.locator('[data-test-id="recommendation-product-carousel"]')) {
//       page
//         .locator('[data-test-id="recommendation-product-carousel"]')
//         .scrollIntoViewIfNeeded();
//     }
//   });

//   const boundingBoxBefore =
//     await pumaLandingPage.getNewElementSlider.boundingBox();

//   await pumaLandingPage.getsliderButton.scrollIntoViewIfNeeded();
//   const arrowSlide = await pumaLandingPage.getsliderButton.first();
//   await page.locator('[data-test-id="close-btn"]').click();

//   await arrowSlide.click();

//   await page.waitForTimeout(1000);
//   const boundingBoxAfter =
//     await pumaLandingPage.getNewElementSlider.boundingBox();

//   await expect(boundingBoxBefore?.x !== boundingBoxAfter?.x).toBeTruthy();
// });
// // //

test("check Select a Location", async ({ pumaLandingPage, page }) => {
  await page.locator('[data-test-id="close-btn"]').click();

  await pumaLandingPage.getButtonLocation.scrollIntoViewIfNeeded();
  const visibilityCoockieModal =
    await pumaLandingPage.getCloseCoockieModal.isVisible();
  if (visibilityCoockieModal) {
    await pumaLandingPage.getCloseCoockieModal.click();
  }

  await pumaLandingPage.getButtonLocation.click();
  await pumaLandingPage.getInputLocation.fill("Ukraine");
  await pumaLandingPage.getSelectCountry.click();

  const expectedDomain = "ua.puma.com";
  const expectedPath = "/uk";
  await page.waitForURL("**/ua.puma.com/uk/");

  const url = page.url();

  expect(
    url.includes(expectedDomain) && url.includes(expectedPath)
  ).toBeTruthy();
});

test("check sale", async ({ pumaLandingPage, page }) => {
  await pumaLandingPage.getButtonSale.click();
  const textDecoration = pumaLandingPage.getTextDecoration;

  const expectedDecoration = await textDecoration.evaluate((element) =>
    window.getComputedStyle(element).getPropertyValue("text-decoration")
  );

  await expect(expectedDecoration.includes("line-through")).toBeTruthy();
  await expect(textDecoration).toHaveCSS("text-decoration", expectedDecoration);
});
