"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,443];
exports.modules = {

/***/ 6316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(6935);
// EXTERNAL MODULE: ./components/more-stories.tsx + 1 modules
var more_stories = __webpack_require__(4800);
// EXTERNAL MODULE: ./components/avatar.tsx
var avatar = __webpack_require__(9782);
// EXTERNAL MODULE: ./components/date.tsx
var components_date = __webpack_require__(1722);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(9519);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/hero-post.tsx





function HeroPost({ title , coverImage , date , excerpt , author , slug  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-8 md:mb-16",
                children: coverImage && /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    title: title,
                    coverImage: coverImage,
                    slug: slug
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "mb-4 text-4xl lg:text-6xl leading-tight",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/posts/${slug}`,
                                    className: "hover:underline",
                                    dangerouslySetInnerHTML: {
                                        __html: title
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-4 md:mb-0 text-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_date/* default */.Z, {
                                    dateString: date
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-lg leading-relaxed mb-4",
                                dangerouslySetInnerHTML: {
                                    __html: excerpt
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                                author: author
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/layout.tsx + 1 modules
var layout = __webpack_require__(3452);
// EXTERNAL MODULE: ./components/lib/api.ts
var api = __webpack_require__(4695);
// EXTERNAL MODULE: ./components/lib/constants.ts
var constants = __webpack_require__(8163);
;// CONCATENATED MODULE: ./pages/index.tsx








function Index({ allPosts: { edges  } , preview  }) {
    const heroPost = edges[0]?.node;
    const morePosts = edges.slice(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        preview: preview,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: `Next.js Blog Example with ${constants/* CMS_NAME */.yf}`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                children: [
                    heroPost && /*#__PURE__*/ jsx_runtime_.jsx(HeroPost, {
                        title: heroPost.title,
                        coverImage: heroPost.featuredImage,
                        date: heroPost.date,
                        author: heroPost.author,
                        slug: heroPost.slug,
                        excerpt: heroPost.excerpt
                    }),
                    morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories/* default */.Z, {
                        posts: morePosts
                    })
                ]
            })
        ]
    });
}
const getStaticProps = async ({ preview =false  })=>{
    const allPosts = await (0,api/* getAllPostsForHome */.DT)(preview);
    return {
        props: {
            allPosts,
            preview
        },
        revalidate: 10
    };
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 1161:
/***/ ((module) => {

module.exports = require("keen-slider/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6615:
/***/ ((module) => {

module.exports = require("react-burger-menu");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,56,926,720,529], () => (__webpack_exec__(6316)));
module.exports = __webpack_exports__;

})();