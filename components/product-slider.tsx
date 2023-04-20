import React, { MutableRefObject } from "react"
import "../styles/Card.module.css"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }


    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>      
      <div className="px-4 md:px-0 lg:px-0 xl:px-0 bg-sky-50 mx-auto mt-24 py-20 items-center">
          <div ref={sliderRef} className="keen-slider product-img relative bottom-64">
            <div className="keen-slider__slide number-slide1">
              <Image
                className="product-img mx-auto"
                src="/product.svg"
                alt="Insight-Global-Product-Img"
                width={1100}
                height={1100}
                priority />
            </div>
          </div>
          <div className="">
            <div
              id="app"
              className="max-w-screen-lg mx-auto transition-all duration-500 ease-linear"
            >
              <div className="relative">
                <div ref={thumbnailRef} className="keen-slider thumbnail h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
                  <div className="keen-slider__slide number-slide1 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                    <Image
                      className="product-img w-full h-full object-cover"
                      src="/slider/slider-dashboard-1.svg"
                      alt="Insight-Global-Product-Slider-Img"
                      width={230}
                      height={200}
                      priority />
                  </div>
                  <div className="keen-slider__slide number-slide1 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                    <Image
                      className="product-img w-full h-full object-cover"
                      src="/slider/slider-dashboard-2.svg"
                      alt="Insight-Global-Product-Slider-Img"
                      width={230}
                      height={200}
                      priority />
                  </div>
                  <div className="keen-slider__slide number-slide1 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                    <Image
                      className="product-img w-full h-full object-cover"
                      src="/slider/slider-dashboard-3.svg"
                      alt="Insight-Global-Product-Slider-Img"
                      width={230}
                      height={200}
                      priority />
                  </div>
                  <div className="keen-slider__slide number-slide1 slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
                    <Image
                      className="product-img w-full h-full object-cover"
                      src="/slider/slider-dashboard-4.svg"
                      alt="Insight-Global-Product-Slider-Img"
                      width={230}
                      height={200}
                      priority />
                  </div>
                </div>

                <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
                  <button
                    role="button"
                    className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
                    aria-label="prev"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
                  <button
                    role="button"
                    className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
                    aria-label="next"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
