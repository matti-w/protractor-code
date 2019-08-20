
describe('Protractor drop down concept', function() {
    
    function calculator(first, second, operator){
        element(by.model("first")).sendKeys(first);
        element(by.model("second")).sendKeys(second);

        /*

        <select ng-model="operator" class="span1 ng-pristine ng-valid ng-touched" ng-options="value
        <option value="DIVISION">
        <option value="MULTIPLICATION">
        <option value="SUBTRACTION">
        <option value="ADDITION" selected="selected">

        */
        
        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(values){
                if( values == operator){
                    item.click();
                }
            })
        })

        element(by.id("gobutton")).click();
    }

    it('Should sum numbers', function(){
        calculator(3,5, 'DIVISION');
        calculator(8, 9, 'MULTIPLICATION');
        calculator(10, 8, 'SUBTRACTION');

        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css('td:nth-child(3)')).getText().then(function(text){
                console.log(text);
            })
        })

    })
});
    