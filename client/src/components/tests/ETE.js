

const {Builder, By, Key, until} = require('selenium-webdriver');
var chrome = require("selenium-webdriver/chrome");

var options = new chrome.Options();
options.addArguments('--disable-web-security');
options.addArguments('--allow-running-insecure-content');
//options.addArguments('--headless');
options.addArguments("--user-data-dir=C:\\Users\\leema\\AppData\\Local\\Google\\Chrome\\User Data\\Default")
options.addArguments("--profile-directory=Profile 2");

var driver =  new Builder()
    .forBrowser("chrome").setChromeOptions(options).build();


async function LoadApplication(){
     try
     {
        //Load application
        await driver.get("http://localhost:3000/");
        console.log("Test 1: Application Loaded - PASS")
     }
     catch(e)
     {
        console.log("Test 1: Application Loaded - FAIL\n",e)

     }
 }

 async function SignIn(){
    try 
    {
        await driver.findElement(By.xpath("/html/body/div/div/button")).click();    //click the sign in button
        let by = By.className('navbar-nav');
        driver.wait(until.elementLocated(by,10000));
        // await driver.wait(until.elementIsVisible(By.xpath("/html/body/div/div/nav"),1000000)); //wait for text editor to display
        console.log("Test 1: Sign In - PASS")

    } catch (error) {
        console.log("Test 2: Sign in - FAIL\n",error)

    }
 }


 
// var driver = new webdriver.Builder().
//    withCapabilities(webdriver.Capabilities.chrome()).
//    build();

LoadApplication();
SignIn();