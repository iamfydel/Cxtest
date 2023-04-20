(() => {
var exports = {};
exports.id = 922;
exports.ids = [922,443];
exports.modules = {

/***/ 7369:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "post-body_content__1R6cU"
};


/***/ }),

/***/ 9369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(6935);
// EXTERNAL MODULE: ./components/post-body.module.css
var post_body_module = __webpack_require__(7369);
var post_body_module_default = /*#__PURE__*/__webpack_require__.n(post_body_module);
;// CONCATENATED MODULE: ./components/post-body.tsx


function PostBody({ content  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (post_body_module_default()).content,
            dangerouslySetInnerHTML: {
                __html: content
            }
        })
    });
}

// EXTERNAL MODULE: ./components/more-stories.tsx + 1 modules
var more_stories = __webpack_require__(4800);
// EXTERNAL MODULE: ./components/header.tsx + 1 modules
var header = __webpack_require__(4056);
// EXTERNAL MODULE: ./components/avatar.tsx
var avatar = __webpack_require__(9782);
// EXTERNAL MODULE: ./components/date.tsx
var components_date = __webpack_require__(1722);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(9519);
;// CONCATENATED MODULE: ./components/post-title.tsx

function PostTitle({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
        dangerouslySetInnerHTML: {
            __html: children
        }
    });
}

;// CONCATENATED MODULE: ./components/categories.tsx

function Categories({ categories  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "ml-1",
        children: categories.edges.length > 0 ? categories.edges.map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-1",
                children: category.node.name
            }, index)) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "ml-1",
            children: categories.edges.node.name
        })
    });
}

;// CONCATENATED MODULE: ./components/post-header.tsx






function PostHeader({ title , coverImage , date , author , categories  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block md:mb-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                    author: author
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-8 md:mb-16 sm:mx-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    title: title,
                    coverImage: coverImage
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block md:hidden mb-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                            author: author
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-6 text-lg",
                        children: [
                            "Posted ",
                            /*#__PURE__*/ jsx_runtime_.jsx(components_date/* default */.Z, {
                                dateString: date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Categories, {
                                categories: categories
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/section-separator.tsx

function SectionSeparator() {
    return /*#__PURE__*/ jsx_runtime_.jsx("hr", {
        className: "border-accent-2 mt-28 mb-24"
    });
}

// EXTERNAL MODULE: ./components/layout.tsx + 1 modules
var layout = __webpack_require__(3452);
;// CONCATENATED MODULE: ./components/tags.tsx

function Tags({ tags  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            className: "mt-8 text-lg font-bold",
            children: [
                "Tagged",
                tags.edges.map((_tags, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-4 font-normal",
                        children: tags.node.name
                    }, index))
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/lib/api.ts
var api = __webpack_require__(4695);
// EXTERNAL MODULE: ./components/lib/constants.ts
var constants = __webpack_require__(8163);
;// CONCATENATED MODULE: ./pages/posts/[slug].tsx















function Post({ post , posts , preview  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const morePosts = posts?.edges;
    if (!router.isFallback && !post?.slug) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        preview: preview,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
                router.isFallback ? /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                    children: "Loading…"
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                            children: `${post.title} | Next.js Blog Example with ${constants/* CMS_NAME */.yf}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                            property: "og:image",
                                            content: post.featuredImage?.node.sourceUrl
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostHeader, {
                                    title: post.title,
                                    coverImage: post.featuredImage,
                                    date: post.date,
                                    author: post.author,
                                    categories: post.categories
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostBody, {
                                    content: post.content
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                                    children: post.tags.edges.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Tags, {
                                        tags: post.tags
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionSeparator, {}),
                        morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories/* default */.Z, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    });
}
const getStaticProps = async ({ params , preview =false , previewData  })=>{
    const data = await (0,api/* getPostAndMorePosts */.ds)(params?.slug, preview, previewData);
    return {
        props: {
            preview,
            post: data.post,
            posts: data.posts
        },
        revalidate: 10
    };
};
const getStaticPaths = async ()=>{
    const allPosts = await (0,api/* getAllPostsWithSlug */.h9)();
    return {
        paths: allPosts.edges.map(({ node  })=>`/posts/${node.slug}`) || [],
        fallback: true
    };
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 1161:
/***/ ((module) => {

"use strict";
module.exports = require("keen-slider/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6615:
/***/ ((module) => {

"use strict";
module.exports = require("react-burger-menu");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,56,926,720,529], () => (__webpack_exec__(9369)));
module.exports = __webpack_exports__;

})();