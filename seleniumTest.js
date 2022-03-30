const {Builder, By, Key, until} = require('selenium-webdriver');

async function example (){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://michaladostalova.github.io/todolist/");

    await driver.findElement(By.className("input")).sendKeys("Your task 1",Key.RETURN);
    await driver.findElement(By.className("input")).sendKeys("Your task 2",Key.RETURN);
    await driver.findElement(By.className("input")).sendKeys("Your task 3",Key.RETURN);

    
    let searchButton = await driver.findElement(By.className("fa-check-square"))
    // let searchButton = await driver.findElement(By.xpath(///i))
    await searchButton.click();

    
}

example()




