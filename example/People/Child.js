/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 11/25/13
 * Time: 3:05 PM
 */
Ext.define('People.Child', {
    extend : 'People.Person',
    config : {
        canCrawl : false
    },
    crawl  : function () {
        this.getCanCrawl() ? console.log('crawling') : console.log('cant crawl');
    }
});