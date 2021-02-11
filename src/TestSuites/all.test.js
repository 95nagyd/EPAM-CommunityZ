const {Builder, By, Key, util} = require("selenium-webdriver");
const basic = require("../Helpers/basic");
const TestCookieNotificationAcceptance = require("../TestCases/TestCookieNotificationAcceptance.test");
const CheckNotificationCountDisappearance = require("../TestCases/CheckNotificationCountDisappearance.test");
const CheckReleaseReactionWorksAsExpected = require("../TestCases/CheckReleaseReactionWorksAsExpected.test");
const TestNavbarNavigation = require("../TestCases/TestNavbarNavigation.test");
const CheckCategoryDropdownWorksAsExpected = require("../TestCases/Communities/CheckCategoryDropdownWorksAsExpected.test");

describe('All suite', () => {
    let suiteDriver = basic.getDriver();

    TestCookieNotificationAcceptance.run(suiteDriver);
    CheckNotificationCountDisappearance.run(suiteDriver);
    CheckReleaseReactionWorksAsExpected.run(suiteDriver);
    TestNavbarNavigation.run(suiteDriver);

    CheckCategoryDropdownWorksAsExpected.run(suiteDriver);
});




/*

//communities
Test Case: CheckLocationDropdownWorksAsExpected
            Hungary-re rákeres
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
            hungary-n belül kettő kijelöl
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
Test Case: CheckLanguageDropdownWorksAsExpected
            kijelöl magyar angol
            check kék
            dropdown fel
            result szám check
            felsorolás check
            clear all
            check nincs felsorolás
            check semmi nem kék
            russion ukranian kijelöl
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
Test Case: CheckOnlineToggleSwitchWorksAsExpected
            kikapcsolva nem kék, nincs result se felsorolás
            bekapcsolva kék
            result szám
            felsorolás
            kikapcsol
            nem kék, nincs result se felsorolás
            bekapcsol
            clear all
            nem kék, nincs result se felsorolás


Test Case: TestCommunitySearchByTitleOrTag
            keresés epam-ra
            megnézni az első community-t
            keresés törlés gomb
            megnézni az első community-t
            keresés epam-no-result
            no results found
            uresre ír
            megnézni az első community-t
Test Case: TestCommunitySearchByCategory
            activity keres
            megnézni az első community-t
            törölni communication
            megnézni az első community-t
            clear all 
            megnézni az első community-t
Test Case: TestCommunitySearchByLocation
            hungary keres
            megnézni az első community-t
            törölni budapest
            megnézni az első community-t
            clear all 
            megnézni az első community-t
Test Case: TestCommunitySearchByLanguage
            hungary keres
            russian
            megnézni az első community-t
            törölni russian
            megnézni az első community-t
            clear all 
            megnézni az első community-t
Test Case: TestCommunitySearchByOnlineToggleSwitch
            BA Mogilev Community filter szöveg
            első check
            megnézni az első community-t
            online be
            megnézni h nincs result
            online ki
            megnézni h nincs result
Test Case: TestCommunitySort
            a-z
            megnézni az első community-t
            z-a
            megnézni az első community-t
            most active
            megnézni az első community-t
            most popular
            megnézni az első community-t
            newest
            megnézni az első community-t
Test Case: TestCommunityBasicDetails
            geeks talk
            megnyit
            check basic details


Test Case: TestLanguageDropdownLanguageSelect
            switch lang -> create login gombok más nyelvűek


++ events keresések, rendezések
++ articles keresések, rendezések
++ video keresések, rendezések
++ about -> members keresések, rendezések
*/