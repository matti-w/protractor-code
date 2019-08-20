
describe('e2e Test Suite', function() {
    
    var elementObj = require("./elementLocators.js");
    var testDataObj = require("./testdata.js");
    var using = require('jasmine-data-provider');

    beforeEach(function(){
        elementObj.getURL();
    });

    
    afterEach(function() {
        console.log('Test is complete!!');
    });


    function selectProduct(product){
        element.all(by.tagName('app-card')).each(function(item){
            item.element(by.css('h4 a')).getText().then(function(text){
                if(text == product){
                    item.element(by.css("button[class*='btn btn-info']")).click();
                };
            });
        });
    };


    it('Should register with valid data', function(){
        elementObj.fullname.sendKeys(testDataObj.name);
        elementObj.email.sendKeys(testDataObj.email);
        elementObj.password.sendKeys(testDataObj.password);
        elementObj.submit.click();
    })
        
});
    