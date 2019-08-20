
describe('e2e Test Suite', function() {
    
    var elementObj = require("./elementLocators.js");
    var testDataObj = require("./testdata2.js");
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

    //data stores actual data
	 //description stores sub object name
	 //for every iteration one data set is picked

    using(testDataObj.testdata, function(data, description)
    {
            it('Should register with valid data ' + description, function(){
                elementObj.fullname.sendKeys(data.name);
                elementObj.email.sendKeys(data.email);
                elementObj.password.sendKeys(data.password);
                elementObj.submit.click();
            })
    })
    
    
        
});