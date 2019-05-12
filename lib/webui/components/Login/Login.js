"use strict";
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
const prop_types_1 = __importDefault(require("prop-types"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
const Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
const DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
const DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
const SnackbarContent_1 = __importDefault(require("@material-ui/core/SnackbarContent"));
const Error_1 = __importDefault(require("@material-ui/icons/Error"));
const InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
const Input_1 = __importDefault(require("@material-ui/core/Input"));
const FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
const FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
// @ts-ignore
const login_scss_1 = __importDefault(require("./login.scss"));
class LoginModal extends react_1.Component {
    constructor(props) {
        super(props);
        /**
         * set login modal's username and password to current state
         * Required to login
         */
        this.setCredentials = (name, e) => {
            const { form } = this.state;
            this.setState({
                form: {
                    ...form,
                    [name]: {
                        ...form[name],
                        value: e.target.value,
                        pristine: false,
                    },
                },
            });
        };
        this.setUsername = (event) => {
            this.setCredentials('username', event);
        };
        this.setPassword = (event) => {
            this.setCredentials('password', event);
        };
        this.validateCredentials = (event) => {
            const { form } = this.state;
            // prevents default submit behavior
            event.preventDefault();
            this.setState({
                form: Object.keys(form).reduce((acc, key) => ({
                    ...acc,
                    ...{ [key]: { ...form[key], pristine: false } },
                }), {}),
            }, () => {
                if (!Object.keys(form).some(id => !form[id])) {
                    this.submitCredentials();
                }
            });
        };
        this.submitCredentials = async () => {
            const { form } = this.state;
            const { onSubmit } = this.props;
            await onSubmit(form.username.value, form.password.value);
            // let's wait for API response and then set
            // username and password filed to empty state
            this.setState({
                form: Object.keys(form).reduce((acc, key) => ({
                    ...acc,
                    ...{ [key]: { ...form[key], value: "", pristine: true } },
                }), {}),
            });
        };
        this.renderNameField = () => {
            const { form: { username } } = this.state;
            return (react_1.default.createElement(FormControl_1.default, { error: !username.value && !username.pristine, fullWidth: true, required: username.required },
                react_1.default.createElement(InputLabel_1.default, { htmlFor: "username" }, 'Username'),
                react_1.default.createElement(Input_1.default, { id: "login--form-username", onChange: this.setUsername, placeholder: "Your username", value: username.value }),
                !username.value && !username.pristine && (react_1.default.createElement(FormHelperText_1.default, { id: "username-error" }, username.helperText))));
        };
        this.renderPasswordField = () => {
            const { form: { password } } = this.state;
            return (react_1.default.createElement(FormControl_1.default, { error: !password.value && !password.pristine, fullWidth: true, required: password.required, style: { marginTop: '8px' } },
                react_1.default.createElement(InputLabel_1.default, { htmlFor: "password" }, 'Password'),
                react_1.default.createElement(Input_1.default, { id: "login--form-password", onChange: this.setPassword, placeholder: "Your strong password", type: "password", value: password.value }),
                !password.value && !password.pristine && (react_1.default.createElement(FormHelperText_1.default, { id: "password-error" }, password.helperText))));
        };
        this.renderActions = () => {
            const { form: { username, password } } = this.state;
            const { onCancel } = this.props;
            return (react_1.default.createElement(DialogActions_1.default, { className: "dialog-footer" },
                react_1.default.createElement(Button_1.default, { color: "inherit", id: "login--form-cancel", onClick: onCancel, type: "button" }, 'Cancel'),
                react_1.default.createElement(Button_1.default, { color: "inherit", disabled: !password.value || !username.value, id: "login--form-submit", type: "submit" }, 'Login')));
        };
        this.state = {
            form: {
                username: {
                    required: true,
                    pristine: true,
                    helperText: 'Field required',
                    value: '',
                },
                password: {
                    required: true,
                    pristine: true,
                    helperText: 'Field required',
                    value: '',
                },
            },
            error: props.error,
        };
    }
    renderErrorMessage(title, description) {
        return (react_1.default.createElement("span", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("strong", null, title)),
            react_1.default.createElement("div", null, description)));
    }
    renderMessage(title, description) {
        return (react_1.default.createElement("div", { className: login_scss_1.default.loginErrorMsg, id: "client-snackbar" },
            react_1.default.createElement(Error_1.default, { className: login_scss_1.default.loginIcon }),
            this.renderErrorMessage(title, description)));
    }
    renderLoginError({ type, title, description }) {
        return type === 'error' && (react_1.default.createElement(SnackbarContent_1.default, { className: login_scss_1.default.loginError, message: this.renderMessage(title, description) }));
    }
    render() {
        const { visibility, onCancel, error } = this.props;
        return (react_1.default.createElement(Dialog_1.default, { fullWidth: true, id: "login--form-container", maxWidth: "xs", onClose: onCancel, open: visibility },
            react_1.default.createElement("form", { noValidate: true, onSubmit: this.validateCredentials },
                react_1.default.createElement(DialogTitle_1.default, null, 'Login'),
                react_1.default.createElement(DialogContent_1.default, null,
                    this.renderLoginError(error),
                    this.renderNameField(),
                    this.renderPasswordField()),
                this.renderActions())));
    }
}
LoginModal.propTypes = {
    visibility: prop_types_1.default.bool,
    error: prop_types_1.default.object,
    onCancel: prop_types_1.default.func,
    onSubmit: prop_types_1.default.func,
};
LoginModal.defaultProps = {
    error: {},
    onCancel: () => { },
    onSubmit: () => { },
    visibility: true,
};
exports.default = LoginModal;
