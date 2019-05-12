"use strict";
/**
 * @prettier
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CSS to represent truncated text with an ellipsis.
 */
function ellipsis(width) {
    return {
        display: 'inline-block',
        maxWidth: width,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
    };
}
exports.ellipsis = ellipsis;
const positionMap = ['Top', 'Right', 'Bottom', 'Left'];
function spacing(property, ...values) {
    const [firstValue = 0, secondValue = 0, thirdValue = 0, fourthValue = 0] = values;
    const valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
    let styles = {};
    for (let i = 0; i < valuesWithDefaults.length; i += 1) {
        if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
            styles = {
                ...styles,
                [`${property}${positionMap[i]}`]: valuesWithDefaults[i],
            };
        }
    }
    return styles;
}
exports.spacing = spacing;
