"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function asyncComponent(getComponent) {
    var _a;
    return _a = class AsyncComponent extends react_1.default.Component {
            constructor() {
                super(...arguments);
                this.state = { Component: AsyncComponent.Component };
            }
            componentDidMount() {
                const { Component } = this.state;
                if (!Component) {
                    getComponent()
                        .then(({ default: Component }) => {
                        AsyncComponent.Component = Component;
                        /* eslint react/no-did-mount-set-state:0 */
                        this.setState({ Component });
                    })
                        .catch(err => {
                        console.error(err);
                    });
                }
            }
            render() {
                const { Component } = this.state;
                if (Component) {
                    // eslint-disable-next-line verdaccio/jsx-spread
                    // @ts-ignore
                    return react_1.default.createElement(Component, Object.assign({}, this.props));
                }
                return null;
            }
        },
        _a.Component = null,
        _a;
}
exports.asyncComponent = asyncComponent;
