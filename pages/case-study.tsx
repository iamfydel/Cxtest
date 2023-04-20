"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../components/header";
import Footer from "../components/footer";


export default function CaseStudy(){
   const responsive = {
      superLargeDesktop: {        
        breakpoint: { max: 4000, min: 3000 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return(
        <>
    <Header></Header>
    <main className="Solution-Page bg-white pt-10">
         {/* Section-1 */}
         <section className="bg-white pt-24 py-10">
         <Carousel className="max-w-screen-xl mx-auto" responsive={responsive}>
         <div className="case-study-card w-full md:w-10/12 lg:w-10/12 xl:w-10/12mx-0 md:mx-3 lg:mx-3 xl:mx-3 bg-white shadow-lg rounded-md pt-0 py-5">
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
                  <div className="case-study-card w-full md:w-10/12 lg:w-10/12 xl:w-10/12 mt-10 md:mt-0 lg:mt-0 mx-0 md:mx-3 lg:mx-3 xl:mx-3 bg-white shadow-lg rounded-md pt-0 py-5">
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
                  <div className="case-study-card bg-white w-full md:w-10/12 lg:w-10/12 xl:w-10/12 mt-10 md:mt-0 lg:mt-0 mx-0 md:mx-3 lg:mx-3 xl:mx-3 shadow-lg rounded-md pt-0 py-5">
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
                  <div className="case-study-card bg-white w-full md:w-10/12 lg:w-10/12 xl:w-10/12 mt-10 md:mt-0 lg:mt-0 mx-0 md:mx-3 lg:mx-3 xl:mx-3 shadow-lg rounded-md pt-0 py-5">
                    <div className="items-center text-justify">
                      <div className="case-study-img-sec">
                        <Image
                          className="case-study-img w-full h-48"
                          src="/case-study/case-study-img-8.svg"
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
        </Carousel>
         </section>
         <section className="bg-white">
            <div className="max-w-screen-lg mx-auto py-7 lg:py-20 xl:py-20 2xl:py-20">
               <div className="visualization-1 block lg:flex xl:flex 2xl:flex justify-around">
                  <div className="visualization-img pr-0 lg:pr-10 xl:pr-10 2xl:pr-10"> 
                  <Image
                        className="mx-auto hidden lg:block xl:block 2xl:block"
                        src="/case-study/case-study-img-5.svg"
                        alt="Insight-Global-Solutions-Frame"
                        width={350}
                        height={525}
                        priority
                     />                    
                     <Image
                        className="w-full block lg:hidden xl:hidden 2xl:hidden"
                        src="/case-study/case-study-img-5.svg"
                        alt="Insight-Global-Solutions-Frame"
                        width={350}
                        height={525}
                        priority
                     />
                  </div>
                  <div className="visualization-content mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 px-4 lg:px-0 xl:px-0 2xl:px-0">
                     <div className="heading">
                        <h1 className="text-blue-800 text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-extrabold leading-10 tracking-widest">多種多様な化粧品の在庫を見える化
                           有効なキャンペーンが立案でき、スタッフの工数も圧縮。</h1>
                     </div>
                     <div className="btn-list mt-7 inline-block lg:flex xl:flex 2xl:flex justify-items-stretch">
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                        >
                           化粧品メーカー
                        </a>
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                        >
                           会社規模
                        </a>
                        <a
                           href="#"
                           className="w-fit inline-block float-left mt-5 lg:mt-0 xl:mt-0 2xl:mt-0 p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                        >
                           海外倉庫の在庫可視化
                        </a>
                     </div>
                     <div className="para mt-10">
                        <p className="text-black text-base leading-7 text-justify tracking-widest">国内工場で製造、タイと中国（上海）で販売を行う化粧品メーカーA社は、多品種小ロットの製品を抱える企業。そもそも化粧品ビジネスは、ターゲットによる製品特性の違いやスキンケア・メイクなど用途によるカテゴリーが豊富で管理が煩雑になりやすい業種です。</p>
                        <p className="text-black text-base leading-7 text-justify tracking-widest mt-5">
                           また、消費期限の問題もあり在庫管理の精度が収益率を左右する側面もあります。さらに、A社は複数拠点で製造販売を行うため、拠点ごとの在庫管理にスタッフの工数を割かれていました。</p>
                        <p className="text-black text-base leading-7 text-justify tracking-widest mt-5">そこで、複数拠点の在庫情報をINSIGHT GLOBALで一元管理。適正在庫をシミュレーションできるようになったほか、時期や顧客の種別による販売傾向まで分析。販売計画の精度を高め、消費期限を先取りしたセールなども仕掛けられるように。</p>
                        <p className="text-black text-base leading-7 text-justify tracking-widest mt-5">もちろん、スタッフの工数も大幅に圧縮できたのです。</p>
                     </div>
                     <div className="block lg:flex xl:flex 2xl:flex items-stretch mt-10">
                        <div className="icons-section">
                           <div className="icon">
                              <div className="flex justify-between mr-8">
                                 <div className="icon-sec mr-8">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-1.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                                 <div className="icon-sec">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-2.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="icon mt-5">
                              <div className="flex justify-between mr-8">
                                 <div className="icon-sec mr-8">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-3.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                                 <div className="icon-sec">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-4.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="desktop-img mt-5 lg:mt-0 xl:mt-0 2xl:mt-0">
                           <Image
                              className="mx-auto"
                              src="/case-study/desktop-1.svg"
                              alt="Insight-Global-Desktop-Content"
                              width={300}
                              height={500}
                              priority
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Section-2 */}
         <section className="bg-gray-100">
            <div className="max-w-screen-lg mx-auto py-7 lg:py-20 xl:py-20 2xl:py-20">
               <div className="visualization-1 block lg:flex xl:flex 2xl:flex justify-between">
                  <div className="visualization-content sm:order-last md:order-last lg:order-first xl:order-first 2xl:order-first pr-4 lg:pr-10 xl:pr-10 2xl:pr-10 mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 px-4 lg:px-0 xl:px-0 2xl:px-0">
                     <div className="heading">
                        <h1 className="text-blue-800 text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-extrabold leading-10 tracking-widest">M＆Aのデューデリ時に、INSIGHT GLOBALを導入！隠れていた“不正”が浮き彫りに</h1>
                     </div>
                     <div className="btn-list mt-7 inline-block lg:flex xl:flex 2xl:flex justify-items-stretch">
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-white font-semibold rounded-3xl"
                        >
                           食品メーカー
                        </a>
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-white font-semibold rounded-3xl"
                        >
                           会社規模
                        </a>
                        <a
                           href="#"
                           className="w-fit inline-block float-left mt-5 lg:mt-0 xl:mt-0 2xl:mt-0 p-2 text-sm mx-2 text-black text-center bg-white font-semibold rounded-3xl"
                        >
                           海外倉庫の在庫可視化
                        </a>
                     </div>
                     <div className="para mt-10">
                        <p className="text-black text-base leading-7 text-justify tracking-widest">M＆Aのデューデリ時に、INSIGHT GLOBALを導入。隠れていた“不正”が浮き彫りに。</p>
                        <p className="text-black text-base leading-7 text-justify tracking-widest mt-5">
                           積極的に海外企業のM＆Aを行っていた中堅食品メーカーD社。インド進出の折には提携先を求め多くの企業を検討。一社に的を絞ったところで、将来的な融合に向けINSIGHT GLOBALを導入しました。これによって相手先の経営情報が可視化され、その結果、不審な資金の流れが浮き彫りになったのです。当初からコンサルティングサポートも利用していたD社は、私たちに相談。アジア系企業で時折見られる親族への不正であると掴み、地域にネットワークを持つ弁護士なども含んで対策チームを組成。提携関係を解消し、未来のリスクを事前に防ぐことができました。</p>
                     </div>
                     <div className="block lg:flex xl:flex 2xl:flex items-stretch mt-10">
                        <div className="icons-section">
                           <div className="icon">
                              <div className="flex justify-between mr-8">
                                 <div className="icon-sec mr-8">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-6.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                                 <div className="icon-sec">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-5.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="icon mt-5">
                              <div className="flex justify-between mr-8">
                                 <div className="icon-sec mr-8">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-7.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                                 <div className="icon-sec">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-8.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="desktop-img mt-5 lg:mt-0 xl:mt-0 2xl:mt-0">
                           <Image
                              className="mx-auto"
                              src="/case-study/desktop-2.svg"
                              alt="Insight-Global-Desktop-Content"
                              width={300}
                              height={500}
                              priority
                           />
                        </div>
                     </div>
                  </div>
                  <div className="visualization-img sm:order-first md:order-first lg:order-last xl:order-last 2xl:order-last">                     
                     <Image
                        className="mx-auto hidden lg:block xl:block 2xl:block"
                        src="/case-study/case-study-img-6.svg"
                        alt="Insight-Global-Solutions-Frame"
                        width={350}
                        height={525}
                        priority
                     />                    
                     <Image
                        className="w-full block lg:hidden xl:hidden 2xl:hidden mt-7"
                        src="/case-study/case-study-img-6.svg"
                        alt="Insight-Global-Solutions-Frame"
                        width={350}
                        height={525}
                        priority
                     />
                  </div>
               </div>
            </div>
         </section>
         {/* Section-3 */}
         <section className="bg-white">
            <div className="max-w-screen-lg mx-auto py-7 lg:py-20 xl:py-20 2xl:py-20">
               <div className="visualization-1 block lg:flex xl:flex 2xl:flex justify-around">
                  <div className="visualization-img pr-0 lg:pr-10 xl:pr-10 2xl:pr-10">                     
                     <Image
                        className="mx-auto hidden lg:block xl:block 2xl:block"
                        src="/case-study/case-study-img-7.svg"
                        alt="Insight-Global-Solutions-Frame"
                        width={350}
                        height={525}
                        priority
                     />                    
                     <Image
                        className="w-full block lg:hidden xl:hidden 2xl:hidden"
                        src="/case-study/case-study-img-7.svg"
                        alt="Insight-Global-Solutions-Frame"
                        width={350}
                        height={525}
                        priority
                     />
                  </div>
                  <div className="visualization-content mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 px-4 lg:px-0 xl:px-0 2xl:px-0">
                     <div className="heading">
                        <h1 className="text-blue-800 text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-extrabold leading-10 tracking-widest">取引先からの売掛金の回収に苦戦
                           ツール導入で課題を特定しキャッシュフローを改善</h1>
                     </div>
                     <div className="btn-list mt-7 block lg:flex xl:flex 2xl:flex justify-items-stretch">
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                        >
                           自動車メーカー
                        </a>
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                        >
                           会社規模
                        </a>
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-gray-300 font-semibold rounded-3xl"
                        >
                           導入内容
                        </a>
                     </div>
                     <div className="para mt-10">
                        <p className="w-full inline-block mt-5 lg:mt-0 xl:mt-0 2xl:mt-0 text-black text-base text-justify leading-7 tracking-widest">取引先からの売掛金の回収に苦戦。</p>
                        <p className="text-black text-base leading-7 text-justify tracking-widest mt-5">
                           ツール導入で課題を特定しキャッシュフローを改善。</p>
                        <p className="text-black text-base leading-7 text-justify tracking-widest mt-5">3DCADを使い自動車の設計デザインを行うB社はインド人エンジニアを活用し、高い技術力で大手メーカーからも信頼を得ている企業。しかし、海外子会社での売掛金の回収が難題となっていました。取引先の国ごとに商法や商習慣が異なるため、回収に必要以上のパワーがかかってしまうことがあり、入金漏れという事態も少なくありませんでした。</p>
                        <p className="text-black text-base leading-7 text-justify tracking-widest mt-5">そこでINSIGHT GLOBALとコンサルティングサポートを併用。取引先ごとに売掛金管理が行えるようダッシュボードを整備し悪質な取引先を特定。タイムリーに延滞状況や交渉の過程を情報共有し、的を絞って対策を行ったことで短期間で効果的にキャッシュフロー改善が図れたのです。</p>
                     </div>
                     <div className="block lg:flex xl:flex 2xl:flex items-stretch mt-10">
                        <div className="icons-section">
                           <div className="icon">
                              <div className="flex justify-between mr-8">
                                 <div className="icon-sec mr-8">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-6.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                                 <div className="icon-sec">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-9.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="icon mt-5">
                              <div className="flex justify-between mr-8">
                                 <div className="icon-sec">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-8.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="desktop-img mt-5 lg:mt-0 xl:mt-0 2xl:mt-0">
                           <Image
                              className="mx-auto"
                              src="/case-study/desktop-3.svg"
                              alt="Insight-Global-Desktop-Content"
                              width={300}
                              height={500}
                              priority
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Section-4 */}
         <section className="bg-gray-100">
            <div className="max-w-screen-lg mx-auto py-7 lg:py-20 xl:py-20 2xl:py-20">
               <div className="visualization-1 block lg:flex xl:flex 2xl:flex justify-around">
                  <div className="visualization-content pr-4 lg:pr-10 xl:pr-10 2xl:pr-10 mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 px-4 lg:px-0 xl:px-0 2xl:px-0">
                     <div className="heading">
                        <h1 className="text-blue-800 text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-extrabold leading-10 tracking-widest">国ごとに異なる法規制。子会社の資金需要を
                           先取りして、資金の流れを改善。</h1>
                     </div>
                     <div className="btn-list mt-7 inline-block lg:flex xl:flex 2xl:flex justify-items-stretch">
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-white font-semibold rounded-3xl"
                        >
                           建築機械商社
                        </a>
                        <a
                           href="#"
                           className="w-fit inline-block float-left p-2 text-sm mx-2 text-black text-center bg-white font-semibold rounded-3xl"
                        >
                           会社規模
                        </a>
                        <a
                           href="#"
                           className="w-fit inline-block float-left lg:mt-0 xl:mt-0 2xl:mt-0 p-2 text-sm mx-2 text-black text-center bg-white font-semibold rounded-3xl"
                        >
                           導入内容
                        </a>
                     </div>
                     <div className="para mt-10">
                        <p className="text-black text-base leading-7 text-justify tracking-widest">タイやドバイなどで建設機械の販売を行うC社。その課題は、各社が必要な資金を本社に報告してから資金繰りを行うと、法制度などの関係でスムーズに資金手当ができない国があることでした。早め早めに資金計画を立案できれば問題は解決できるものの、突発的なニーズの発生もありタイムリーに送金できないことは、大きな経営課題になっていたのです。
                           そこで、コンサルティングを受けながらINSIGHT GLOBALを使い海外子会社の資金状態を透明化。これにより入金や支払い予定がクリアに。また、送金手続きに時間がかかる国は別途アラートを設定。現地スタッフへの教育コストをかけず、すぐに資金需要に対応できるようになり事業の進度が増したのです。</p>

                     </div>
                     <div className="flex items-end mt-10">
                        <div className="icons-section">
                           <div className="icon">
                              <div className="flex justify-between mr-8">
                                 <div className="icon-sec mr-8">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-1.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                                 <div className="icon-sec">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-5.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="icon mt-5">
                              <div className="flex justify-between mr-8">
                                 <div className="icon-sec mr-8">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-8.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                                 <div className="icon-sec">
                                    <div className="">
                                       <Image
                                          className="mx-auto"
                                          src="/case-study/icon-10.svg"
                                          alt="Insight-Global-Icon"
                                          width={150}
                                          height={50}
                                          priority
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="visualization-img mt-5 lg:mt-0 xl:mt-0 2xl:mt-0">                     
                     <Image
                        className="mx-auto hidden lg:block xl:block 2xl:block"
                        src="/case-study/case-study-img-8.svg"
                        alt="Insight-Global-Solutions-Frame"
                        width={350}
                        height={525}
                        priority
                     />                    
                     <Image
                        className="w-full block lg:hidden xl:hidden 2xl:hidden"
                        src="/case-study/case-study-img-8.svg"
                        alt="Insight-Global-Solutions-Frame"
                        width={350}
                        height={525}
                        priority
                     />
                  </div>
               </div>
               <div className="desktop-img text-center mt-3">
                  <Image
                     className="mx-auto"
                     src="/case-study/desktop-4.svg"
                     alt="Insight-Global-Desktop-Content"
                     width={300}
                     height={500}
                     priority
                  />
               </div>
            </div>
         </section>
      </main>
    <Footer></Footer>
    </>
    )
}