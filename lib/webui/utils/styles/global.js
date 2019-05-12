"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_1 = require("emotion");
const sizes_1 = require("./sizes");
exports.default = emotion_1.injectGlobal `
    html,
    body {
        height: 100%;
    }

    body {
        font-size: ${sizes_1.fontSize.base};
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    strong {
        font-weight: ${sizes_1.fontWeight.semiBold};
    }
`;
