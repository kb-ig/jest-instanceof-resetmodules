const SomeClass = require("./SomeClass");

function isSomeClass(thing) {
    return thing instanceof SomeClass;
}

module.exports = {
    isSomeClass
}