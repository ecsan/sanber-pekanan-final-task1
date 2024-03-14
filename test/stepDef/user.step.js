const { Given,When,Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const loginPage = require("../pages/login.page");
const dashboardPage = require("../pages/dashboard.page");
const userPage = require("../pages/user.page");
const createUserPage = require("../pages/createUser.page");

Given(/^I open KasirAja website$/, async () =>{
    await Page.open();
})
When(/^I login with valid credential$/, async () =>{
    await loginPage.login('mrthing@mail.com','mrthing123'); 
})
Then(/^I should be on the dashboard page$/, async () =>{
    await dashboardPage.assertDashboardUrl();
})

Given(/^I open menu pengguna$/, async () =>{
    await dashboardPage.clickButtonPengguna();
    await userPage.assertUserUrl();
})
When(/^Click button tambah$/, async () =>{
    await userPage.clickButtonTambah();
})
When(/^Input name,email and password$/, async () =>{
    await createUserPage.simpanUser('smin','smin@mail.com','smin');
})
Then(/^I should be on the user page and success add user$/, async () =>{
    await userPage.assertsuccessMessage();
    await userPage.assertUserUrl();
})
Then(/^There are error message name can not empty$/, async () =>{
    await createUserPage.asserterrorMessage();
})