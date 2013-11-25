/**
 * Example Module Usage
 * User: stan229
 * Date: 11/25/13
 * Time: 3:05 PM
 */
var Ext = require('../index.js');

Ext.Loader.setPath('People', './example/People');
Ext.Loader.require('People.*');

var child = Ext.create('People.Child', {
    name : 'Bobby Tables',
    age  : 2
});

console.log(child.getInfo());

var marriedPerson = Ext.create('People.MarriedPerson', {
    name : 'John Smith',
    age  : 30
});

marriedPerson.speakCommand('Hello World!');