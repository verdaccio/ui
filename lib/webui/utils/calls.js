"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
/**
 * @prettier
 */
async function callDetailPage(packageName) {
    const readMe = await api_1.default.request(`package/readme/${packageName}`, 'GET');
    const packageMeta = await api_1.default.request(`sidebar/${packageName}`, 'GET');
    return { readMe, packageMeta };
}
exports.callDetailPage = callDetailPage;
