import React, { MutableRefObject, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Card.module.css';
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Index from './../pages/index';


function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow text-black w-5 z-Index-9 top-1/2 absolute ${props.left ? "arrow--left float-left left-0 top-1/2" : "arrow--right float-right right-0"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}


function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active");
            });
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add("active");
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx);
                });
            });
        }

        slider.on("created", () => {
            if (!mainRef.current) return;
            addActive(slider.track.details.rel);
            addClickEvents();
            mainRef.current.on("animationStarted", (main) => {
                removeActive();
                const next = main.animator.targetIdx || 0;
                addActive(main.track.absToRel(next));
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
            });
        });
    };
}

export default function ImageCarouselSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0
    });
    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        },
        [ThumbnailPlugin(instanceRef)]
    );

    return (
        <>
            <div className='px-4 md:px-0 lg:px-0 xl:px-0 mx-auto mt-24 items-center' style={{background:'#D4F7FF'}}>
                <div className="max-w-screen-lg mx-auto transition-all duration-500 ease-linear">
                    <div ref={sliderRef} className="keen-slider">                        
                        <div className="keen-slider__slide number-slide1 product-img relative bottom-0">
                            <Image
                                className="product-img object-cover"
                                src="/slider/slider-dashboard-top-1.svg"
                                alt="Insight-Global-Product-Slider-Img"
                                width={1000}
                                height={900}
                                priority />
                        </div>
                        <div className="keen-slider__slide number-slide1 product-img relative bottom-0">
                            <Image
                                className="product-img object-cover"
                                src="/slider/slider-dashboard-top-2.svg"
                                alt="Insight-Global-Product-Slider-Img"
                                width={1000}
                                height={900}
                                priority />
                        </div>
                        <div className="keen-slider__slide number-slide1 product-img relative bottom-0">
                            <Image
                                className="product-img object-cover"
                                src="/slider/slider-dashboard-top-3.svg"
                                alt="Insight-Global-Product-Slider-Img"
                                width={1000}
                                height={900}
                                priority />
                        </div>
                        <div className="keen-slider__slide number-slide1 product-img relative bottom-0">
                            <Image
                                className="product-img object-cover"
                                src="/slider/slider-dashboard-top-4.svg"
                                alt="Insight-Global-Product-Slider-Img"
                                width={1000}
                                height={900}
                                priority />
                        </div>
                    </div>
                    <div ref={thumbnailRef} className="keen-slider thumbnail relative bottom-24">
                        <div className="keen-slider__slide number-slide1 px-2.5">
                            <Image
                                className="product-img w-full h-full object-cover"
                                src="/slider/slider-dashboard-1.svg"
                                alt="Insight-Global-Product-Slider-Img"
                                width={230}
                                height={200}
                                priority />
                        </div>
                        <div className="keen-slider__slide number-slide1 px-2.5">
                            <Image
                                className="product-img w-full h-full object-cover"
                                src="/slider/slider-dashboard-2.svg"
                                alt="Insight-Global-Product-Slider-Img"
                                width={230}
                                height={200}
                                priority />
                        </div>
                        <div className="keen-slider__slide number-slide1 px-2.5">
                            <Image
                                className="product-img w-full h-full object-cover"
                                src="/slider/slider-dashboard-3.svg"
                                alt="Insight-Global-Product-Slider-Img"
                                width={230}
                                height={200}
                                priority />
                        </div>
                        <div className="keen-slider__slide number-slide1 px-2.5">
                            <Image
                                className="product-img w-full h-full object-cover"
                                src="/slider/slider-dashboard-4.svg"
                                alt="Insight-Global-Product-Slider-Img"
                                width={230}
                                height={200}
                                priority />
                        </div>
                        {loaded && instanceRef.current && (
                            <>
                                <Arrow
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />

                                <Arrow
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </>
                        )}
                    </div>
                    
                </div>
            </div>

        </>
    );
}

