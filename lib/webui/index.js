"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/__setPublicPath__");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_hot_loader_1 = require("react-hot-loader");
const app_1 = __importDefault(require("./app"));
const rootNode = document.getElementById('root');
const renderApp = (Component) => {
    react_dom_1.default.render(react_1.default.createElement(react_hot_loader_1.AppContainer, null,
        react_1.default.createElement(Component, null)), rootNode);
};
renderApp(app_1.default);
//@ts-ignore
if (module.hot) {
    //@ts-ignore
    module.hot.accept('./app', () => {
        renderApp(app_1.default);
    });
}
