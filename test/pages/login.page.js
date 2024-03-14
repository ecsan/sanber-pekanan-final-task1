class LoginPage {
    get usernameInput (){
        return $('#email');

    }
    get passwordInput (){
        return $('#password');

    }
    get loginButton (){
        return $('//*[@id="root"]/div/div/div/div[2]/div/button');

    }

    async login(username,password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();