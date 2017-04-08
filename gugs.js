browser.ignoreSynchronization = true;

describe('creating user and editing', function() {
  it('Creating,searching,editing user', function() {

     

      browser.get('https://www.google.co.in/?gfe_rd=cr&ei=aQEjWPruAuHs8AeZs4b4Aw');
      //browser.get('https://www.facebook.com/');
       
     new Google();
    //clicking Create user button
    expect(element(by.id("lst-ib")));
        browser.driver.sleep(5000);   

        browser.pause();

        browser.driver.switchTo().window("Facebook - Log In or Sign Up");
        browser.driver.switchTo().window("Google");


    new Clickedit();
    //scroll down in google page
    browser.driver.sleep(5000);

    new Next();
    //click next page
    browser.driver.sleep(5000);

        });
  });


     //generating random education 
  var getEdu = function() {
          var getEdu = "";
          var possible = "123456";
          for (var i = 0; i < 1; i++)
              getEdu += possible.charAt(Math.floor(Math.random() * possible.length));
          return  getEdu;
      };

      // while(getEdu()!=7)
      // {
      // 	      var Educate=getEdu();
      // }

  var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth()+1; //January is 0!
   var yyyy = today.getFullYear();
    if(dd<10) {
       dd='0'+dd
   } 
    if(mm<10) {
       mm='0'+mm
   } 
    today = dd+'/'+mm+'/'+yyyy;



      var Google = function() {

      	 browser.driver.findElement(by.name('q')).sendKeys(today);

      	 browser.driver.findElement(by.name('btnG')).click();

      	 
      };

       var Clickedit = function(){

 
  browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(function(){
  //whatever you need to check for here
    });
  };


  		var Next = function() {

  			browser.driver.findElement(by.id('pnnext')).click();

  		};


