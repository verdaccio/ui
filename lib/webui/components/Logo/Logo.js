"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @prettier
 */
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/styles");
const logo_svg_1 = __importDefault(require("./img/logo.svg"));
const sizing = {
    md: 90,
    sm: 40,
};
const useStyles = styles_1.makeStyles({
    logo: ({ size }) => ({
        display: 'inline-block',
        width: sizing[size],
        height: sizing[size]
    }),
});
const Logo = ({ size }) => {
    const classes = useStyles({ size });
    return react_1.default.createElement("img", { src: logo_svg_1.default, alt: "Verdaccio", className: classes.logo });
};
Logo.defaultProps = {
    size: 'sm',
};
exports.default = Logo;
