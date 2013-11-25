var emptyFn = function () {
};

global.document = {
    head                 : '<head></head>',
    getElementsByTagName : function () {
        return [
            {
                src : ''
            }
        ];
    },
    getElementById       : emptyFn
};

global.location = {
};

module.exports = require('./lib/sencha-touch-stripped');