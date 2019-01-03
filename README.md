![No longer maintained](https://img.shields.io/badge/Maintenance-OFF-red.svg)
### [DEPRECATED] This repository is no longer maintained
> While this project is fully functional, the dependencies are no longer up to date. You are still welcome to explore, learn, and use the code provided here.
>
> Modus is dedicated to supporting the community with innovative ideas, best-practice patterns, and inspiring open source solutions. Check out the latest [Modus Labs](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated) projects.

[![Modus Labs](https://res.cloudinary.com/modus-labs/image/upload/h_80/v1531492623/labs/logo-black.png)](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated)

---
<img src="http://moduscreate.com/wp-content/uploads/2013/11/touchnodelogo.png" height="300" alt="Touch Node Logo">
Touch Node
=========

Touch Node is a port of the entire Sencha Touch Class System, utilities as well as DOM-Free classes. These classes include:

  - Data connection (Ajax, JSONP, Ext.Direct)
  - Model, Store and Proxies
  - Utility classes for Array, String, Date, etc... 
  - Loader
  - Logger
  - and more


Version
----

This was built off Sencha Touch 2.3.1


Installation
--------------

```
npm install touch-node
```


Usage
-----

```
var Ext = require('touch-node');
```


If you want to use the uncompressed (dev) version of the library you can require the `dev` submodule


```
var Ext = require('touch-node/dev');
```

Examples
--------

To see the module in action take a look at the [example](../master/example) directory where we show how to leverage create classes, mixins for those classes and require them with `Ext.Loader`.

Documentation
-------------

For more information on the Sencha Touch class system and examples, please refer to the library documentation page here:

[Sencha Touch Documentation](docs.sencha.com/touch/2.3.1/)


License
----
Sencha Touch is licensed under GPLv3. For more see the here:
[license.txt](../master/license.txt)
