import{r as f}from"./index.252e8214.js";const a=f.exports.createContext(null);var e=!0,s=typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{};if(s.process&&s.process.env&&s.process.stdout){var o=s.process.env,n=o.FORCE_COLOR,i=o.NODE_DISABLE_COLORS,r=o.TERM;i||n==="0"?e=!1:n==="1"?e=!0:r==="dumb"?e=!1:"CI"in s.process.env&&["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE","DRONE"].some(function(t){return t in s.process.env})?e=!0:e=process.stdout.isTTY,e&&r&&r.endsWith("-256color")}export{a as C};
//# sourceMappingURL=3606955f.js.map
