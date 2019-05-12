"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_1 = require("emotion");
exports.breakpoints = {
    small: 576,
    medium: 768,
    large: 1024,
    xlarge: 1275,
};
const mq = Object.keys(exports.breakpoints).reduce((accumulator, label) => {
    const prefix = typeof exports.breakpoints[label] === 'string'
        ? ''
        : 'min-width:';
    const suffix = typeof exports.breakpoints[label] === 'string' ? '' : 'px';
    accumulator[label] = cls => emotion_1.css `
        @media (${prefix + exports.breakpoints[label] + suffix}) {
          ${cls};
        }
      `;
    return accumulator;
}, {});
exports.default = mq;
