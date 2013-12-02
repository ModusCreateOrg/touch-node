---
layout: post
title:  Touch Node
date:   2013-12-02
---

Touch Node is a port of the entire Sencha Touch Class System, utilities as well as DOM-Free classes. These classes include:

- Data connection (Ajax, JSONP, Ext.Direct)
- Model, Store and Proxies
- Utility classes for Array, String, Date, etc...
- Loader
- Logger
- **and more**

## Version
This was built off Sencha Touch 2.3.1

## Installation
{% highlight javascript %}
npm install touch-node
{% endhighlight %}

## Usage

{% highlight javascript %}
var Ext = require('touch-node');
{% endhighlight %}

If you want to use the uncompressed (dev) version of the library you can require the `dev` submodule

{% highlight javascript %}
var Ext = require('touch-node/dev');
{% endhighlight %}

## Examples
To see the module in action take a look at the [example](https://github.com/ModusCreateOrg/touch-node/tree/master/example) directory where we show how to leverage create classes, mixins for those classes and require them with `Ext.Loader`.

## Documentation
For more information on the Sencha Touch class system and examples, please refer to the library documentation page here:

[Sencha Touch Documentation](docs.sencha.com/touch/2.3.1/)

## License
Sencha Touch is licensed under GPLv3. For more see the here:
[license.txt](../master/license.txt)