"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @prettier
 */
const react_1 = __importDefault(require("react"));
const BugReport_1 = __importDefault(require("@material-ui/icons/BugReport"));
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const Home_1 = __importDefault(require("@material-ui/icons/Home"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
const Tag_1 = __importDefault(require("../Tag"));
const file_size_1 = __importDefault(require("../../utils/file-size"));
const package_1 = require("../../utils/package");
const styles_1 = require("./styles");
const Package = ({ author: { name: authorName, avatar: authorAvatar }, bugs, description, dist, homepage, keywords = [], license, name: packageName, time, version, }) => {
    const renderVersionInfo = () => version && (react_1.default.createElement(styles_1.OverviewItem, null,
        react_1.default.createElement(styles_1.Icon, { name: 'version' }),
        `v${version}`));
    const renderAuthorInfo = () => authorName && (react_1.default.createElement(styles_1.Author, null,
        react_1.default.createElement(styles_1.Avatar, { alt: authorName, src: authorAvatar }),
        react_1.default.createElement(styles_1.Details, null,
            react_1.default.createElement(styles_1.Text, { text: authorName }))));
    const renderFileSize = () => dist &&
        dist.unpackedSize && (react_1.default.createElement(styles_1.OverviewItem, null,
        react_1.default.createElement(styles_1.Icon, { name: 'filebinary' }),
        file_size_1.default(dist.unpackedSize)));
    const renderLicenseInfo = () => license && (react_1.default.createElement(styles_1.OverviewItem, null,
        react_1.default.createElement(styles_1.Icon, { name: "law" }),
        license));
    const renderPublishedInfo = () => time && (react_1.default.createElement(styles_1.OverviewItem, null,
        react_1.default.createElement(styles_1.Icon, { name: "time" }),
        react_1.default.createElement(styles_1.Published, null, `Published on ${package_1.formatDate(time)} •`),
        `${package_1.formatDateDistance(time)} ago`));
    const renderHomePageLink = () => homepage && (react_1.default.createElement("a", { href: homepage, target: "_blank" },
        react_1.default.createElement(Tooltip_1.default, { "aria-label": "Homepage", title: "Visit homepage" },
            react_1.default.createElement(styles_1.IconButton, { "aria-label": "Homepage" },
                react_1.default.createElement(Home_1.default, null)))));
    const renderBugsLink = () => bugs &&
        bugs.url && (react_1.default.createElement("a", { href: bugs.url, target: "_blank" },
        react_1.default.createElement(Tooltip_1.default, { "aria-label": "Bugs", title: "Open an issue" },
            react_1.default.createElement(styles_1.IconButton, { "aria-label": "Bugs" },
                react_1.default.createElement(BugReport_1.default, null)))));
    const renderPrimaryComponent = () => {
        return (react_1.default.createElement(Grid_1.default, { container: true, item: true, xs: 12 },
            react_1.default.createElement(Grid_1.default, { item: true, xs: true },
                react_1.default.createElement(styles_1.WrapperLink, { to: `/-/web/detail/${packageName}` },
                    react_1.default.createElement(styles_1.PackageTitle, null, packageName))),
            react_1.default.createElement(styles_1.GridRightAligned, { item: true, xs: true },
                renderHomePageLink(),
                renderBugsLink())));
    };
    const renderSecondaryComponent = () => {
        //@ts-ignore
        const tags = keywords.sort().map((keyword, index) => react_1.default.createElement(Tag_1.default, { key: index }, keyword));
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(styles_1.Description, { component: 'span' }, description),
            tags.length > 0 && react_1.default.createElement(styles_1.TagContainer, null, tags)));
    };
    const renderPackageListItemText = () => (
    //@ts-ignore
    react_1.default.createElement(styles_1.PackageListItemText, { className: "package-link", component: "div", primary: renderPrimaryComponent(), secondary: renderSecondaryComponent() }));
    return (react_1.default.createElement(styles_1.PackageList, { className: 'package' },
        react_1.default.createElement(ListItem_1.default, { alignItems: 'flex-start' }, renderPackageListItemText()),
        react_1.default.createElement(styles_1.PackageListItem, { alignItems: 'flex-start' },
            renderAuthorInfo(),
            renderVersionInfo(),
            renderPublishedInfo(),
            renderFileSize(),
            renderLicenseInfo())));
};
exports.default = Package;
