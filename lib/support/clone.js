var unicodePrefix = require("./../internal/unicodePrefix");
var hasOwn = require("./../support/hasOwn");
var isArray = Array.isArray;
var isObject = require("./../support/isObject");

module.exports = function clone(value) {
    var dest = value;
    if (isObject(dest)) {
        dest = isArray(value) ? [] : {};
        var src = value;
        for (var key in src) {
            if (key.charAt(0) === unicodePrefix || !hasOwn(src, key)) {
                continue;
            }
            dest[key] = src[key];
        }
    }
    return dest;
};
