const { By, WebDriver } = require("selenium-webdriver");
const basic = require("../Helpers/basic");

/**
 * @param {Promise<WebDriver>} [suiteDriver]
 */
const run = async (suiteDriver) => {
    describe("CheckNotificationCountDisappearance", ()=> {
        /** @type {WebDriver} */
        let driver;
        it("Set driver for test case", async () => {
            driver = suiteDriver ? await suiteDriver : await basic.getDriver();
            driver.navigate().to("https://community-z.com/");
            await basic.waitForPageLoadComplete(driver);
        });
        it("Wait for notification element to be displayed", async () => {
            await driver.wait(async () => {
                return (await basic.isElementPresent(driver, By.id('productstashSelector'))) &&
                    (await (await driver.findElement(By.id('productstashSelector'))).isDisplayed());
            }, 2000);
        });
        it("Check notification count equals 1", async () => {
            const notificationCountElement = await driver.findElement(By.className('notification-count'));
            expect(await notificationCountElement.getText()).toEqual('1');
        });
        it("Open notifications", async () => {
            const notificationElement = await driver.findElement(By.id('productstashSelector'));
            await notificationElement.click();
        });
        it("Wait for notification frame to be loaded", async () => {
            await driver.wait(async () => {
                return basic.isElementPresent(driver, By.id('ps_releases'));
            }, 2000);
        });
        it("Switch to notification frame", async () => {
            await driver.wait(async () => {
                await driver.switchTo().defaultContent();
                await driver.wait(async () => {
                    return await basic.isElementPresent(driver, By.id('ps_releases'));
                }, 2000);
                await driver.switchTo().frame(await driver.findElement(By.id('ps_releases')));
                return await basic.isElementPresent(driver, By.className('public-cta'));
            }, 5000);
        });
        it("Switch to default frame", async () => {
            await driver.switchTo().defaultContent();
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.id('close-btn'));
            }, 2000);
        });
        it("Close notifications", async () => {
            const closeButtonElement = await driver.findElement(By.id('close-btn'));
            await closeButtonElement.click();
        });
        it("Check notification count is not present", async () => {
            expect(await basic.isElementPresent(driver, By.className('notification-count'))).toBe(false);
        });
    });
}

if(require.main == null) run();

module.exports = {
    run: run
}