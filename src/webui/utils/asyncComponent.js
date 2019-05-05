"use strict";
/**
 * @prettier
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
function asyncComponent(getComponent) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(AsyncComponent, _super);
            function AsyncComponent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = { Component: AsyncComponent.Component };
                return _this;
            }
            AsyncComponent.prototype.componentDidMount = function () {
                var _this = this;
                var Component = this.state.Component;
                if (!Component) {
                    getComponent()
                        .then(function (_a) {
                        var Component = _a["default"];
                        AsyncComponent.Component = Component;
                        /* eslint react/no-did-mount-set-state:0 */
                        _this.setState({ Component: Component });
                    })["catch"](function (err) {
                        console.error(err);
                    });
                }
            };
            AsyncComponent.prototype.render = function () {
                var Component = this.state.Component;
                if (Component) {
                    // eslint-disable-next-line verdaccio/jsx-spread
                    // @ts-ignore
                    return <Component {...this.props}/>;
                }
                return null;
            };
            return AsyncComponent;
        }(react_1["default"].Component)),
        _a.Component = null,
        _a;
}
exports.asyncComponent = asyncComponent;
