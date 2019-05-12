"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
const DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const styles_1 = require("./styles");
const RegistryInfoDialog = ({ open = false, children, onClose }) => (react_1.default.createElement(Dialog_1.default, { id: "registryInfo--dialog-container", onClose: onClose, open: open },
    react_1.default.createElement(styles_1.Title, { disableTypography: true }, "Register Info"),
    react_1.default.createElement(styles_1.Content, null, children),
    react_1.default.createElement(DialogActions_1.default, null,
        react_1.default.createElement(Button_1.default, { color: "inherit", id: "registryInfo--dialog-close", onClick: onClose }, "CLOSE"))));
exports.default = RegistryInfoDialog;
