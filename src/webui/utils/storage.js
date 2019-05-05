"use strict";
exports.__esModule = true;
var localstorage_memory_1 = require("localstorage-memory");
var storage;
try {
    localStorage.setItem('__TEST__', '');
    localStorage.removeItem('__TEST__');
    storage = localStorage;
}
catch (err) {
    storage = localstorage_memory_1["default"];
}
exports["default"] = storage;
