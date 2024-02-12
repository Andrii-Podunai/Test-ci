import { expect, type Locator, type Page } from "@playwright/test";

export class PumaLandingPage {
  readonly page: Page;

  readonly getNavigationSport: Locator;
  readonly getSearchButton: Locator;
  readonly setSearchInput: Locator;
  readonly getSearchClick: Locator;
  readonly getWishList: Locator;
  readonly getForm: Locator;
  readonly getNavifationClassik: Locator;
  readonly getNavigationListKids: Locator;
  readonly getButtonSize: Locator;
  readonly getSizeTen: Locator;
  readonly getNavigationMan: Locator;
  readonly getProductItem: Locator;
  readonly getChoosedFilter: Locator;
  readonly getButtonFeedback: Locator;
  readonly getModal: Locator;
  readonly getsliderButton: Locator;
  readonly getNewElementSlider: Locator;
  readonly getElementToScroll: Locator;
  readonly getModalLocation: Locator;
  readonly getButtonLocation: Locator;
  readonly getInputLocation: Locator;
  readonly getSelectCountry: Locator;
  readonly getTextDecoration: Locator;
  readonly getButtonSale: Locator;
  readonly getCloseCoockieModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getNavigationSport = page.getByRole("menuitem", {
      name: "Sport",
      exact: true,
    });
    this.getSearchButton = page.locator(
      '//*[@data-test-id="search-button-nav"]'
    );
    this.setSearchInput = page.locator(
      '//*[@data-test-id="search-flyout-form-input"]'
    );
    this.getSearchClick = page.locator(
      '//*[@data-test-id="search-flyout-form-submit"]'
    );
    this.getWishList = page.locator("#nav-wishlist-link");
    this.getForm = page.getByText("LoginCreate accountEmail *");
    this.getNavigationListKids = page
      .locator("div")
      .filter({ hasText: /^Kids$/ })
      .getByRole("menuitem");
    this.getNavifationClassik = page
      .getByLabel("Boys")
      .getByRole("menuitem", { name: "Classics" })
      .first();
    this.getButtonSize = page.getByRole("button", { name: "Size" });
    this.getSizeTen = page.locator('[data-test-id="\\31 0-btn"]');
    this.getChoosedFilter = page.locator(
      '//*[@data-test-id="selected-filter-item"]'
    );
    this.getNavigationMan = page
      .locator("div")
      .filter({ hasText: /^Men$/ })
      .getByRole("menuitem");
    this.getProductItem = page.locator(
      '//*[@data-test-id="product-list-item"]'
    );

    this.getButtonFeedback = page.getByRole("button", { name: "FEEDBACK" });
    this.getModal = page.getByRole("dialog");

    this.getsliderButton = page.locator(
      '//*[@data-test-id="chevron-button-right"]'
    );
    this.getNewElementSlider = page.getByRole("link", {
      name: "PUMA x LAMELO BALL MB.01 Lo Men's Basketball Shoes, Green Gecko-CASTLEROCK,",
    });
    this.getElementToScroll = page.getByRole("heading", {
      name: "EXPLORE LAMELO BALL’S",
    });
    this.getModalLocation = page.locator(
      '//*[@data-test-id="country-selector"]'
    );
    this.getButtonLocation = page.locator(
      '//*[@data-test-id="select-location"]'
    );
    this.getInputLocation = page.locator(
      '//*[@data-test-id="location-selector-input"]'
    );
    this.getSelectCountry = page.getByRole("link", { name: "Ukrainian" });
    this.getTextDecoration = page.locator('//*[@data-test-id="price"]').first();
    this.getButtonSale = page.getByRole("menuitem", {
      name: "Sale",
      exact: true,
    });
    this.getCloseCoockieModal = page.locator(
      '[data-test-id="cookie-banner-close-btn"]'
    );
  }
  async goto() {
    await this.page.goto("https://us.puma.com/us/en");
  }
}
