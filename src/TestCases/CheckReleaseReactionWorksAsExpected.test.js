const { By, WebDriver, WebElement } = require("selenium-webdriver");
const basic = require("../Helpers/basic");

/**
 * @param {Promise<WebDriver>} [suiteDriver]
 */
const run = async (suiteDriver) => {
    describe("CheckReleaseReactionWorksAsExpected", ()=> {
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
        it("Open notifications", async () => {
            const notificationElement = await driver.findElement(By.id('productstashSelector'));
            await notificationElement.click();
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
        it("Check dislike reaction to be in initial state in 3. notification", async () => {
            const dislikeReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="dislike"]'));
            expect((await dislikeReactionElement.getAttribute('class')).split(' ').includes('selected')).toBe(false);
            expect((await dislikeReactionElement.getAttribute('class')).split(' ').includes('unselected')).toBe(false);
        });
        it("Check neutral reaction to be in initial state in 3. notification", async () => {
            const neutralReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="neutral"]'));
            expect((await neutralReactionElement.getAttribute('class')).split(' ').includes('selected')).toBe(false);
            expect((await neutralReactionElement.getAttribute('class')).split(' ').includes('unselected')).toBe(false);
        });
        it("Check like reaction to be in initial state in 3. notification", async () => {
            const likeReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="like"]'));
            expect((await likeReactionElement.getAttribute('class')).split(' ').includes('selected')).toBe(false);
            expect((await likeReactionElement.getAttribute('class')).split(' ').includes('unselected')).toBe(false);
        });
        it("Set dislike reaction to the 3. notification", async () => {
            /** @type {WebElement} */
            const dislikeReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="dislike"]'));
            await dislikeReactionElement.click();
        });
        it("Check dislike reaction to be selected in 3. notification", async () => {
            const dislikeReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="dislike"]'));
            expect((await dislikeReactionElement.getAttribute('class')).split(' ').includes('selected')).toBe(true);
        });
        it("Check neutral reaction to be unselected in 3. notification", async () => {
            const neutralReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="neutral"]'));
            expect((await neutralReactionElement.getAttribute('class')).split(' ').includes('unselected')).toBe(true);
        });
        it("Check like reaction to be unselected in 3. notification", async () => {
            const likeReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="like"]'));
            expect((await likeReactionElement.getAttribute('class')).split(' ').includes('unselected')).toBe(true);
        });
        it("Set like reaction to the 3. notification", async () => {
            /** @type {WebElement} */
            const likeReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="like"]'));
            await likeReactionElement.click();
        });
        it("Check dislike reaction to be unselected in 3. notification", async () => {
            const dislikeReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="dislike"]'));
            expect((await dislikeReactionElement.getAttribute('class')).split(' ').includes('unselected')).toBe(true);
        });
        it("Check neutral reaction to be unselected in 3. notification", async () => {
            const neutralReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="neutral"]'));
            expect((await neutralReactionElement.getAttribute('class')).split(' ').includes('unselected')).toBe(true);
        });
        it("Check like reaction to be selected in 3. notification", async () => {
            const likeReactionElement = await driver.findElement(By.xpath('(//*[@class="release-card"][3])//*[contains(@class,"ui button") and @data-reaction="like"]'));
            expect((await likeReactionElement.getAttribute('class')).split(' ').includes('selected')).toBe(true);
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
    });
}

if(require.main == null) run();

module.exports = {
    run: run
}