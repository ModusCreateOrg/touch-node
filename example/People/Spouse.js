/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 11/25/13
 * Time: 3:05 PM
 */
Ext.define('People.Spouse', {
    extend       : 'Ext.mixin.Mixin',
    mixinConfig  : {
        id : 'spouse'
    },
    config       : {
        isMarried : true
    },
    speakCommand : function (message) {
        console.log(message.toUpperCase());
    }
})