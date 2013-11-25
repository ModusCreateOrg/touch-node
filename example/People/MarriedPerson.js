/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 11/25/13
 * Time: 3:13 PM
 */
Ext.define('People.MarriedPerson', {
    extend : 'People.Person',
    mixins : [
        'People.Spouse'
    ]
});
