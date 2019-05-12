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
const Search_1 = __importDefault(require("@material-ui/icons/Search"));
const InputAdornment_1 = __importDefault(require("@material-ui/core/InputAdornment"));
const debounce_1 = __importDefault(require("lodash/debounce"));
const api_1 = __importDefault(require("../../utils/api"));
const AutoComplete_1 = __importDefault(require("../AutoComplete"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
const CONSTANTS = {
    API_DELAY: 300,
    PLACEHOLDER_TEXT: 'Search Packages',
    ABORT_ERROR: 'AbortError',
};
class Search extends react_1.Component {
    constructor(props) {
        super(props);
        /**
         * Cancel all the requests which are in pending state.
         */
        this.cancelAllSearchRequests = () => {
            this.requestList.forEach(request => request.abort());
            this.requestList = [];
        };
        /**
         * Cancel all the request from list and make request list empty.
         */
        this.handlePackagesClearRequested = () => {
            this.setState({
                suggestions: [],
            });
        };
        /**
         * onChange method for the input element.
         */
        this.handleSearch = (event, { newValue, method }) => {
            // stops event bubbling
            event.stopPropagation();
            if (method === 'type') {
                const value = newValue.trim();
                this.setState({
                    search: value,
                    loading: true,
                    loaded: false,
                    error: false,
                }, () => {
                    /**
                     * A use case where User keeps adding and removing value in input field,
                     * so we cancel all the existing requests when input is empty.
                     */
                    if (value.length === 0) {
                        this.cancelAllSearchRequests();
                    }
                });
            }
        };
        /**
         * When an user select any package by clicking or pressing return key.
         */
        this.handleClickSearch = (event, { suggestionValue, method }) => {
            const { history } = this.props;
            // stops event bubbling
            event.stopPropagation();
            switch (method) {
                case 'click':
                case 'enter':
                    this.setState({ search: '' });
                    history.push(`/-/web/detail/${suggestionValue}`);
                    break;
            }
        };
        /**
         * Fetch packages from API.
         * For AbortController see: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
         */
        this.handleFetchPackages = async ({ value }) => {
            try {
                // @ts-ignore
                const controller = new window.AbortController();
                const signal = controller.signal;
                // Keep track of search requests.
                this.requestList.push(controller);
                const suggestions = await api_1.default.request(`search/${encodeURIComponent(value)}`, 'GET', { signal });
                // @ts-ignore
                this.setState({
                    suggestions,
                    loaded: true,
                });
            }
            catch (error) {
                /**
                 * AbortError is not the API error.
                 * It means browser has cancelled the API request.
                 */
                if (error.name === CONSTANTS.ABORT_ERROR) {
                    this.setState({ error: false, loaded: false });
                }
                else {
                    this.setState({ error: true, loaded: false });
                }
            }
            finally {
                this.setState({ loading: false });
            }
        };
        /**
         * As user focuses out from input, we cancel all the request from requestList
         * and set the API state parameters to default boolean values.
         */
        this.onBlur = event => {
            // stops event bubbling
            event.stopPropagation();
            this.setState({
                loaded: false,
                loading: false,
                error: false,
            }, () => this.cancelAllSearchRequests());
        };
        this.state = {
            search: '',
            suggestions: [],
            // loading: A boolean value to indicate that request is in pending state.
            loading: false,
            // loaded: A boolean value to indicate that result has been loaded.
            loaded: false,
            // error: A boolean value to indicate API error.
            error: false,
        };
        this.requestList = [];
        this.handleFetchPackages = debounce_1.default(this.handleFetchPackages, CONSTANTS.API_DELAY);
    }
    render() {
        const { suggestions, search, loaded, loading, error } = this.state;
        return (react_1.default.createElement(AutoComplete_1.default, { color: colors_1.default.white, onBlur: this.onBlur, onChange: this.handleSearch, onCleanSuggestions: this.handlePackagesClearRequested, onClick: this.handleClickSearch, onSuggestionsFetch: this.handleFetchPackages, placeholder: CONSTANTS.PLACEHOLDER_TEXT, startAdornment: react_1.default.createElement(InputAdornment_1.default, { position: "start", style: { color: colors_1.default.white } },
                react_1.default.createElement(Search_1.default, null)), suggestions: suggestions, suggestionsError: error, suggestionsLoaded: loaded, suggestionsLoading: loading, value: search }));
    }
}
exports.Search = Search;
exports.default = react_router_dom_1.withRouter(Search);
