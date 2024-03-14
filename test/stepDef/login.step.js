const { Given,When,Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");

Given(/^I open KasirAja website$/, async () =>{
    await Page.open();
})
When(/^I login with valid credential$/, async () =>{
    await loginPage.login('mrthing@mail.com','mrthing123'); 
})
Then(/^I should be on the dashboard page$/, async () =>{
    await dashboardPage.assertDashboardUrl();
})