/*! For license information please see Versions.58458d60b5f3fe245374.js.LICENSE.txt */
"use strict";(self.webpackChunk_verdaccio_ui_theme=self.webpackChunk_verdaccio_ui_theme||[]).push([["Versions"],{"./lib/constants.ts":(e,t,o)=>{var a;o.r(t),o.d(t,{DIST_TAGS:()=>n,HEADERS:()=>i,API_ERROR:()=>l}),e=o.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,s,n="dist-tags",i={JSON:"application/json"},l={BAD_USERNAME_PASSWORD:"bad username/password, access denied"};(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(n,"DIST_TAGS","/home/jpicado/projects/@verdaccio/ui/ui-theme/lib/constants.ts"),r.register(i,"HEADERS","/home/jpicado/projects/@verdaccio/ui/ui-theme/lib/constants.ts"),r.register(l,"API_ERROR","/home/jpicado/projects/@verdaccio/ui/ui-theme/lib/constants.ts")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},"./src/pages/Version/DetailContainer/Versions/Versions.tsx":(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var a,r=o("../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),s=o("../node_modules/.pnpm/react-i18next@11.15.3_ad209b3ec0793904285d43906e66750b/node_modules/react-i18next/dist/es/useTranslation.js"),n=o("./lib/constants.ts"),i=o("./src/pages/Version/context.ts"),l=o("./src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx"),d=o("./src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx"),c=o("./src/pages/Version/DetailContainer/Versions/styles.ts");e=o.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(){var e=(0,r.useContext)(i.DetailContext),t=(0,s.useTranslation)().t,o=e.packageMeta,a=e.packageName;if(!o)return null;var u=o.versions,m=void 0===u?{}:u,p=o.time,f=void 0===p?{}:p,v=o[n.DIST_TAGS],g=void 0===v?{}:v;return r.createElement(r.Fragment,null,g&&Object.keys(g).length>0&&r.createElement(r.Fragment,null,r.createElement(c.StyledText,{variant:"subtitle1"},t("versions.current-tags")),r.createElement(d.default,{tags:g})),m&&Object.keys(m).length>0&&a&&r.createElement(r.Fragment,null,r.createElement(c.StyledText,{variant:"subtitle1"},t("versions.version-history")),r.createElement(l.default,{packageName:a,time:f,versions:m})))};u(m,"useContext{detailContext}\nuseTranslation{{ t }}",(function(){return[s.useTranslation]}));var p=m;const f=p;var v,g;(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(m,"Versions","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/Versions.tsx"),v.register(p,"default","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/Versions.tsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)},"./src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx":(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var a,r=o("../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),s=o("../node_modules/.pnpm/react-i18next@11.15.3_ad209b3ec0793904285d43906e66750b/node_modules/react-i18next/dist/es/useTranslation.js"),n=o("./src/components/List.tsx"),i=o("./src/components/ListItem.tsx"),l=o("./src/utils/package.ts"),d=o("./src/pages/Version/DetailContainer/Versions/styles.ts");e=o.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=function(e){var t=e.versions,o=e.packageName,a=e.time,c=(0,s.useTranslation)().t;return r.createElement(n.default,{dense:!0},Object.keys(t).reverse().map((function(e){return r.createElement(i.default,{className:"version-item",key:e},r.createElement(d.StyledLink,{to:"/-/web/detail/".concat(o,"/v/").concat(e)},r.createElement(d.ListItemText,null,e)),r.createElement(d.Spacer,null),r.createElement(d.ListItemText,null,a[e]?(0,l.formatDateDistance)(a[e]):c("versions.not-available")))})))};c(u,"useTranslation{{ t }}",(function(){return[s.useTranslation]}));var m=u;const p=m;var f,v;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(u,"VersionsHistoryList","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx"),f.register(m,"default","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/VersionsHistoryList.tsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)},"./src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx":(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var a,r=o("../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),s=o("./src/components/List.tsx"),n=o("./src/components/ListItem.tsx"),i=o("./src/pages/Version/DetailContainer/Versions/styles.ts");e=o.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l=function(e){var t=e.tags;return r.createElement(s.default,{dense:!0},Object.keys(t).reverse().map((function(e){return r.createElement(n.default,{className:"version-item",key:e},r.createElement(i.ListItemText,null,e),r.createElement(i.Spacer,null),r.createElement(i.ListItemText,null,t[e]))})))},d=l;const c=d;var u,m;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(l,"VersionsTagList","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx"),u.register(d,"default","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/VersionsTagList.tsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},"./src/pages/Version/DetailContainer/Versions/index.ts":(e,t,o)=>{o.r(t),o.d(t,{default:()=>a.default});var a=o("./src/pages/Version/DetailContainer/Versions/Versions.tsx");"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},"./src/pages/Version/DetailContainer/Versions/styles.ts":(e,t,o)=>{o.r(t),o.d(t,{StyledText:()=>c,Spacer:()=>u,ListItemText:()=>m,StyledLink:()=>p});var a,r=o("../node_modules/.pnpm/@emotion+styled@11.6.0_023218a630dedcfdc5aa065bf93ff9d7/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),s=o("./src/components/Link.tsx"),n=o("./src/components/ListItemText.tsx"),i=o("./src/components/Text/index.ts");e=o.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,d,c=(0,r.default)(i.default,{target:"ei59c893"})((function(e){var t;return{fontWeight:null===(t=e.theme)||void 0===t?void 0:t.fontWeight.bold}}),""),u=(0,r.default)("div",{target:"ei59c892"})((function(e){var t=e.theme;return{flex:"1 1 auto",borderBottom:"1px dotted ".concat("light"==(null==t?void 0:t.palette.mode)?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.2)"," "),whiteSpace:"nowrap",height:"0.5em",margin:"0 16px"}}),""),m=(0,r.default)(n.default,{target:"ei59c891"})((function(e){var t=e.theme;return{flex:"none",opacity:.6,color:"light"==(null==t?void 0:t.palette.mode)?null==t?void 0:t.palette.black:null==t?void 0:t.palette.white}}),""),p=(0,r.default)(s.default,{target:"ei59c890"})({name:"g65o95",styles:"text-decoration:none"});(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"StyledText","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts"),l.register(u,"Spacer","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts"),l.register(m,"ListItemText","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts"),l.register(p,"StyledLink","/home/jpicado/projects/@verdaccio/ui/ui-theme/src/pages/Version/DetailContainer/Versions/styles.ts")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}}]);