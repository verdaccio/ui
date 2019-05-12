"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_autosuggest_1 = __importDefault(require("react-autosuggest"));
const match_1 = __importDefault(require("autosuggest-highlight/match"));
const parse_1 = __importDefault(require("autosuggest-highlight/parse"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const sizes_1 = require("../../utils/styles/sizes");
const styles_1 = require("./styles");
const renderInputComponent = inputProps => {
    const { ref, startAdornment, disableUnderline, onKeyDown, ...others } = inputProps;
    return (react_1.default.createElement(styles_1.InputField, Object.assign({ InputProps: {
            inputRef: node => {
                ref(node);
            },
            startAdornment,
            disableUnderline,
            onKeyDown,
        }, fullWidth: true }, others)));
};
const getSuggestionValue = (suggestion) => suggestion.name;
const renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match_1.default(suggestion.name, query);
    const parts = parse_1.default(suggestion.name, matches);
    return (react_1.default.createElement(MenuItem_1.default, { component: "div", selected: isHighlighted },
        react_1.default.createElement("div", null, parts.map((part, index) => {
            return part.highlight ? (react_1.default.createElement("a", { href: suggestion.link, key: String(index), style: { fontWeight: sizes_1.fontWeight.semiBold } }, part.text)) : (react_1.default.createElement("a", { href: suggestion.link, key: String(index), style: { fontWeight: sizes_1.fontWeight.light } }, part.text));
        }))));
};
const renderMessage = message => {
    return (react_1.default.createElement(MenuItem_1.default, { component: "div", selected: false },
        react_1.default.createElement("div", null, message)));
};
const SUGGESTIONS_RESPONSE = {
    LOADING: 'Loading...',
    FAILURE: 'Something went wrong.',
    NO_RESULT: 'No results found.',
};
const AutoComplete = ({ suggestions, startAdornment, onChange, onSuggestionsFetch, onCleanSuggestions, value = '', placeholder = '', disableUnderline = false, color, onClick, onKeyDown, onBlur, suggestionsLoading = false, suggestionsLoaded = false, suggestionsError = false, }) => {
    const autosuggestProps = {
        renderInputComponent,
        suggestions,
        getSuggestionValue,
        renderSuggestion,
        onSuggestionsFetchRequested: onSuggestionsFetch,
        onSuggestionsClearRequested: onCleanSuggestions,
    };
    const inputProps = {
        value,
        onChange,
        placeholder,
        startAdornment,
        disableUnderline,
        color,
        onKeyDown,
        onBlur,
    };
    // this format avoid arrow function eslint rule
    function renderSuggestionsContainer({ containerProps, children, query }) {
        return (react_1.default.createElement(styles_1.SuggestionContainer, Object.assign({}, containerProps, { square: true }),
            suggestionsLoaded && children === null && query && renderMessage(SUGGESTIONS_RESPONSE.NO_RESULT),
            suggestionsLoading && query && renderMessage(SUGGESTIONS_RESPONSE.LOADING),
            suggestionsError && renderMessage(SUGGESTIONS_RESPONSE.FAILURE),
            children));
    }
    return (react_1.default.createElement(styles_1.Wrapper, null,
        react_1.default.createElement(react_autosuggest_1.default, Object.assign({}, autosuggestProps, { inputProps: inputProps, onSuggestionSelected: onClick, renderSuggestionsContainer: renderSuggestionsContainer }))));
};
exports.default = AutoComplete;
