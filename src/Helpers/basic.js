const {Builder, By, WebDriver, Locator} = require("selenium-webdriver");


/**
 * @return {Promise<WebDriver>}
 */
const getDriver = async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    return driver;
};

/**
 * @param {WebDriver} [driver]
 * @param {Locator} [locator]
 * @return {Promise<boolean>}
 */
const isElementPresent = async (driver, locator) => {
    return (await driver.findElements(locator)).length != 0;
};

/**
 * @param {WebDriver} [driver]
 */
const waitForPageLoadComplete = async (driver) => {
    await driver.wait(async () => {
        return !(await isElementPresent(driver, By.className("evnt-global-loader"))) && 
            await driver.executeScript(
                'return window.openHTTPs === undefined ?' +
                    '(function() { ' +
                        'var oldOpen = XMLHttpRequest.prototype.open; ' +
                        'window.openHTTPs = 0; '+
                        'XMLHttpRequest.prototype.open = function(method, url, async, user, pass) { '+
                            'window.openHTTPs++; '+
                            'this.addEventListener("readystatechange", function() { '+
                                'if(this.readyState == 4) {window.openHTTPs--;}'+
                            '}, false);'+
                        'oldOpen.call(this, method, url, async, user, pass);'+
                    '}})() : window.openHTTPs', []
            ) == 0;
    });
};

module.exports = {
    getDriver: getDriver,
    isElementPresent: isElementPresent,
    waitForPageLoadComplete: waitForPageLoadComplete
}
