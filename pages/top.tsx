import { CMS_NAME, CMS_URL } from '../components/lib/constants'
import Image from "next/image";
import Link from 'next/link';
import Script from "next/script";
import { useEffect, useState } from "react";
import ImageCarouselSlider from '../components/image-carousel';

export default function Intro() {
    return (
        <>

            <main className="Top-Page bg-white pt-20 lg:pt-24 xl:pt-28">            
                {/* Top */}
                <div className="max-w-screen-xl px-4 md:px-8 lg:px-0 xl:px-0 mx-auto">
                    <div className="lg:flex xl:flex justify-between">
                        <div className="relative top-0 md:top-5 lg:top-7 xl:top-10">
                            <h2 className="text-black font-medium text-xl lg:text-4xl xl:text-4xl items-center leading-relaxed lg:leading-loose xl:leading-loose">
                                Prepare for the
                                <span className="text-xl lg:text-4xl xl:text-4xl text-blue-900 font-semibold pl-1">
                                    FUTURE
                                </span>
                            </h2>
                            <h2 className="text-blue-900 font-semibold text-3xl lg:text-4xl xl:text-4xl leading-relaxed lg:leading-loose xl:leading-loose">
                                データ分析プラットフォームで
                            </h2>
                            <h2 className="text-blue-900 font-semibold text-3xl lg:text-4xl xl:text-4xl leading-relaxed lg:leading-loose xl:leading-loose">
                                経営数字を見える化
                            </h2>
                            <div className="pt-8">
                                <p className="text-base text-black-800 leading-8 tracking-wider font-medium">
                                    Excel の柔軟性により、ビジネス環境の変化に備えて、よ
                                </p>
                                <p className="text-base text-black-800 leading-8 tracking-wider font-medium">
                                    り迅速に自動化されたレポート、決算見込更新、そして、
                                </p>
                                <p className="text-base text-black-800 leading-8 tracking-wider font-medium">
                                    データドリブン型の意思決定により、ビジネスの成長を加
                                </p>
                                <p className="text-base text-black-800 leading-8 tracking-wider font-medium">
                                    速させます。
                                </p>
                            </div>
                            <div className="btn-list grid lg:flex xl:flex justify-items-stretch pt-5">
                                <a
                                    href="#"
                                    className="w-full py-3 text-sm lg:px-4 md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white"
                                >
                                    資料ダウンロード
                                </a>
                                <a
                                    href="#"
                                    className="w-full mt-5 lg:mt-0 xl:mt-0 py-3 text-sm lg:px-4 md:mx-2 text-black border-blue-600 border-2 text-center font-semibold rounded-3xl"
                                >
                                    オンライン相談
                                </a>
                            </div>
                        </div>
                        <div className="top-sec-image mt-5 lg:mt-0 xl:mt-0">
                            <Image
                                className="mx-auto sm:w-full"
                                src="/bg/bg-top.svg"
                                alt="Top-Banner-Image"
                                width={700}
                                height={100}
                                priority />
                        </div>
                    </div>
                </div>
                <div className="why-us- sec max-w-screen-2xl mx-auto w-full px-4 lg:px-0 xl:px-0">
                    <div className="max-w-screen-xl py-20 mx-auto w-full bg-no-repeat bg-top bg-why-us bg-[url('/bg/bg-why-us.svg')]">
                        <div className="text-center">
                            <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-semibold stroke-1">Why Us?</h1>
                        </div>
                        <div className="text-center relative bottom-2.5">
                            <h5 className="text-black text-lg md:text-2xl lg:text-2xl xl:text-2xl font-bold">
                                Insight Globalでできること
                            </h5>
                        </div>
                        <div className="text-center pt-8">
                            <h5 className="text-black text-lg md:text-2xl lg:text-2xl xl:text-2xl font-bold tracking-wider">
                                「ビジネスを
                                <span className="text-blue-900">成長を加速させる</span>
                                データ分析プラットフォーム」
                            </h5>
                        </div>
                        <div className="para pt-5 text-center leading-7">
                            <p className="text-black font-medium text-base md:text-md lg:text-md xl:text-md tracking-wider">
                                Insight Globalが提供するプラットフォームなら
                            </p>
                            <p className="text-black font-medium text-base md:text-md lg:text-md xl:text-md tracking-wider">
                                ノーコードで複数のデータを一元管理できるから
                            </p>
                            <p className="text-black-700 font-medium text-base md:text-md lg:text-md xl:text-md tracking-wider">
                                よりビジネスの成長にコミットしたデータ活用ができます。
                            </p>
                        </div>
                        <div className="why-us-sec pt-14">
                            <div className="block md:flex lg:flex xl:flex justify-between">
                                <div className="card-why-us px-14 transform transition duration-700 hover:scale-110 cursor-pointer">
                                    <div className="image-why-us text-center">
                                        <Image
                                            className="mx-auto"
                                            src="/simple.svg"
                                            alt="why-us-image"
                                            width={230}
                                            height={40}
                                            priority />
                                    </div>
                                    <div className="heading-why-us text-center mt-3">
                                        <h5 className="text-blue-700 font-semibold text-lg">
                                            SIMPLE
                                        </h5>
                                    </div>
                                    <div className="subheading-why-us text-center mt-3">
                                        <h5 className="text-black font-semibold text-base">
                                            管理コストを大幅削減
                                        </h5>
                                    </div>
                                    <div className="para-why-us mt-2">
                                        <p className="text-black font-medium text-justify text-sm">
                                            このツールを使えば、常に整理されたデータの閲覧が可能です。集計が遅れることもありません。
                                        </p>
                                    </div>
                                </div>
                                <div className="card-why-us px-14 mt-12 md:mt-0 lg:mt-0 xl:mt-0 transform transition duration-700 hover:scale-110 cursor-pointer">
                                    <div className="image-why-us text-center">
                                        <Image
                                            className="mx-auto"
                                            src="/smart.svg"
                                            alt="why-us-image"
                                            width={230}
                                            height={40}
                                            priority />
                                    </div>
                                    <div className="heading-why-us text-center mt-3">
                                        <h5 className="text-blue-700 font-semibold text-lg">SMART</h5>
                                    </div>
                                    <div className="subheading-why-us text-center mt-3">
                                        <h5 className="text-black font-semibold text-base">
                                            財務から在庫管理まで一元化
                                        </h5>
                                    </div>
                                    <div className="para-why-us mt-2">
                                        <p className="text-black font-medium text-justify text-sm">
                                            財務データはもちろん、人事、労務、在庫など、社内に散在するデータを一元管理します。
                                        </p>
                                    </div>
                                </div>
                                <div className="card-why-us px-14 mt-12 md:mt-0 lg:mt-0 xl:mt-0 transform transition duration-700 hover:scale-110 cursor-pointer">
                                    <div className="image-why-us text-center">
                                        <Image
                                            className="mx-auto"
                                            src="/speed.svg"
                                            alt="why-us-image"
                                            width={230}
                                            height={40}
                                            priority />
                                    </div>
                                    <div className="heading-why-us text-center mt-3">
                                        <h5 className="text-blue-700 font-semibold text-lg">SPEED</h5>
                                    </div>
                                    <div className="subheading-why-us text-center mt-3">
                                        <h5 className="text-black font-semibold text-base">
                                            タイムリーなデータ分析
                                        </h5>
                                    </div>
                                    <div className="para-why-us mt-2">
                                        <p className="text-black font-medium text-justify text-sm">
                                            国内外問わずKPIを常にモニタリングし、スムーズな情報共有と意思決定を実現します。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="platform-sec bg-gray-50 w-full mx-auto py-20 bg-no-repeat bg-top bg-platform-us bg-[url('/bg/bg-platform.svg')]">
                    <div className="container max-w-screen-lg mx-auto">
                        <div className="block md:flex lg:flex xl:flex justify-between">
                            <div className="px-4 md:px-0 lg:px-0 xl:px-0 content text-justify md:pr-8 lg:pr-8 xl:pr-8">
                                <h2 className="text-black text-center md:text-left lg:text-left xl:text-left font-semibold text-3xl leading-loose">
                                    プラットフォーム
                                </h2>
                                <div className="pt-6">
                                    <p className="text-base text-black-800 leading-7 tracking-wider font-medium">
                                        Insight Global は、経営陣および運用メンバー向けのワンストップ
                                        ソリューションであり、チームがデータから意思決定を迅速に行うのに役立つリアルタイムの分析および計画プラットフォームを提供します。
                                    </p>
                                </div>
                                <div className="platform-icon pt-4">
                                    <div className="icon-1 pt-2 flex justify-items-stretch items-center">
                                        <div className="icon-img">
                                            <Image
                                                className="mx-auto"
                                                src="/icon/icon_1.svg"
                                                alt="platform-icon-image"
                                                width={40}
                                                height={40}
                                                priority />
                                        </div>
                                        <div className="icon-heading pl-4">
                                            <p className="text-base text-blue-800 font-semibold underline underline-offset-2 md:underline-offset-0 lg:underline-offset-0 xl:underline-offset-0">
                                                ワークフロー管理・文書管理
                                            </p>
                                        </div>
                                    </div>
                                    <div className="icon-1 pt-2 flex justify-items-stretch items-center">
                                        <div className="icon-img">
                                            <Image
                                                className="mx-auto"
                                                src="/icon/icon_2.svg"
                                                alt="platform-icon-image"
                                                width={40}
                                                height={40}
                                                priority />
                                        </div>
                                        <div className="icon-heading pl-4">
                                            <p className="text-base text-blue-800 font-semibold underline underline-offset-2 md:underline-offset-0 lg:underline-offset-0 xl:underline-offset-0">
                                                財務プロセスの自動化
                                            </p>
                                        </div>
                                    </div>
                                    <div className="icon-1 pt-2 flex justify-items-stretch items-center">
                                        <div className="icon-img">
                                            <Image
                                                className="mx-auto"
                                                src="/icon/icon_3.svg"
                                                alt="platform-icon-image"
                                                width={40}
                                                height={40}
                                                priority />
                                        </div>
                                        <div className="icon-heading pl-4">
                                            <p className="text-base text-blue-800 font-semibold underline underline-offset-2 md:underline-offset-0 lg:underline-offset-0 xl:underline-offset-0">
                                                レポーティング分析
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-list pt-8 text-center md:text-left lg:text-left xl:text-left">
                                    <a
                                        href="#"
                                        className="px-16 py-3 md:px-10 lg:px-10 xl:px-10 text-sm md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white"
                                    >
                                        詳しく見る
                                    </a>
                                </div>
                            </div>
                            <div className="content-img relative">
                                <div className="platform-bg-img relative top-10 left-0">
                                    <Image
                                        className="platform-bg"
                                        src="/platform.svg"
                                        alt="Insight-Global-Platform-Bg"
                                        width={450}
                                        height={60}
                                        priority />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="platform-1 shadow shadow-gray-500/50 rounded-2xl bg-blue-800 mt-24 container max-w-screen-lg mx-auto">
                        <div className="block md:flex lg:flex xl:flex justify-between px-5 md:px-10 lg:px-10 xl:px-10 py-3">
                            <div className="content text-justify pt-7">
                                <h4 className="text-xl md:text-2xl text-white font-bold pb-4">
                                    Insight Globalでもっと会社経営を
                                </h4>
                                <h4 className="text-xl md:text-2xl lg:md:text-2xl xl:md:text-2xl text-white font-semibold pb-4">
                                    変えてみませんか？
                                </h4>
                                <div className="btn-list grid md:flex lg:flex xl:flex justify-items-stretch pt-5">
                                    <a
                                        href="#"
                                        className="py-3 md:px-10 lg:px-10 xl:px-10 text-sm text-sky-700 text-center font-semibold border border-transparent rounded-3xl bg-white hover:bg-white"
                                    >
                                        資料ダウンロード
                                    </a>
                                    <a
                                        href="#"
                                        className="mt-5 md:mt-0 lg:mt-0 xl:mt-0 py-3 md:px-10 lg:px-10 xl:px-10 text-sm md:mx-2 text-white text-center font-semibold border border-white rounded-3xl"
                                    >
                                        オンラインデモ
                                    </a>
                                </div>
                            </div>
                            <div className="content-img relative top-3 pb-5 md:pb-0 lg:pb-0 xl:pb-0">
                                <div className="footer-bg-img">
                                    <Image
                                        className="Footer-bg"
                                        src="web-dev.svg"
                                        alt="Insight-Global-Footer-Bg"
                                        width={330}
                                        height={0}
                                        priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 md:px-0 lg:px-0 xl:px-0 Product-sec max-w-screen-2xl mx-auto w-full">
                    <div className="max-w-screen-xl pt-5 py-20 items-center mx-auto w-full bg-white">
                        <div className="relative top-12">
                            <div className="text-center relative bottom-2.5">
                                <h5 className="text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">
                                    画面で見るInsight Global
                                </h5>
                            </div>
                            <div className="para pt-5 text-justify md:text-center lg:text-center xl:text-center leading-7">
                                <p className="text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider">
                                    弊社のInsight Global を活用することで、
                                </p>
                                <p className="text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider">
                                    現地のあらゆるデータをクラウドで吸い上げ、ダッシュボードとして提示します。
                                </p>
                                <p className="text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider">
                                    情報収集プロセスのほとんどが自動で行えるため管理工数も圧縮され、
                                </p>
                                <p className="text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider">
                                    経営判断の精度もスピードも向上します。
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-9 md:mt-0 lg:mt-0 xl:mt-0">
                            <h1 className="text-7xl md:text-9xl lg:text-9xl xl:text-9xl uppercase font-bold stroke-full text-sky-100">
                                Product
                            </h1>
                        </div>
                    </div>
                </div>
                {/* Image Carousel Slider Start */}
                <ImageCarouselSlider></ImageCarouselSlider>  
                {/* Image Carousel Slider End*/}              
                <div className="px-4 md:px-0 lg:px-0 xl:px-0 service-sec bg-white max-w-screen-2xl mx-auto w-full">
                    <div className="max-w-screen-xl pt-5 py-20 items-center mx-auto w-full bg-white">
                        <div className="relative top-12">
                            <div className="text-center relative bottom-2.5">
                                <h5 className="text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">
                                    幅広いサービス活用事例
                                </h5>
                            </div>
                            <div className="para pt-5 text-justify md:text-center lg:text-center xl:text-center leading-7">
                                <p className="text-black font-medium text-base md:text-md lg:text-md xl:text-md tracking-wider">
                                    Insight Global
                                    は、事業内容や課題に合わせて、多彩なカスタマイズが可能です。
                                </p>
                                <p className="text-black font-medium text-md tracking-wider">
                                    例えば、複数拠点での在庫管理を一元化する。
                                </p>
                            </div>
                        </div>
                        <div className="max-w-4xl mx-auto pt-28">
                           
                            <div className="block md:flex lg:flex xl:flex justify-between">
                                <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2">
                                    <div className="list-no">
                                        <h1 className="text-3xl font-bold text-sky-200">01</h1>
                                    </div>
                                    <div className="items-center text-center">
                                        <div className="service-img pt-3">
                                            <Image
                                                className="service-img mx-auto"
                                                src="/service/service-1.svg"
                                                alt="Insight-Global-Service-Img"
                                                width={200}
                                                height={100}
                                                priority />
                                        </div>
                                        <div className="heading pt-5">
                                            <h5 className="text-sm md:text-base lg:text-base xl:text-base text-black font-medium">
                                                海外子会社の管理<br></br>
                                                モニタリング
                                            </h5>
                                        </div>
                                        <div className="down-arrow mx-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={3}
                                                stroke="currentColor"
                                                className="w-6 h-10 text-gray-300 mx-auto"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <div className="readmore-btn">
                                            <a
                                                href="#"
                                                className="uppercase text-base font-medium text-blue-400"
                                            >
                                                MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                                    <div className="list-no">
                                        <h1 className="text-3xl font-bold text-sky-200">02</h1>
                                    </div>
                                    <div className="items-center text-center">
                                        <div className="service-img pt-3">
                                            <Image
                                                className="service-img mx-auto"
                                                src="/service/service-2.svg"
                                                alt="Insight-Global-Service-Img"
                                                width={200}
                                                height={100}
                                                priority />
                                        </div>
                                        <div className="heading pt-5">
                                            <h5 className="text-sm md:text-base lg:text-base xl:text-base text-black font-medium">
                                                国内子会社<br></br>
                                                支店の経営管理強化
                                            </h5>
                                        </div>
                                        <div className="down-arrow mx-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={3}
                                                stroke="currentColor"
                                                className="w-6 h-10 text-gray-300 mx-auto"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <div className="readmore-btn">
                                            <a
                                                href="#"
                                                className="uppercase text-base font-medium text-blue-400"
                                            >
                                                MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                                    <div className="list-no">
                                        <h1 className="text-3xl font-bold text-sky-200">03</h1>
                                    </div>
                                    <div className="items-center text-center">
                                        <div className="service-img pt-3">
                                            <Image
                                                className="service-img mx-auto"
                                                src="/service/service-3.svg"
                                                alt="Insight-Global-Service-Img"
                                                width={200}
                                                height={100}
                                                priority />
                                        </div>
                                        <div className="heading pt-5">
                                            <h5 className="text-sm md:text-base lg:text-base xl:text-base text-black font-medium">
                                                デューデリシャス
                                            </h5>
                                        </div>
                                        <div className="down-arrow mx-auto pt-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={3}
                                                stroke="currentColor"
                                                className="w-6 h-10 text-gray-300 mx-auto"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <div className="readmore-btn pt-3">
                                            <a
                                                href="#"
                                                className="uppercase text-base font-medium text-blue-400"
                                            >
                                                MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-7 block md:flex lg:flex xl:flex justify-between">
                                <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                                    <div className="list-no">
                                        <h1 className="text-3xl font-bold text-sky-200">04</h1>
                                    </div>
                                    <div className="items-center text-center">
                                        <div className="service-img pt-3">
                                            <Image
                                                className="service-img mx-auto"
                                                src="/service/service-4.svg"
                                                alt="Insight-Global-Service-Img"
                                                width={200}
                                                height={100}
                                                priority />
                                        </div>
                                        <div className="heading pt-5">
                                            <h5 className="text-sm md:text-base lg:text-base xl:text-base text-black font-medium">
                                                ベンチャー企業支援
                                            </h5>
                                        </div>
                                        <div className="down-arrow mx-auto pt-6">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={3}
                                                stroke="currentColor"
                                                className="w-6 h-10 text-gray-300 mx-auto"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <div className="readmore-btn">
                                            <a
                                                href="#"
                                                className="uppercase text-base font-medium text-blue-400"
                                            >
                                                MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                                    <div className="list-no">
                                        <h1 className="text-3xl font-bold text-sky-200">05</h1>
                                    </div>
                                    <div className="items-center text-center">
                                        <div className="service-img pt-3">
                                            <Image
                                                className="service-img mx-auto"
                                                src="/service/service-5.svg"
                                                alt="Insight-Global-Service-Img"
                                                width={200}
                                                height={100}
                                                priority />
                                        </div>
                                        <div className="heading pt-5">
                                            <h5 className="text-sm md:text-base lg:text-base xl:text-base text-black font-medium">
                                                複数経営管理側面<br></br>
                                                の連携
                                            </h5>
                                        </div>
                                        <div className="down-arrow mx-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={3}
                                                stroke="currentColor"
                                                className="w-6 h-10 text-gray-300 mx-auto"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <div className="readmore-btn">
                                            <a
                                                href="#"
                                                className="uppercase text-base font-medium text-blue-400"
                                            >
                                                MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-2 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
                                    <div className="list-no">
                                        <h1 className="text-3xl font-bold text-sky-200">06</h1>
                                    </div>
                                    <div className="items-center text-center">
                                        <div className="service-img-sec pt-3">
                                            <Image
                                                className="service-img mx-auto"
                                                src="/service/service-6.svg"
                                                alt="Insight-Global-Service-Img"
                                                width={200}
                                                height={100}
                                                priority />
                                        </div>
                                        <div className="heading pt-5">
                                            <h5 className="text-sm md:text-base lg:text-base xl:text-base text-black font-medium">
                                                経営陣、管理職への<br></br>
                                                レポーティング
                                            </h5>
                                        </div>
                                        <div className="down-arrow mx-auto">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={3}
                                                stroke="currentColor"
                                                className="w-6 h-10 text-gray-300 mx-auto"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <div className="readmore-btn">
                                            <a
                                                href="#"
                                                className="uppercase text-base font-medium text-blue-400"
                                            >
                                                MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 md:px-0 lg:px-0 xl:px-0 intro-flow-sec bg-gray-50 w-full mx-auto bg-no-repeat bg-top bg-platform-us bg-[url('/bg/bg-case-study.svg')]">
                    <div className="max-w-screen-xl py-7  items-center mx-auto w-full">
                        <div className="relative md:top-12">
                            <div className="text-center relative md:bottom-2.5 lg:bottom-2.5 xl:bottom-2.5">
                                <h5 className="text-black text-3xl font-bold">導入事例</h5>
                            </div>
                            <div className="para pt-5 text-justify md:text-center lg:text-center xl:text-center leading-7">
                                <p className="text-black font-medium text-md tracking-wider">
                                    INSIGHT
                                    GLOBALは、事業内容や課題に合わせて、多彩なカスタマイズが可能です。
                                </p>
                                <p className="text-black font-medium text-md tracking-wider">
                                    例えば、複数拠点での在庫管理を一元化する。
                                </p>
                            </div>
                            <div className="max-w-screen-lg mx-auto pt-14">
                                <div className="block md:flex lg:flex xl:flex justify-between">
                                    <div className="case-study-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mx-0 md:mx-3 lg:mx-3 xl:mx-3 bg-white shadow-lg rounded-md pt-0 py-5">
                                        <div className="items-center text-justify">
                                            <div className="case-study-img-sec">
                                                <Image
                                                    className="case-study-img w-full"
                                                    src="/case-study/case-study-img-1.svg"
                                                    alt="Insight-Global-Case-Study-Img"
                                                    width={300}
                                                    height={100}
                                                    priority />
                                            </div>
                                            <div className="px-4">
                                                <div className="heading pt-5">
                                                    <p className="text-blue-700 text-base font-semibold leading-7">
                                                        多種多様な化粧品の在庫を見える化！
                                                        有効なキャンペーンが立案でき、スタッフの工数も圧縮
                                                    </p>
                                                    <p className="text-black text-base mt-3 font-medium">
                                                        株式会社hogehoge
                                                    </p>
                                                </div>
                                                <div className="btn-list mt-5 flex justify-items-center">
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        業界
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        会社規模
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        導入内容
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="case-study-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mt-10 md:mt-0 lg:mt-0 mx-0 md:mx-3 lg:mx-3 xl:mx-3 bg-white shadow-lg rounded-md pt-0 py-5">
                                        <div className="items-center text-justify">
                                            <div className="case-study-img-sec">
                                                <Image
                                                    className="case-study-img w-full"
                                                    src="/case-study/case-study-img-2.svg"
                                                    alt="Insight-Global-Case-Study-Img"
                                                    width={300}
                                                    height={100}
                                                    priority />
                                            </div>
                                            <div className="px-4">
                                                <div className="heading pt-5">
                                                    <p className="text-blue-700 text-base font-semibold leading-7">
                                                        M＆Aのデューデリ時に、INSIGHT
                                                        GLOBALを導入！隠れていた“不正”が浮き彫りに
                                                    </p>
                                                    <p className="text-black text-base mt-3 font-medium">
                                                        株式会社hogehoge
                                                    </p>
                                                </div>
                                                <div className="btn-list mt-5 flex justify-items-stretch">
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        業界
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        会社規模
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        導入内容
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="case-study-card bg-white w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mt-10 md:mt-0 lg:mt-0 mx-0 md:mx-3 lg:mx-3 xl:mx-3 shadow-lg rounded-md pt-0 py-5">
                                        <div className="items-center text-justify">
                                            <div className="case-study-img-sec">
                                                <Image
                                                    className="case-study-img w-full"
                                                    src="/case-study/case-study-img-3.svg"
                                                    alt="Insight-Global-Case-Study-Img"
                                                    width={300}
                                                    height={100}
                                                    priority />
                                            </div>
                                            <div className="px-4">
                                                <div className="heading pt-5">
                                                    <p className="text-blue-700 text-base font-semibold leading-7">
                                                        取引先からの売掛金の回収に苦戦
                                                        ツール導入で課題を特定しキャッシュフローを改善
                                                    </p>
                                                    <p className="text-black text-base mt-3 font-medium">
                                                        株式会社hogehoge
                                                    </p>
                                                </div>
                                                <div className="btn-list mt-5 flex justify-items-stretch">
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        業界
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        会社規模
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                                                    >
                                                        導入内容
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-list w-full text-center pt-16 py-12">
                                <a
                                    href="#"
                                    className="p-2 text-sm lg:px-4 md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white"
                                >
                                    導入事例一覧を見る
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 md:px-0 lg:px-0 xl:px-0 case-study-sec bg-white w-full mx-auto py-0">
                    <div className="max-w-screen-xl pt-5 py-20 items-center mx-auto w-full">
                        <div className="relative top-12">
                            <div className="text-center relative bottom-2.5">
                                <h5 className="text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">導入の流れ</h5>
                            </div>
                            <div className="para pt-5 text-justify md:text-center lg:text-center xl:text-center leading-7">
                                <p className="text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider">
                                    まずはお気軽にお問い合わせください。
                                </p>
                                <p className="text-black font-medium text-sm md:text-md lg:text-md xl:text-md tracking-wider">
                                    貴社のご要望に応じて、プランをご提案させていただきます。
                                </p>
                            </div>
                            <div className="stepper pt-10 justify-center">
                                <ul className="max-w-screen-lg justify-center mx-auto inline-block lg:flex xl:flex 2xl:flex">
                                    <li className="light-blue">
                                        <div className="content text-base font-semibold text-black">01 お問い合わせ</div>
                                    </li>
                                    <li className="sky-blue">
                                        <div className="content text-base font-semibold text-white">02 ヒアリング・ご提案</div>
                                    </li>
                                    <li className="sky-high">
                                        <div className="content text-base font-semibold text-white">03 お見積り</div>
                                    </li>
                                    <li className="high-blue">
                                        <div className="content text-base font-semibold text-white">04 ご契約・導入</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-list w-full text-center pt-16 py-12">
                                <a
                                    href="#"
                                    className="p-2 text-sm lg:px-4 md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white"
                                >
                                    導入までの流れを詳しく見る
                                </a>
                            </div>
                            {/* <ReactCardSlider slides={slides}/> */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
