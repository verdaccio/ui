"use strict";
/**
 * @prettier
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
const Version_1 = require("../../pages/version/Version");
const styles_1 = require("./styles");
const NoItems_1 = __importDefault(require("../NoItems"));
class DepDetail extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = () => {
            const { name } = this.state;
            const { onLoading, history } = this.props;
            onLoading();
            history.push(`/-/web/detail/${name}`);
        };
        const { name, version } = this.props;
        this.state = {
            name,
            version,
        };
    }
    render() {
        const { name, version } = this.state;
        const tagText = `${name}@${version}`;
        return react_1.default.createElement(styles_1.Tag, { className: 'dep-tag', clickable: true, component: 'div', label: tagText, onClick: this.handleOnClick });
    }
}
const WrapperDependencyDetail = react_router_dom_1.withRouter(DepDetail);
class DependencyBlock extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderTags = (deps, enableLoading) => deps.map(dep => {
            const [name, version] = dep;
            return react_1.default.createElement(WrapperDependencyDetail, { key: name, name: name, onLoading: enableLoading, version: version });
        });
    }
    render() {
        const { dependencies, title } = this.props;
        const deps = Object.entries(dependencies);
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, ({ enableLoading }) => {
            return (react_1.default.createElement(styles_1.CardWrap, null,
                react_1.default.createElement(CardContent_1.default, null,
                    react_1.default.createElement(styles_1.Heading, { variant: "subheading" }, `${title} (${deps.length})`),
                    react_1.default.createElement(styles_1.Tags, null, this.renderTags(deps, enableLoading)))));
        }));
    }
}
class Dependencies extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tabPosition: 0,
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, packageMeta => {
            return this.renderDependencies(packageMeta);
        }));
    }
    checkDependencyLength(dependency = {}) {
        return Object.keys(dependency).length > 0;
    }
    renderDependencies({ packageMeta }) {
        const { latest } = packageMeta;
        const { dependencies, devDependencies, peerDependencies, name } = latest;
        const dependencyMap = { dependencies, devDependencies, peerDependencies };
        const dependencyList = Object.keys(dependencyMap).reduce((result, value, key) => {
            const selectedDepndency = dependencyMap[value];
            if (selectedDepndency && this.checkDependencyLength(selectedDepndency)) {
                // @ts-ignore
                result.push(react_1.default.createElement(DependencyBlock, { className: "dependency-block", dependencies: selectedDepndency, key: key, title: value }));
            }
            return result;
        }, []);
        if (dependencyList.length) {
            return react_1.default.createElement(react_1.Fragment, null, dependencyList);
        }
        return react_1.default.createElement(NoItems_1.default, { className: "no-dependencies", text: `${name} has no dependencies.` });
    }
}
exports.default = Dependencies;
