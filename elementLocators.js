function locators(){

    this.fullname=element(by.name("name"));
    this.email=element(by.css("input[name='email']"));
    this.password=element(by.id("exampleInputPassword1"));
	this.submit=element.all(by.name("inlineRadioOptions"));
    this.getURL= function(){
        browser.get('https://qaclickacademy.github.io/protocommerce/');
    };
};

module.exports = new locators();