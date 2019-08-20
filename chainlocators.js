
describe('Chain locators concept', function() {

    it('Chain locators test', function(){
        //ng-model="first
        element(by.model("first")).sendKeys("3");
        //ng-model="second
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        
        /*
        <tr ng-repeat="result in memory" class="ng-scope">     <--------------
        <td class="ng-binding">
        8:27:07 AM
        </td>
         <td>
        <span class="ng-binding">3</span>
        <span class="ng-binding">+</span>
        <span class="ng-binding">5</span>
        </td>
        <td class="ng-binding">8</td>    <----------
        </tr>
        */

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text);
        });
    });
    
});
    