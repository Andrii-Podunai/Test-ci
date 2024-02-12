import { test as base } from "@playwright/test";
import { PumaLandingPage } from "../page-obgects/puma-landing-page";

type MyFixtures = {
  pumaLandingPage: PumaLandingPage;
};

export const test = base.extend<MyFixtures>({
  pumaLandingPage: async ({ page }, use) => {
    const pumaLandingPage = new PumaLandingPage(page);
    await pumaLandingPage.goto();

    await use(pumaLandingPage);
  },
});
export { expect } from "@playwright/test";
