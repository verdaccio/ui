"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const react_router_dom_1 = require("react-router-dom");
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const List_1 = __importDefault(require("@material-ui/core/List"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const media_1 = require("../../utils/styles/media");
const Icon_1 = __importDefault(require("../Icon"));
const Label_1 = __importDefault(require("../Label"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
exports.OverviewItem = react_emotion_1.default('span') `
  && {
    display: flex;
    align-items: center;
    margin: 0 0 0 16px;
    color: ${colors_1.default.greyLight2};
    font-size: 12px;
    @media (max-width: ${media_1.breakpoints.medium}px) {
      &:nth-child(3) {
        display: none;
      }
    }
    @media (max-width: ${media_1.breakpoints.small}px) {
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;
exports.Icon = react_emotion_1.default(Icon_1.default) `
  && {
    margin: 2px 10px 0px 0;
    fill: ${colors_1.default.greyLight2};
  }
`;
exports.Published = react_emotion_1.default('span') `
  && {
    color: ${colors_1.default.greyLight2};
    margin: 0px 5px 0px 0px;
  }
`;
// @ts-ignore
exports.Text = react_emotion_1.default(Label_1.default) `
  && {
    font-size: 12px;
    font-weight: 500;
    color: ${colors_1.default.greyLight2};
  }
`;
exports.Details = react_emotion_1.default('span') `
  && {
    margin-left: 5px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
  }
`;
exports.Author = react_emotion_1.default('div') `
  && {
    display: flex;
    align-items: center;
  }
`;
exports.Avatar = react_emotion_1.default(Avatar_1.default) `
  && {
    width: 20px;
    height: 20px;
  }
`;
exports.WrapperLink = react_emotion_1.default(react_router_dom_1.Link) `
  && {
    text-decoration: none;
  }
`;
exports.PackageTitle = react_emotion_1.default('span') `
  && {
    font-weight: 600;
    font-size: 20px;
    display: block;
    margin-bottom: 12px;
    color: ${colors_1.default.eclipse};
    cursor: pointer;

    &:hover {
      color: ${colors_1.default.black};
    }

    @media (max-width: ${media_1.breakpoints.small}px) {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
`;
exports.GridRightAligned = react_emotion_1.default(Grid_1.default) `
  && {
    text-align: right;
  }
`;
exports.PackageList = react_emotion_1.default(List_1.default) `
  && {
    padding: 12px 0 12px 0;

    &:hover {
      background-color: ${colors_1.default.greyLight3};
    }
  }
`;
exports.IconButton = react_emotion_1.default(IconButton_1.default) `
  && {
    padding: 6px;

    svg {
      font-size: 16px;
    }
  }
`;
exports.TagContainer = react_emotion_1.default('span') `
  && {
    margin-top: 8px;
    margin-bottom: 12px;
    display: block;
    @media (max-width: ${media_1.breakpoints.medium}px) {
      display: none;
    }
  }
`;
exports.PackageListItem = react_emotion_1.default(ListItem_1.default) `
  && {
    padding-top: 0;
  }
`;
exports.PackageListItemText = react_emotion_1.default(ListItemText_1.default) `
  && {
    padding-right: 0;
  }
`;
exports.Description = react_emotion_1.default(Typography_1.default) `
  color: ${colors_1.default.greyDark2};
  font-size: 14px;
  padding-right: 0;
`;
