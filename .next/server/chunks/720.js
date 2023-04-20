exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 1720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Intro)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1161);
// EXTERNAL MODULE: ./node_modules/keen-slider/keen-slider.min.css
var keen_slider_min = __webpack_require__(6443);
;// CONCATENATED MODULE: ./components/image-carousel.tsx






function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        onClick: props.onClick,
        className: `arrow text-black w-5 z-Index-9 top-1/2 absolute ${props.left ? "arrow--left float-left left-0 top-1/2" : "arrow--right float-right right-0"} ${disabeld}`,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
            props.left && /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            }),
            !props.left && /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
            })
        ]
    });
}
function ThumbnailPlugin(mainRef) {
    return (slider)=>{
        function removeActive() {
            slider.slides.forEach((slide)=>{
                slide.classList.remove("active");
            });
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active");
        }
        function addClickEvents() {
            slider.slides.forEach((slide, idx)=>{
                slide.addEventListener("click", ()=>{
                    if (mainRef.current) mainRef.current.moveToIdx(idx);
                });
            });
        }
        slider.on("created", ()=>{
            if (!mainRef.current) return;
            addActive(slider.track.details.rel);
            addClickEvents();
            mainRef.current.on("animationStarted", (main)=>{
                removeActive();
                const next = main.animator.targetIdx || 0;
                addActive(main.track.absToRel(next));
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
            });
        });
    };
}
function ImageCarouselSlider() {
    const [currentSlide, setCurrentSlide] = external_react_default().useState(0);
    const [loaded, setLoaded] = (0,external_react_.useState)(false);
    const [sliderRef, instanceRef] = (0,react_.useKeenSlider)({
        initial: 0
    });
    const [thumbnailRef] = (0,react_.useKeenSlider)({
        initial: 0,
        slides: {
            perView: 4,
            spacing: 10
        },
        slideChanged (slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created () {
            setLoaded(true);
        }
    }, [
        ThumbnailPlugin(instanceRef)
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "px-4 md:px-0 lg:px-0 xl:px-0 mx-auto mt-24 items-center",
            style: {
                background: "#D4F7FF"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-screen-lg mx-auto transition-all duration-500 ease-linear",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        ref: sliderRef,
                        className: "keen-slider",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "keen-slider__slide number-slide1 product-img relative bottom-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "product-img object-cover",
                                    src: "/slider/slider-dashboard-top-1.svg",
                                    alt: "Insight-Global-Product-Slider-Img",
                                    width: 1000,
                                    height: 900,
                                    priority: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "keen-slider__slide number-slide1 product-img relative bottom-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "product-img object-cover",
                                    src: "/slider/slider-dashboard-top-2.svg",
                                    alt: "Insight-Global-Product-Slider-Img",
                                    width: 1000,
                                    height: 900,
                                    priority: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "keen-slider__slide number-slide1 product-img relative bottom-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "product-img object-cover",
                                    src: "/slider/slider-dashboard-top-3.svg",
                                    alt: "Insight-Global-Product-Slider-Img",
                                    width: 1000,
                                    height: 900,
                                    priority: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "keen-slider__slide number-slide1 product-img relative bottom-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "product-img object-cover",
                                    src: "/slider/slider-dashboard-top-4.svg",
                                    alt: "Insight-Global-Product-Slider-Img",
                                    width: 1000,
                                    height: 900,
                                    priority: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        ref: thumbnailRef,
                        className: "keen-slider thumbnail relative bottom-24",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "keen-slider__slide number-slide1 px-2.5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "product-img w-full h-full object-cover",
                                    src: "/slider/slider-dashboard-1.svg",
                                    alt: "Insight-Global-Product-Slider-Img",
                                    width: 230,
                                    height: 200,
                                    priority: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "keen-slider__slide number-slide1 px-2.5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "product-img w-full h-full object-cover",
                                    src: "/slider/slider-dashboard-2.svg",
                                    alt: "Insight-Global-Product-Slider-Img",
                                    width: 230,
                                    height: 200,
                                    priority: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "keen-slider__slide number-slide1 px-2.5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "product-img w-full h-full object-cover",
                                    src: "/slider/slider-dashboard-3.svg",
                                    alt: "Insight-Global-Product-Slider-Img",
                                    width: 230,
                                    height: 200,
                                    priority: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "keen-slider__slide number-slide1 px-2.5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "product-img w-full h-full object-cover",
                                    src: "/slider/slider-dashboard-4.svg",
                                    alt: "Insight-Global-Product-Slider-Img",
                                    width: 230,
                                    height: 200,
                                    priority: true
                                })
                            }),
                            loaded && instanceRef.current && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                                        left: true,
                                        onClick: (e)=>e.stopPropagation() || instanceRef.current?.prev(),
                                        disabled: currentSlide === 0
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Arrow, {
                                        onClick: (e)=>e.stopPropagation() || instanceRef.current?.next(),
                                        disabled: currentSlide === instanceRef.current.track.details.slides.length - 1
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./pages/top.tsx



function Intro() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: "Top-Page bg-white pt-20 lg:pt-24 xl:pt-28",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:flex xl:flex justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative top-0 md:top-5 lg:top-7 xl:top-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "text-black font-medium text-xl lg:text-4xl xl:text-4xl items-center leading-relaxed lg:leading-loose xl:leading-loose",
                                        children: [
                                            "Prepare for the",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xl lg:text-4xl xl:text-4xl text-blue-900 font-semibold pl-1",
                                                children: "FUTURE"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-blue-900 font-semibold text-3xl lg:text-4xl xl:text-4xl leading-relaxed lg:leading-loose xl:leading-loose",
                                        children: "データ分析プラットフォームで"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-blue-900 font-semibold text-3xl lg:text-4xl xl:text-4xl leading-relaxed lg:leading-loose xl:leading-loose",
                                        children: "経営数字を見える化"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "pt-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-base text-black-800 leading-8 tracking-wider font-medium",
                                                children: "Excel の柔軟性により、ビジネス環境の変化に備えて、よ"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-base text-black-800 leading-8 tracking-wider font-medium",
                                                children: "り迅速に自動化されたレポート、決算見込更新、そして、"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-base text-black-800 leading-8 tracking-wider font-medium",
                                                children: "データドリブン型の意思決定により、ビジネスの成長を加"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-base text-black-800 leading-8 tracking-wider font-medium",
                                                children: "速させます。"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "btn-list grid lg:flex xl:flex justify-items-stretch pt-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "w-full py-3 text-sm lg:px-4 md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white",
                                                children: "資料ダウンロード"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "w-full mt-5 lg:mt-0 xl:mt-0 py-3 text-sm lg:px-4 md:mx-2 text-black border-blue-600 border-2 text-center font-semibold rounded-3xl",
                                                children: "オンライン相談"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "top-sec-image mt-5 lg:mt-0 xl:mt-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "mx-auto sm:w-full",
                                    src: "/bg/bg-top.svg",
                                    alt: "Top-Banner-Image",
                                    width: 700,
                                    height: 100,
                                    priority: true
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "why-us- sec max-w-screen-2xl mx-auto w-full px-4 lg:px-0 xl:px-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-screen-xl py-20 mx-auto w-full bg-no-repeat bg-top bg-why-us bg-[url('/bg/bg-why-us.svg')]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-semibold stroke-1",
                                    children: "Why Us?"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center relative bottom-2.5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "text-black text-lg md:text-2xl lg:text-2xl xl:text-2xl font-bold",
                                    children: "Insight Globalでできること"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center pt-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                    className: "text-black text-lg md:text-2xl lg:text-2xl xl:text-2xl font-bold tracking-wider",
                                    children: [
                                        "「ビジネスを",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-blue-900",
                                            children: "成長を加速させる"
                                        }),
                                        "データ分析プラットフォーム」"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "para pt-5 text-center leading-7",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-black font-medium text-base md:text-md lg:text-md xl:text-md tracking-wider",
                                        children: "Insight Globalが提供するプラットフォームなら"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-black font-medium text-base md:text-md lg:text-md xl:text-md tracking-wider",
                                        children: "ノーコードで複数のデータを一元管理できるから"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-black-700 font-medium text-base md:text-md lg:text-md xl:text-md tracking-wider",
                                        children: "よりビジネスの成長にコミットしたデータ活用ができます。"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "why-us-sec pt-14",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "block md:flex lg:flex xl:flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card-why-us px-14 transform transition duration-700 hover:scale-110 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "image-why-us text-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: "mx-auto",
                                                        src: "/simple.svg",
                                                        alt: "why-us-image",
                                                        width: 230,
                                                        height: 40,
                                                        priority: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-why-us text-center mt-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "text-blue-700 font-semibold text-lg",
                                                        children: "SIMPLE"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "subheading-why-us text-center mt-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "text-black font-semibold text-base",
                                                        children: "管理コストを大幅削減"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "para-why-us mt-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-black font-medium text-justify text-sm",
                                                        children: "このツールを使えば、常に整理されたデータの閲覧が可能です。集計が遅れることもありません。"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card-why-us px-14 mt-12 md:mt-0 lg:mt-0 xl:mt-0 transform transition duration-700 hover:scale-110 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "image-why-us text-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: "mx-auto",
                                                        src: "/smart.svg",
                                                        alt: "why-us-image",
                                                        width: 230,
                                                        height: 40,
                                                        priority: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-why-us text-center mt-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "text-blue-700 font-semibold text-lg",
                                                        children: "SMART"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "subheading-why-us text-center mt-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "text-black font-semibold text-base",
                                                        children: "財務から在庫管理まで一元化"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "para-why-us mt-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-black font-medium text-justify text-sm",
                                                        children: "財務データはもちろん、人事、労務、在庫など、社内に散在するデータを一元管理します。"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card-why-us px-14 mt-12 md:mt-0 lg:mt-0 xl:mt-0 transform transition duration-700 hover:scale-110 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "image-why-us text-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: "mx-auto",
                                                        src: "/speed.svg",
                                                        alt: "why-us-image",
                                                        width: 230,
                                                        height: 40,
                                                        priority: true
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "heading-why-us text-center mt-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "text-blue-700 font-semibold text-lg",
                                                        children: "SPEED"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "subheading-why-us text-center mt-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "text-black font-semibold text-base",
                                                        children: "タイムリーなデータ分析"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "para-why-us mt-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-black font-medium text-justify text-sm",
                                                        children: "国内外問わずKPIを常にモニタリングし、スムーズな情報共有と意思決定を実現します。"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "platform-sec bg-gray-50 w-full mx-auto py-20 bg-no-repeat bg-top bg-platform-us bg-[url('/bg/bg-platform.svg')]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container max-w-screen-lg mx-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "block md:flex lg:flex xl:flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "px-4 md:px-0 lg:px-0 xl:px-0 content text-justify md:pr-8 lg:pr-8 xl:pr-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "text-black text-center md:text-left lg:text-left xl:text-left font-semibold text-3xl leading-loose",
                                                children: "プラットフォーム"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pt-6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-base text-black-800 leading-7 tracking-wider font-medium",
                                                    children: "Insight Global は、経営陣および運用メンバー向けのワンストップ ソリューションであり、チームがデータから意思決定を迅速に行うのに役立つリアルタイムの分析および計画プラットフォームを提供します。"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "platform-icon pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "icon-1 pt-2 flex justify-items-stretch items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon-img",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "mx-auto",
                                                                    src: "/icon/icon_1.svg",
                                                                    alt: "platform-icon-image",
                                                                    width: 40,
                                                                    height: 40,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon-heading pl-4",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-base text-blue-800 font-semibold underline underline-offset-2 md:underline-offset-0 lg:underline-offset-0 xl:underline-offset-0",
                                                                    children: "ワークフロー管理・文書管理"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "icon-1 pt-2 flex justify-items-stretch items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon-img",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "mx-auto",
                                                                    src: "/icon/icon_2.svg",
                                                                    alt: "platform-icon-image",
                                                                    width: 40,
                                                                    height: 40,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon-heading pl-4",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-base text-blue-800 font-semibold underline underline-offset-2 md:underline-offset-0 lg:underline-offset-0 xl:underline-offset-0",
                                                                    children: "財務プロセスの自動化"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "icon-1 pt-2 flex justify-items-stretch items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon-img",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "mx-auto",
                                                                    src: "/icon/icon_3.svg",
                                                                    alt: "platform-icon-image",
                                                                    width: 40,
                                                                    height: 40,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "icon-heading pl-4",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-base text-blue-800 font-semibold underline underline-offset-2 md:underline-offset-0 lg:underline-offset-0 xl:underline-offset-0",
                                                                    children: "レポーティング分析"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "btn-list pt-8 text-center md:text-left lg:text-left xl:text-left",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "px-16 py-3 md:px-10 lg:px-10 xl:px-10 text-sm md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white",
                                                    children: "詳しく見る"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "content-img relative",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "platform-bg-img relative top-10 left-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                className: "platform-bg",
                                                src: "/platform.svg",
                                                alt: "Insight-Global-Platform-Bg",
                                                width: 450,
                                                height: 60,
                                                priority: true
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "platform-1 shadow shadow-gray-500/50 rounded-2xl bg-blue-800 mt-24 container max-w-screen-lg mx-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "block md:flex lg:flex xl:flex justify-between px-5 md:px-10 lg:px-10 xl:px-10 py-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content text-justify pt-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "text-xl md:text-2xl text-white font-bold pb-4",
                                                children: "Insight Globalでもっと会社経営を"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "text-xl md:text-2xl lg:md:text-2xl xl:md:text-2xl text-white font-semibold pb-4",
                                                children: "変えてみませんか？"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "btn-list grid md:flex lg:flex xl:flex justify-items-stretch pt-5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "py-3 md:px-10 lg:px-10 xl:px-10 text-sm text-sky-700 text-center font-semibold border border-transparent rounded-3xl bg-white hover:bg-white",
                                                        children: "資料ダウンロード"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "mt-5 md:mt-0 lg:mt-0 xl:mt-0 py-3 md:px-10 lg:px-10 xl:px-10 text-sm md:mx-2 text-white text-center font-semibold border border-white rounded-3xl",
                                                        children: "オンラインデモ"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "content-img relative top-3 pb-5 md:pb-0 lg:pb-0 xl:pb-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-bg-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                className: "Footer-bg",
                                                src: "web-dev.svg",
                                                alt: "Insight-Global-Footer-Bg",
                                                width: 330,
                                                height: 0,
                                                priority: true
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-4 md:px-0 lg:px-0 xl:px-0 Product-sec max-w-screen-2xl mx-auto w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-screen-xl pt-5 py-20 items-center mx-auto w-full bg-white",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative top-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center relative bottom-2.5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold",
                                            children: "画面で見るInsight Global"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "para pt-5 text-justify md:text-center lg:text-center xl:text-center leading-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider",
                                                children: "弊社のInsight Global を活用することで、"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider",
                                                children: "現地のあらゆるデータをクラウドで吸い上げ、ダッシュボードとして提示します。"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider",
                                                children: "情報収集プロセスのほとんどが自動で行えるため管理工数も圧縮され、"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider",
                                                children: "経営判断の精度もスピードも向上します。"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center mt-9 md:mt-0 lg:mt-0 xl:mt-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-7xl md:text-9xl lg:text-9xl xl:text-9xl uppercase font-bold stroke-full text-sky-100",
                                    children: "Product"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ImageCarouselSlider, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-4 md:px-0 lg:px-0 xl:px-0 service-sec bg-white max-w-screen-2xl mx-auto w-full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-screen-xl pt-5 py-20 items-center mx-auto w-full bg-white",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative top-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center relative bottom-2.5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold",
                                            children: "幅広いサービス活用事例"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "para pt-5 text-justify md:text-center lg:text-center xl:text-center leading-7",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-black font-medium text-base md:text-md lg:text-md xl:text-md tracking-wider",
                                                children: "Insight Global は、事業内容や課題に合わせて、多彩なカスタマイズが可能です。"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-black font-medium text-md tracking-wider",
                                                children: "例えば、複数拠点での在庫管理を一元化する。"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "max-w-4xl mx-auto pt-28",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "block md:flex lg:flex xl:flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "list-no",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-3xl font-bold text-sky-200",
                                                            children: "01"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "service-img pt-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "service-img mx-auto",
                                                                    src: "/service/service-1.svg",
                                                                    alt: "Insight-Global-Service-Img",
                                                                    width: 200,
                                                                    height: 100,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading pt-5",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                    className: "text-sm md:text-base lg:text-base xl:text-base text-black font-medium",
                                                                    children: [
                                                                        "海外子会社の管理",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        "モニタリング"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "down-arrow mx-auto",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: 3,
                                                                    stroke: "currentColor",
                                                                    className: "w-6 h-10 text-gray-300 mx-auto",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "readmore-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "uppercase text-base font-medium text-blue-400",
                                                                    children: "MORE"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "list-no",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-3xl font-bold text-sky-200",
                                                            children: "02"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "service-img pt-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "service-img mx-auto",
                                                                    src: "/service/service-2.svg",
                                                                    alt: "Insight-Global-Service-Img",
                                                                    width: 200,
                                                                    height: 100,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading pt-5",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                    className: "text-sm md:text-base lg:text-base xl:text-base text-black font-medium",
                                                                    children: [
                                                                        "国内子会社",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        "支店の経営管理強化"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "down-arrow mx-auto",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: 3,
                                                                    stroke: "currentColor",
                                                                    className: "w-6 h-10 text-gray-300 mx-auto",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "readmore-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "uppercase text-base font-medium text-blue-400",
                                                                    children: "MORE"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "list-no",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-3xl font-bold text-sky-200",
                                                            children: "03"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "service-img pt-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "service-img mx-auto",
                                                                    src: "/service/service-3.svg",
                                                                    alt: "Insight-Global-Service-Img",
                                                                    width: 200,
                                                                    height: 100,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading pt-5",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "text-sm md:text-base lg:text-base xl:text-base text-black font-medium",
                                                                    children: "デューデリシャス"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "down-arrow mx-auto pt-1",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: 3,
                                                                    stroke: "currentColor",
                                                                    className: "w-6 h-10 text-gray-300 mx-auto",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "readmore-btn pt-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "uppercase text-base font-medium text-blue-400",
                                                                    children: "MORE"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "pt-7 block md:flex lg:flex xl:flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "list-no",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-3xl font-bold text-sky-200",
                                                            children: "04"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "service-img pt-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "service-img mx-auto",
                                                                    src: "/service/service-4.svg",
                                                                    alt: "Insight-Global-Service-Img",
                                                                    width: 200,
                                                                    height: 100,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading pt-5",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "text-sm md:text-base lg:text-base xl:text-base text-black font-medium",
                                                                    children: "ベンチャー企業支援"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "down-arrow mx-auto pt-6",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: 3,
                                                                    stroke: "currentColor",
                                                                    className: "w-6 h-10 text-gray-300 mx-auto",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "readmore-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "uppercase text-base font-medium text-blue-400",
                                                                    children: "MORE"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "list-no",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-3xl font-bold text-sky-200",
                                                            children: "05"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "service-img pt-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "service-img mx-auto",
                                                                    src: "/service/service-5.svg",
                                                                    alt: "Insight-Global-Service-Img",
                                                                    width: 200,
                                                                    height: 100,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading pt-5",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                    className: "text-sm md:text-base lg:text-base xl:text-base text-black font-medium",
                                                                    children: [
                                                                        "複数経営管理側面",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        "の連携"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "down-arrow mx-auto",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: 3,
                                                                    stroke: "currentColor",
                                                                    className: "w-6 h-10 text-gray-300 mx-auto",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "readmore-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "uppercase text-base font-medium text-blue-400",
                                                                    children: "MORE"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "list-no",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-3xl font-bold text-sky-200",
                                                            children: "06"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "service-img-sec pt-3",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                    className: "service-img mx-auto",
                                                                    src: "/service/service-6.svg",
                                                                    alt: "Insight-Global-Service-Img",
                                                                    width: 200,
                                                                    height: 100,
                                                                    priority: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading pt-5",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                    className: "text-sm md:text-base lg:text-base xl:text-base text-black font-medium",
                                                                    children: [
                                                                        "経営陣、管理職への",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                        "レポーティング"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "down-arrow mx-auto",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    strokeWidth: 3,
                                                                    stroke: "currentColor",
                                                                    className: "w-6 h-10 text-gray-300 mx-auto",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "readmore-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#",
                                                                    className: "uppercase text-base font-medium text-blue-400",
                                                                    children: "MORE"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-4 md:px-0 lg:px-0 xl:px-0 intro-flow-sec bg-gray-50 w-full mx-auto bg-no-repeat bg-top bg-platform-us bg-[url('/bg/bg-case-study.svg')]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-w-screen-xl py-7  items-center mx-auto w-full",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative md:top-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-center relative md:bottom-2.5 lg:bottom-2.5 xl:bottom-2.5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "text-black text-3xl font-bold",
                                        children: "導入事例"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "para pt-5 text-justify md:text-center lg:text-center xl:text-center leading-7",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-black font-medium text-md tracking-wider",
                                            children: "INSIGHT GLOBALは、事業内容や課題に合わせて、多彩なカスタマイズが可能です。"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-black font-medium text-md tracking-wider",
                                            children: "例えば、複数拠点での在庫管理を一元化する。"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "max-w-screen-lg mx-auto pt-14",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "block md:flex lg:flex xl:flex justify-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "case-study-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mx-0 md:mx-3 lg:mx-3 xl:mx-3 bg-white shadow-lg rounded-md pt-0 py-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "items-center text-justify",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "case-study-img-sec",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                className: "case-study-img w-full",
                                                                src: "/case-study/case-study-img-1.svg",
                                                                alt: "Insight-Global-Case-Study-Img",
                                                                width: 300,
                                                                height: 100,
                                                                priority: true
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "px-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "heading pt-5",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-blue-700 text-base font-semibold leading-7",
                                                                            children: "多種多様な化粧品の在庫を見える化！ 有効なキャンペーンが立案でき、スタッフの工数も圧縮"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-black text-base mt-3 font-medium",
                                                                            children: "株式会社hogehoge"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "btn-list mt-5 flex justify-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "業界"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "会社規模"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "導入内容"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "case-study-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mt-10 md:mt-0 lg:mt-0 mx-0 md:mx-3 lg:mx-3 xl:mx-3 bg-white shadow-lg rounded-md pt-0 py-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "items-center text-justify",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "case-study-img-sec",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                className: "case-study-img w-full",
                                                                src: "/case-study/case-study-img-2.svg",
                                                                alt: "Insight-Global-Case-Study-Img",
                                                                width: 300,
                                                                height: 100,
                                                                priority: true
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "px-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "heading pt-5",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-blue-700 text-base font-semibold leading-7",
                                                                            children: "M＆Aのデューデリ時に、INSIGHT GLOBALを導入！隠れていた“不正”が浮き彫りに"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-black text-base mt-3 font-medium",
                                                                            children: "株式会社hogehoge"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "btn-list mt-5 flex justify-items-stretch",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "業界"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "会社規模"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "導入内容"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "case-study-card bg-white w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mt-10 md:mt-0 lg:mt-0 mx-0 md:mx-3 lg:mx-3 xl:mx-3 shadow-lg rounded-md pt-0 py-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "items-center text-justify",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "case-study-img-sec",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                className: "case-study-img w-full",
                                                                src: "/case-study/case-study-img-3.svg",
                                                                alt: "Insight-Global-Case-Study-Img",
                                                                width: 300,
                                                                height: 100,
                                                                priority: true
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "px-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "heading pt-5",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-blue-700 text-base font-semibold leading-7",
                                                                            children: "取引先からの売掛金の回収に苦戦 ツール導入で課題を特定しキャッシュフローを改善"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: "text-black text-base mt-3 font-medium",
                                                                            children: "株式会社hogehoge"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "btn-list mt-5 flex justify-items-stretch",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "業界"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "会社規模"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#",
                                                                            className: "p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl",
                                                                            children: "導入内容"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "btn-list w-full text-center pt-16 py-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "p-2 text-sm lg:px-4 md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white",
                                        children: "導入事例一覧を見る"
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-4 md:px-0 lg:px-0 xl:px-0 case-study-sec bg-white w-full mx-auto py-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-w-screen-xl pt-5 py-20 items-center mx-auto w-full",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative top-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-center relative bottom-2.5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold",
                                        children: "導入の流れ"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "para pt-5 text-justify md:text-center lg:text-center xl:text-center leading-7",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider",
                                            children: "まずはお気軽にお問い合わせください。"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider",
                                            children: "貴社のご要望に応じて、プランをご提案させていただきます。"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "stepper pt-10 justify-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "max-w-screen-lg justify-center mx-auto inline-block lg:flex xl:flex 2xl:flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "light-blue",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "content text-base font-semibold text-black",
                                                    children: "01 お問い合わせ"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "sky-blue",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "content text-base font-semibold text-white",
                                                    children: "02 ヒアリング・ご提案"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "sky-high",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "content text-base font-semibold text-white",
                                                    children: "03 お見積り"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "high-blue",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "content text-base font-semibold text-white",
                                                    children: "04 ご契約・導入"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "btn-list w-full text-center pt-16 py-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "p-2 text-sm lg:px-4 md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white",
                                        children: "導入までの流れを詳しく見る"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 6443:
/***/ (() => {



/***/ })

};
;