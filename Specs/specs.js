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

it('should have checkbox and label', function(){
    expect(element(by.css('')).isPresent()).toEqual(true);
    expect(element(by.css('')).getText()).toEqual('logout');
})

it('should have button enabled when checkbox is selected', function(){
    expect(element(by.css('')).isPresent().isEnabled()).toEqual(false);
    element(by.css('')).click();
    expect(element(by.css('')).isPresent().isEnabled()).toEqual(true);
})

it('should have button enabled when checkbox is selected', function(){
    expect(element(by.css('')).isPresent().isEnabled()).toEqual(false);
    element(by.css('')).click();
    expect(element(by.css('')).isEnabled()).toEqual(true);
})

it('should have name fields', function(){
    expect(element(by.css('')).isPresent()).toEqual(true);
    expect(element(by.css('')).getText()).toEqual('First Name');
    expect(element(by.css('')).getText()).toEqual('Last Name');
})


it('should have phone fields', function(){
    expect(element(by.css('')).isPresent()).toEqual(true);
    expect(element(by.css('')).getText()).toEqual('Email');
    expect(element(by.css('')).getAttribute('value')).toEqual('sample@sample.com');
    expect(element(by.css('')).getText()).toEqual('Phone');
    expect(element(by.css('')).getAttribute('value')).toEqual('123-456-7890');
    
})

it('should have submit and reset', function(){
    expect(element(by.css('')).isPresent()).toEqual(true);
    expect(element(by.css('')).getText()).toEqual('First Name');
    expect(element(by.css('')).getText()).toEqual('Last Name');
})

it('Submit button should be disabled until "///"', function(){
    expect(element(by.css('')).isEnabled()).toEqual(true);
})

it('Should require correct email format', function(){
    
})

it('Should require correct phone format', function(){
    
})

it('Should require correct Zip code format', function(){
    
})

/*
should have search field
should be able to search for products by product number
should display product info
should dispaly all filter options
should be able to filter by "////"
should be able to display
should be able to select favorites
should be to navigate to 
should have option category label
should have "///" button
should be able to click on button and view options
should have add button
should be able to change quantity
should receive validation error message for missing fields




*/





