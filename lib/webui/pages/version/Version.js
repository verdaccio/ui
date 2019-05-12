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
const index_1 = __importDefault(require("@material-ui/core/Grid/index"));
const Loading_1 = __importDefault(require("../../components/Loading/Loading"));
const DetailContainer_1 = __importDefault(require("../../components/DetailContainer/DetailContainer"));
const DetailSidebar_1 = __importDefault(require("../../components/DetailSidebar/DetailSidebar"));
const calls_1 = require("../../utils/calls");
const package_1 = require("../../utils/package");
const NotFound_1 = __importDefault(require("../../components/NotFound"));
exports.DetailContext = react_1.default.createContext(null);
exports.DetailContextProvider = exports.DetailContext.Provider;
exports.DetailContextConsumer = exports.DetailContext.Consumer;
class VersionPage extends react_1.Component {
    constructor(props) {
        super(props);
        this.enableLoading = () => {
            this.setState({
                isLoading: true,
            });
        };
        this.state = {
            readMe: '',
            packageName: package_1.getRouterPackageName(props.match),
            packageMeta: null,
            isLoading: true,
            notFound: false,
        };
    }
    async componentDidMount() {
        await this.loadPackageInfo();
    }
    /* eslint no-unused-vars: 0 */
    async componentDidUpdate(nextProps, prevState) {
        const { packageName } = this.state;
        if (packageName !== prevState.packageName) {
            const { readMe, packageMeta } = await calls_1.callDetailPage(packageName);
            this.setState({
                readMe,
                packageMeta,
                packageName,
                notFound: false,
                isLoading: false,
            });
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { match } = nextProps;
        const packageName = package_1.getRouterPackageName(match);
        if (packageName !== prevState.packageName) {
            try {
                return {
                    packageName,
                    isLoading: false,
                };
            }
            catch (err) {
                return {
                    notFound: true,
                    isLoading: false,
                };
            }
        }
        else {
            return null;
        }
    }
    async loadPackageInfo() {
        const { packageName } = this.state;
        // FIXME: use utility
        document.title = `Verdaccio - ${packageName}`;
        this.setState({
            readMe: '',
        });
        try {
            const { readMe, packageMeta } = await calls_1.callDetailPage(packageName);
            this.setState({
                readMe,
                packageMeta,
                packageName,
                notFound: false,
                isLoading: false,
            });
        }
        catch (err) {
            this.setState({
                notFound: true,
                packageName,
                isLoading: false,
            });
        }
    }
    render() {
        const { isLoading, packageMeta, readMe, packageName } = this.state;
        if (isLoading) {
            return react_1.default.createElement(Loading_1.default, null);
        }
        else if (!packageMeta) {
            return react_1.default.createElement(NotFound_1.default, null);
        }
        else {
            return (react_1.default.createElement(exports.DetailContextProvider, { value: { packageMeta, readMe, packageName, enableLoading: this.enableLoading } },
                react_1.default.createElement(index_1.default, { className: 'container content', container: true, spacing: 0 },
                    react_1.default.createElement(index_1.default, { item: true, xs: 8 }, this.renderDetail()),
                    react_1.default.createElement(index_1.default, { item: true, xs: 4 }, this.renderSidebar()))));
        }
    }
    renderDetail() {
        return react_1.default.createElement(DetailContainer_1.default, null);
    }
    renderSidebar() {
        return react_1.default.createElement(DetailSidebar_1.default, null);
    }
}
exports.default = VersionPage;
