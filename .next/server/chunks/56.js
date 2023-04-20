"use strict";
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 4056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(6615);
;// CONCATENATED MODULE: ./components/mobile-header.tsx





const HeaderMobile = ()=>{
    const [isOpen, setOpen] = (0,external_react_.useState)(false);
    const handleIsOpen = ()=>{
        setOpen(!isOpen);
    };
    const closeSideBar = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_burger_menu_.slide, {
        isOpen: isOpen,
        onOpen: handleIsOpen,
        onClose: handleIsOpen,
        className: "bg-black text-white pt-10 pr-0 pb-10 pl-10 relative z-Index-9",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "leading-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "menu-item",
                        href: "/insight-global",
                        onClick: closeSideBar,
                        children: "Insight Globalとは"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "leading-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "menu-item",
                        href: "/solution",
                        onClick: closeSideBar,
                        children: "ソリューション"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "leading-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "menu-item",
                        href: "/case-study",
                        onClick: closeSideBar,
                        children: "導入事例"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "leading-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "menu-item",
                        href: "/plan",
                        onClick: closeSideBar,
                        children: "導入の流れ"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "leading-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "menu-item",
                        href: "/login",
                        onClick: closeSideBar,
                        children: "ログイン"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "leading-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "menu-item",
                        href: "/document-download",
                        onClick: closeSideBar,
                        children: "資料ダウンロード"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const mobile_header = (HeaderMobile);

;// CONCATENATED MODULE: ./components/header.tsx






function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "w-full fixed top-0 z-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(mobile_header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "bg-white py-2 md:py-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-4 md:px-8 lg:px-12 xl:px-12 mx-auto max-w-screen-2xl md:flex md:items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "font-bold text-xl text-indigo-600",
                                    defaultValue: "Logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "logo",
                                        src: "/logo/insight-global-main-logo.svg",
                                        alt: "Insight-Global-Logo",
                                        width: 180,
                                        height: 35,
                                        priority: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "px-3 py-1 text-gray-600 lg:hidden",
                                    id: "navbar-toggle",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "relative group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "relative flex overflow-hidden items-center justify-end w-[50px] h-[50px] transform transition-al duration-200",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col justify-between w-[25px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-gradient-to-r from-blue-800 via-blue-500 to-sky-700 h-[2px] w-7 transform transition-all duration-300 origin-left"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-gradient-to-r from-blue-800 via-blue-500 to-sky-700 h-[2px] w-7 rounded transform transition-all duration-300"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-gradient-to-r from-blue-800 via-blue-500 to-sky-700 h-[2px] w-7 transform transition-all duration-300 origin-left"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden lg:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0",
                            id: "navbar-collapse",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "flex relative group",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                scroll: true,
                                                href: "insight-global",
                                                className: "p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300",
                                                children: "Insight Globalとは"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 1.5,
                                                stroke: "currentColor",
                                                className: "w-5 h-6 relative top-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "flex relative group",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                scroll: true,
                                                href: "solution",
                                                className: "p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300",
                                                children: "ソリューション"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 1.5,
                                                stroke: "currentColor",
                                                className: "w-5 h-6 relative top-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            scroll: true,
                                            href: "case-study",
                                            className: "p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300",
                                            children: "導入事例"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            scroll: true,
                                            href: "plan",
                                            className: "p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300",
                                            children: "導入の流れ"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            scroll: true,
                                            href: "login",
                                            className: "p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300",
                                            children: "ログイン"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            scroll: true,
                                            href: "document-download",
                                            className: "bg-gradient-to-r from-blue-800 to-sky-600 p-2 lg:px-4 md:mx-2 text-sm text-white text-center font-semibold rounded-3xl transition-colors duration-700",
                                            children: "資料ダウンロード"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;