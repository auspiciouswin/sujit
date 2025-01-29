const {PageUtil} = require('../utils/PageUtil')

class HomePage{

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
        this.PageUtil = new PageUtil(page);
    }

    elements = {
        gmailLink:()=> this.page.locator('a[aria-label="Gmail "]')
    }

    async visit(){
        const url = process.env.BASE_URL;
        if(!url){
            console.log('BASE_URL is not defined in the environment variables')
            return;
        }
        try{
            await this.page.goto(url);
            console.log('Opening URL :' + url)
        }catch(error){
            console.error('failed to visit the page', error)
        }
    }

    async clickingGmailLink(){
        await this.PageUtil.click(this.elements.gmailLink(), ('Gmail Link'))
    }
}module.exports = {
    HomePage
};