const { By, WebDriver, WebElement } = require("selenium-webdriver");
const basic = require("../../Helpers/basic");

/**
 * @param {Promise<WebDriver>} [suiteDriver]
 */
const run = async (suiteDriver) => {
    describe("CheckCategoryDropdownWorksAsExpected", ()=> {
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
            let communitiesNavItemElement = await driver.findElement(By.xpath('//*[contains(@class,"communities-icon")]'));
            await communitiesNavItemElement.click();
            await basic.waitForPageLoadComplete(driver);
            throw new Error('hiba');
            await driver.wait(async () => {
                return await basic.isElementPresent(driver, By.xpath('//*[contains(@class,"communities-icon")]'));
            }, 2000);
        });
        it("Open category dropdown", async () => {
            const categoryDropdownElement = await driver.findElement(By.id('filter_category'));
            await categoryDropdownElement.click();
        });
        it("Search Consulting in category dropdown", async () => {
            const categoryDropdownSearchElement = await driver.findElement(By.xpath('(//*[contains(@class,"evnt-dropdown-filter")][.//*[@id="filter_category"]])//input[@type="text"]'));
            await categoryDropdownSearchElement.sendKeys("Consulting");
        });
        it("Select Consulting group in category dropdown search result", async () => {
            const consultingGroupElement = await driver.findElement(By.xpath('(//*[contains(@class,"evnt-dropdown-filter")][.//*[@id="filter_category"]])//*[@data-value="Consulting"]'));
            await consultingGroupElement.click();
        });
        /*
            Test Case 5: CheckCategoryDropdownWorksAsExpected
                kijelöl csoportot
                check mindegyik kék-e
                keresett szöveg törlése
                check mindegyik kék-e
                check counter
                bezár
                result szám check
                felsorolás check
                clear all
                check nincs felsorolás
                category check semmi nem kék
                consulting on belül kettő kijelöl
                check kék
                bezár
                result szám check
                felsorolás check
                töröl egyet
                felsorolás check
                dropdown le
                check kékek
                clear all
                check semmi nem kék
                bezár
                check nincs felsorolás
        */
    });
}

if(require.main == null) run();

module.exports = {
    run: run
}