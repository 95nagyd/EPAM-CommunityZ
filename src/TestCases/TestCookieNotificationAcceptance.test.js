const { By, WebDriver } = require("selenium-webdriver");
const basic = require("../Helpers/basic");

/**
 * @param {Promise<WebDriver>} [suiteDriver]
 */
const run = async (suiteDriver) => {
    describe("TestCookieNotificationAcceptance", ()=> {
        /** @type {WebDriver} */
        let driver;
        it("Set driver for test case", async () => {
            driver = suiteDriver ? await suiteDriver : await basic.getDriver();
            driver.navigate().to("https://community-z.com/");
            await basic.waitForPageLoadComplete(driver);
        });
        it("Check cookie element displayed", async () => {
            const cookieElement = await driver.findElement(By.className('evnt-alert-wrapper'));
            expect(await cookieElement.isDisplayed()).toBe(true);
        });
        it("Accept cookies", async () => {
            const acceptButton = await driver.findElement(By.xpath('//*[@class="evnt-buttons-wrapper"]//button'));
            await acceptButton.click();
        });
        it("Check cookie element not present", async () => {
            const isCookieElementPresent = await basic.isElementPresent(driver, By.className('evnt-alert-wrapper'));
            expect(isCookieElementPresent).toBe(false);
        });
        it("Refresh site", async () => {
            await driver.navigate().refresh();
            await basic.waitForPageLoadComplete(driver);
        });
        it("Check cookie element not displayed after refresh", async () => {
            const isCookieElementPresent = await basic.isElementPresent(driver, By.className('evnt-alert-wrapper'));
            expect(isCookieElementPresent).toBe(false);
        });
    });
}

if(require.main == null) run();

module.exports = {
    run: run
}