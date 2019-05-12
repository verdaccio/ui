"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const localstorage_memory_1 = __importDefault(require("localstorage-memory"));
let storage;
try {
    localStorage.setItem('__TEST__', '');
    localStorage.removeItem('__TEST__');
    storage = localStorage;
}
catch (err) {
    storage = localstorage_memory_1.default;
}
exports.default = storage;
