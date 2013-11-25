/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 11/25/13
 * Time: 3:05 PM
 */


Ext.define('People.Person', {
    config      : {
        name : undefined,
        age  : undefined
    },
    constructor : function (config) {
        this.initConfig(config);
    },
    getInfo     : function () {
        return this.getName() + ', ' + this.getAge();
    }
});