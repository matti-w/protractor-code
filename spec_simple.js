
describe('Registration test suite', function() {

    function selectItems(product){
         element.all(by.tagName('app-card')).each(function(item){
             item.element(by.css('h4 a')).getText().then(function(text){
                 if(text == product){
                     item.element(by.css("button[class*='btn-info']")).click();
                 }
             })
         })
    }

    
    beforeEach(function() {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
    });
        
    

    it('Enter valid customer info', function(){
       
        element(by.name("name")).sendKeys("Mystudents");
		element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText("Submit")).click().then(function()
				{
			element(by.css("div[class*='success']")).getText().then(function(text)
					{
				console.log(text);
					})
				})
    });

    it('Enter Invalid customer info', function(){
        element(by.name("name")).click();
        element(by.name("name")).sendKeys("M");
        element(by.css("input[name='email']")).click();
        element(by.css("[class='alert alert-danger']")).getText().then(function(text){
            console.log(text);
        })
        
    });  
    
    it('Select products', function(){
        element(by.linkText("Shop")).click();
        selectItems("Samsung Note 8");
        selectItems("iphone X");
        element(by.partialLinkText("Checkout")).getText().then(function(text)
				{
			var res=text.split("(");
			var x=Number(res[1].trim().charAt(0));
		
			
			var y=x+1;
			console.log(y);
			//expect(res[1].trim().charAt(0)).toBe(y);
		})
    })
});
    