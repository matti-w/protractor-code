

describe('Non angular web page', function() {
    
    it('open non angular app test', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.usps.com/')
    })
});
    