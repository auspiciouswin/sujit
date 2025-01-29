const { expect } = require('@playwright/test')

class PageUtil{

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
    }

    async click(elementLocator, elementName){
        try {
            await elementLocator.waitFor({state : 'visible', timeout: 30000});
            await elementLocator.click();
            console.log(`Successfully clicked on ${elementName}`);
        } catch (error) {
            throw new Error (`Failed to click on ${elementLocator} : ${error.stack}`);
        }
    }

    async fill(elementLocator, value, elementName){
        try {
            await elementLocator.waitFor({state: 'visible', timeout: 30000});
            await elementLocator.fill(value);
            console.log(`Successfully filled ${elementName} with value: ${value}`)
        } catch (error) {
            throw new Error (`Failed to fill ${elementName}: ${error.stack}`);
        }

    }

}module.exports = {
    PageUtil
}