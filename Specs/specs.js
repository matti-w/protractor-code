import { browser } from "protractor";


var EC2 = protractor.ExpectedConditions;

// page title
it('should have a title', function(){
    expect(browser.getTitle()).toEqual('title');
})

//page header
it('should have main page image/header', function(){
    expect(element(by.css('')).isPresent()).toEqual(true);
})

//login

it('should have username/password', function(){
    var locator = element(by.css(''));
    browser.wait(EC2.visibilityOf(locator), 50000);
    expect(element(by.css('')).isPresent()).toEqual(true);
})

it('should have username/password text', function(){
    expect(element(by.css('')).getText()).toEqual('username');
    expect(element(by.css('')).getText()).toEqual('password');
})

it('should have Login button', function(){
    expect(element(by.css('')).isPresent()).toEqual(true);
})

it('should have login text', function(){
    expect(element(by.css('')).getText()).toEqual('Login');
})

it('should login with credentials', function(){
    element(by.css('')).sendkeys(browser.params.login.username);
    element(by.css('')).sendkeys(browser.params.login.password);
    element(by.css('')).click();
    expect(browser.getCurrentUrl()).toEqual('');

})

it('should have logout button', function(){
    expect(element(by.css('')).isPresent()).toEqual(true);
    expect(element(by.css('')).getText()).toEqual('logout');
})



