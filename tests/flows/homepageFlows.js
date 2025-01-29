const { HomePage } = require ('../../page-objects/HomePage')
require('dotenv').config({path: `.env.${process.env.TEST_ENV || 'stage'}`})

async function clickGmailLink(page, userContext, events, test) {
    const {step} = test;
    const homePage = new HomePage(page);
    await step('Verify Gmail Link response', async () =>{
        await homePage.visit();
        await homePage.clickingGmailLink()
    })    
}module.exports = {
    clickGmailLink
}