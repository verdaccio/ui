"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PackageList_1 = __importDefault(require("../../components/PackageList"));
const Home = ({ packages }) => (react_1.default.createElement("div", { className: 'container content' },
    react_1.default.createElement(PackageList_1.default, { packages: packages })));
exports.default = Home;
