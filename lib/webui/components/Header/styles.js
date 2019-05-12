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
const react_emotion_1 = __importStar(require("react-emotion"));
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
const media_1 = __importDefault(require("../../utils/styles/media"));
exports.InnerNavBar = react_emotion_1.default(Toolbar_1.default) `
  && {
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
`;
exports.Greetings = react_emotion_1.default('span') `
  && {
    margin: 0 5px 0 0;
  }
`;
exports.RightSide = react_emotion_1.default(Toolbar_1.default) `
  && {
    display: flex;
    padding: 0;
  }
`;
exports.LeftSide = react_emotion_1.default(exports.RightSide) `
  && {
    flex: 1;
  }
`;
exports.MobileNavBar = react_emotion_1.default('div') `
  && {
    align-items: center;
    display: flex;
    border-bottom: 1px solid ${colors_1.default.greyLight};
    padding: 8px;
    position: relative;
  }
`;
exports.InnerMobileNavBar = react_emotion_1.default('div') `
  && {
    border-radius: 4px;
    background-color: ${colors_1.default.greyLight};
    color: ${colors_1.default.white};
    width: 100%;
    padding: 0px 5px;
    margin: 0 10px 0 0;
  }
`;
exports.IconSearchButton = react_emotion_1.default(IconButton_1.default) `
  && {
    display: block;
  }
`;
exports.SearchWrapper = react_emotion_1.default('div') `
  && {
    display: none;
    max-width: 393px;
    width: 100%;
  }
`;
exports.NavBar = react_emotion_1.default(AppBar_1.default) `
  && {
    background-color: ${colors_1.default.primary};
    min-height: 60px;
    display: flex;
    justify-content: center;
    ${() => {
    // @ts-ignore
    return media_1.default.medium(react_emotion_1.css `
        ${exports.SearchWrapper} {
          display: flex;
        }
        ${exports.IconSearchButton} {
          display: none;
        }
        ${exports.MobileNavBar} {
          display: none;
        }
      `);
}};
    ${() => {
    // @ts-ignore
    return media_1.default.large(react_emotion_1.css `
        ${exports.InnerNavBar} {
          padding: 0 20px;
        }
      `);
}};
    ${() => {
    // @ts-ignore
    return media_1.default.xlarge(react_emotion_1.css `
        ${exports.InnerNavBar} {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
        }
      `);
}};
  }
`;
