import { browser } from "protractor"

describe('protractor alert concept', function(){

    it('Should accept/dismiss alerts', function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/practice.php");
        element(by.id('confirmbtn')).click();
       // browser.switchTo().alert().accept();
        browser.switchTo()  .alert().dismiss().then(function(){
            browser.sleep(5000);
        })
    })
})