const { By, WebDriver, WebElement } = require("selenium-webdriver");
const basic = require("../Helpers/basic");

/**
 * @param {Promise<WebDriver>} [suiteDriver]
 */
const run = async (suiteDriver) => {
    describe("TestNavbarNavigation", ()=> {
        /** @type {WebDriver} */
        let driver;
        it("Set driver for test case", async () => {
            driver = suiteDriver ? await suiteDriver : await basic.getDriver();
            driver.navigate().to("https://community-z.com/");
            await basic.waitForPageLoadComplete(driver);
        });
        it("Wait for navbar to be visible", async () => {
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.className('evnt-navigation navbar-nav'));
            }, 5000);
        });
        it("Click communities nav item", async () => {
            const communitiesNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"communities-icon")]'));
            await communitiesNavItemElement.click();
            await basic.waitForPageLoadComplete(driver);
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"communities-icon")]'));
            }, 2000);
        });
        it("Check communities nav item is active", async () => {
            const communitiesNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"communities-icon")]'));
            expect((await communitiesNavItemElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check communities nav item current url", async () => {
            expect(await driver.getCurrentUrl()).toEqual('https://community-z.com/communities');
        });
        it("Click online events nav item", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            await eventsNavItemElement.click();
            const onlineEventsElement = await driver.findElement(By.xpath('//*[@class="dropdown-item" and text()="Online events"]'));
            await onlineEventsElement.click();
            await basic.waitForPageLoadComplete(driver);
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"dropdown")]'));
            }, 2000);
        });
        it("Check events nav item is active", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            expect((await eventsNavItemElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check online events nav item is active", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            await eventsNavItemElement.click();
            const onlineEventsElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown-item") and text()="Online events"]'));
            expect((await onlineEventsElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check online events nav item current url", async () => {
            expect(await driver.getCurrentUrl()).toEqual('https://community-z.com/online-events?f%5B0%5D%5Bonline%5D%5B%5D=Online');
        });
        it("Click all events nav item", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            await eventsNavItemElement.click();
            const allEventsElement = await driver.findElement(By.xpath('//*[@class="dropdown-item" and text()="All Events"]'));
            await allEventsElement.click();
            await basic.waitForPageLoadComplete(driver);
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"dropdown")]'));
            }, 2000);
        });
        it("Check events nav item is active", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            expect((await eventsNavItemElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check all events nav item is active", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            await eventsNavItemElement.click();
            const allEventsElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown-item") and text()="All Events"]'));
            expect((await allEventsElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check all events nav item current url", async () => {
            expect(await driver.getCurrentUrl()).toEqual('https://community-z.com/all-events');
        });
        it("Click calendar nav item", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            await eventsNavItemElement.click();
            const calendarElement = await driver.findElement(By.xpath('//*[@class="dropdown-item" and text()="Calendar"]'));
            await calendarElement.click();
            await basic.waitForPageLoadComplete(driver);
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"dropdown")]'));
            }, 2000);
        });
        it("Check events nav item is active", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            expect((await eventsNavItemElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check calendar nav item is active", async () => {
            const eventsNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown")]'));
            await eventsNavItemElement.click();
            const calendarElement = await driver.findElement(By.xpath('//*[contains(@class,"dropdown-item") and text()="Calendar"]'));
            expect((await calendarElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check calendar nav item current url", async () => {
            expect(await driver.getCurrentUrl()).toEqual('https://community-z.com/calendar');
        });
        it("Click articles nav item", async () => {
            const articlesNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"articles-icon")]'));
            await articlesNavItemElement.click();
            await basic.waitForPageLoadComplete(driver);
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"articles-icon")]'));
            }, 2000);
        });
        it("Check articles nav item is active", async () => {
            const articlesNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"articles-icon")]'));
            expect((await articlesNavItemElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check articles nav item current url", async () => {
            expect(await driver.getCurrentUrl()).toEqual('https://community-z.com/articles');
        });
        it("Click video nav item", async () => {
            const videoNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"talks-library-icon")]'));
            await videoNavItemElement.click();
            await basic.waitForPageLoadComplete(driver);
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"talks-library-icon")]'));
            }, 2000);
        });
        it("Check video nav item is active", async () => {
            const videoNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"talks-library-icon")]'));
            expect((await videoNavItemElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check video nav item current url", async () => {
            expect(await driver.getCurrentUrl()).toEqual('https://community-z.com/video?f%5B0%5D%5Bmedia%5D%5B%5D=Video');
        });
        it("Click video nav item", async () => {
            const videoNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"talks-library-icon")]'));
            await videoNavItemElement.click();
            await basic.waitForPageLoadComplete(driver);
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"talks-library-icon")]'));
            }, 2000);
        });
        it("Check video nav item is active", async () => {
            const videoNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"talks-library-icon")]'));
            expect((await videoNavItemElement.getAttribute('class')).includes('active')).toBe(true);
        });
        it("Check video nav item current url", async () => {
            expect(await driver.getCurrentUrl()).toEqual('https://community-z.com/video?f%5B0%5D%5Bmedia%5D%5B%5D=Video');
        });
        it("Click about nav item", async () => {
            const aboutNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"info-icon")]'));
            await aboutNavItemElement.click();
            await basic.waitForPageLoadComplete(driver);
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"info-icon")]'));
            }, 2000);
        });
        it("Check about nav item is not active", async () => {
            const aboutNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"info-icon")]'));
            expect((await aboutNavItemElement.getAttribute('class')).includes('active')).toBe(false);
        });
        it("Check about nav item current url", async () => {
            expect(await driver.getCurrentUrl()).toEqual('https://community-z.com/communities/communityz');
        });
    });
}

if(require.main == null) run();

module.exports = {
    run: run
}