"use strict";
/**
 * @prettier
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipBoardUtility = (str) => (event) => {
    event.preventDefault();
    const node = document.createElement('div');
    node.innerText = str;
    if (document.body) {
        document.body.appendChild(node);
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        document.body.removeChild(node);
    }
};
function getCLISetConfigRegistry(command, scope, registryUrl) {
    return `${command} ${scope}registry ${registryUrl}`;
}
exports.getCLISetConfigRegistry = getCLISetConfigRegistry;
function getCLISetRegistry(command, registryUrl) {
    return `${command} --registry ${registryUrl}`;
}
exports.getCLISetRegistry = getCLISetRegistry;
function getCLIChangePassword(command, registryUrl) {
    return `${command} profile set password --registry ${registryUrl}`;
}
exports.getCLIChangePassword = getCLIChangePassword;
