class createCategory {
    get createUserPageUrl(){
        return 'https://kasirdemo.belajarqa.com/users/create'
    }
    get name (){
        return $('//*[@id="nama"]');

    }
    get email (){
        return $('//*[@id="email"]');

    }
    get password (){
        return $('//*[@id="password"]');

    }
    get buttonSimpan (){
        return $('//button[@class="chakra-button css-l5lnz6"]');

    }
    get errorMessage (){
        return $('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]');

    }
    async simpanUser(name,email,password){
        await this.name.setValue(name);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.buttonSimpan.click();
    }
    async asserterrorMessage() {
        await expect(this.errorMessage).toBeDisplayed()
        
    }
}

module.exports = new createCategory();