// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder().forBrowser('chrome').build();
// driver.get('https://www.zalando.pl/obuwie/');
// driver.findElements(webdriver.By.className('cat_articleName--arFp')).then(function(elements) {
//     elements.map(function(el) {
//         el.getText().then(function(txt) {
//           console.log(txt);
//         });
//     }); 
// });

const webdriver = require('selenium-webdriver');
const regex = new RegExp('GAZELLE', 'gi');

(async function(){
    const driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://www.zalando.pl/obuwie/');
    const products = await driver.findElements(webdriver.By.className('cat_articleCard-1r8nF'));
    
    products.forEach(async function(product){
        const text = await product.findElement(webdriver.By.className('cat_articleName--arFp')).getText();
        const url = await product.findElement(webdriver.By.className('cat_infoDetail--ePcG')).getAttribute('href');

        if (regex.test(text)) {
            const currentDriver = new webdriver.Builder().forBrowser('chrome').build();
            currentDriver.get(url);
        }
    });
})();



// function findMatches(wordToMatch, products) {
//     products.filter(function(product) {
//         const regex = new RegExp(wordToMatch, 'gi');
//         product.match(regex);
//     });
// }