import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Plan(){
    return(
        <><Header></Header>
        <main className="Insight-Global-Page bg-white pt-10">
      <div className="w-full pt-60 lg:py-60 xl:py-60 2xl:py-60 mx-auto bg-cover bg-no-repeat bg-right-top bg-[url('/bg/bg-insight-global.svg')]">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-4 md:px-0 lg:px-0 xl:px-0 absolute bottom-3/4 lg:bottom-0 xl:bottom-0 2xl:bottom-0 lg:top-1/4 xl:top-1/4 2xl:top-1/4 left-auto tracking-widest">
            <h5 className="text-sky-700 text-xl font-semibold">Plan</h5>
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold mt-2">
              導入の流れ
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto py-20 px-4 md:px-0 lg:px-0 xl:px-0">
        <section className="Fee-structure items-center">
          <div className="heading text-center">
            <h1 className="text-3xl font-semibold text-black">料金体系</h1>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex items-center justify-center mt-7">
            <div className="box-heading bg-sky-600 px-10 py-5 text-center">
              <p className="text-white text-lg">導入初期費用</p>
            </div>
            <div className="plus-icon text-center px-5 py-3 lg:py-0 xl:py-0 2xl:py-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" stroke-width="2.5" className="mx-auto bi bi-plus text-gray-500 font-extrabold" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
            <div className="box-heading bg-blue-800 px-10 py-5 text-center">
              <p className="text-white text-lg">メンテナンス費用（月額）</p>
            </div>
          </div>
          <div className="para text-center mt-5">
            <p className="text-black text-xs">※拠点数、ダッシュボードの数によって異なります。</p>
          </div>
        </section>
        <section className="Introduction-flow py-24">
          <div className="heading text-center">
            <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-black">導入の流れ</h1>
          </div>
          <div className="para text-center mt-8">
            <p className="text-black text-sm lg:text-base xl:text-base 2xl:text-base leading-7 tracking-widest">まずはお気軽にお問い合わせください。</p>
            <p className="text-black text-sm lg:text-base xl:text-base 2xl:text-base leading-7 tracking-widest mt-2">貴社のご要望に応じて、プランをご提案させていただきます。</p>
          </div>
          <div className="stepper pt-10 justify-center">
            <ul className="max-w-screen-lg justify-center mx-auto">
              <li className="light-blue">
                <div className="content text-lg lg:text-base xl:text-base 2xl:text-base font-semibold text-black">01 お問い合わせ</div>
              </li>
              <li className="sky-blue">
                <div className="content text-lg lg:text-base xl:text-base 2xl:text-base font-semibold text-white">02 ヒアリング・ご提案</div>
              </li>
              <li className="sky-high">
                <div className="content text-lg lg:text-base xl:text-base 2xl:text-base font-semibold text-white">03 お見積り</div>
              </li>
              <li className="high-blue">
                <div className="content text-lg lg:text-base xl:text-base 2xl:text-base font-semibold text-white">04 ご契約・導入</div>
              </li>
            </ul>
          </div>
          <div className="max-w-screen-sm mx-auto stepper-details mt-10">
            <div className="flex justify-center">
              <div className="items-center">
                <div className="px-8 py-5 text-center step-light-blue">
                  <h5 className="text-sky-600 text-xl">Step</h5>
                  <h1 className="text-4xl uppercase font-extrabold stroke-full stroke-no text-sky-600 tracking-widest">01</h1>
                </div>
              </div>
              <div className="stepper-content pl-4 lg:pl-7 xl:pl-7 2xl:pl-7">
                <h1 className="text-blue-800 font-bold text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl">お問い合わせ</h1>
                <p className="text-black text-base leading-7 -tracking-widest mt-3">まずはお気軽にお問い合わせください。貴社のご要望に応じて、プランをご提案させていただきます。</p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="items-center">
                <div className="px-8 py-5 text-center step-sky-blue">
                  <h5 className="text-white text-xl">Step</h5>
                  <h1 className="text-4xl uppercase font-extrabold stroke-full stroke-no text-white tracking-widest">02</h1>
                </div>
              </div>
              <div className="stepper-content pl-4 lg:pl-7 xl:pl-7 2xl:pl-7">
                <h1 className="text-blue-800 font-bold text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl">ヒアリング・ご提案</h1>
                <p className="text-black text-base leading-7 -tracking-widest mt-3">お客様の課題や、ご要望を伺いながら、前提条件となる経営情報の構成や、データー収集方法についてヒアリングをさせていただき、貴社のプロセス・システムの理解をさせていただきます。</p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="items-center">
                <div className="px-8 py-5 text-center step-sky-high">
                  <h5 className="text-white text-xl">Step</h5>
                  <h1 className="text-4xl uppercase font-extrabold stroke-full stroke-no text-white tracking-widest">03</h1>
                </div>
              </div>
              <div className="stepper-content pl-4 lg:pl-7 xl:pl-7 2xl:pl-7">
                <h1 className="text-blue-800 font-bold text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl">お見積り</h1>
                <p className="text-black text-base leading-7 -tracking-widest mt-3">経営管理ツールに表示するための必要情報の洗い出しを行い、経営管理のためのＫＰＩレポーティングのためのデモ版のフォーマットをご提示致します。</p>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="items-center">
                <div className="px-8 py-5 text-center step-high-blue">
                  <h5 className="text-white text-xl">Step</h5>
                  <h1 className="text-4xl uppercase font-extrabold stroke-full stroke-no text-white tracking-widest">04</h1>
                </div>
              </div>
              <div className="stepper-content pl-4 lg:pl-7 xl:pl-7 2xl:pl-7">
                <h1 className="text-blue-800 font-bold text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl">ご契約・導入</h1>
                <p className="text-black text-base leading-7 -tracking-widest mt-3">データ収集のプロセスを構築いたします。データ分析手続を運用し、適時に経営実態が把握できる体制を構築いたします。</p>
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
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        </section>
        <section className="Customer-oriented py-20">
          <div className="heading text-center">
            <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold text-sky-700">お客様に寄り添った<span className="text-black">サポート体制</span></h1>
          </div>
          <div className="para text-center mt-8">
            <p className="text-black text-sm lg:text-base xl:text-base 2xl:text-base leading-7 tracking-widest">導入後もお客様が安心してサービスをご利用いただけるようしっかりとサポートさせていただきます。</p>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex justify-between">
            <div className="workflow px-0 lg:px-20 xl:px-20 2xl:px-20 py-5">
              <div className="workflow-img">
                <Image
                  className="mx-auto"
                  src="/about-us/support_01.svg"
                  alt="Insight-Global-About-Us-Icon"
                  width={250}
                  height={250}
                  priority
                />
              </div>
              <div className="workflow-heading mt-5">
                <h5 className="text-black text-center font-semibold">
                  さまざまな言語に対応
                </h5>
                <div className="text-justify">
                  <p className="pt-4 text-base text-black tracking-wider leading-7">
                    本ツールにはビジネスに特化した多言語翻訳機能を搭載。精度の高い翻訳により、安心して現地スタッフとスムーズなコミュニケーションを取ることができます。
                  </p>
                </div>
              </div>
            </div>
            <div className="workflow px-0 lg:px-20 xl:px-20 2xl:px-20 py-5">
              <div className="workflow-img">
                <Image
                  className="mx-auto"
                  src="/about-us/support_02.svg"
                  alt="Insight-Global-About-Us-Icon"
                  width={250}
                  height={250}
                  priority
                />
              </div>
              <div className="workflow-heading mt-5">
                <h5 className="text-black text-center font-semibold">
                  チャット活用でタイムリーな会話
                </h5>
                <div className="text-justify">
                  <p className="pt-4 text-base text-black tracking-wider leading-7">
                    現地とのコミュニケーションを気軽に取れるチャットツールを搭載。表やグラフを見ながらスピーディーに会話ができ、スムーズな情報共有と意思決定を実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-5">
            <a
              href="#"
              className="py-3 px-14 md:px-10 lg:px-10 xl:px-10 bg-gradient-to-r from-blue-800 to-sky-600 p-2 md:mx-2 text-sm text-white text-center font-semibold rounded-3xl transition-colors duration-700"
            >
              機能について詳しく見る
            </a>
          </div>
        </section>
        <section className="case-studies">
          <div className="text-center relative bottom-2.5">
            <h5 className="text-black text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold">Insight Globalを導入した企業の事例をご紹介</h5>
          </div>
          <div className="max-w-screen-lg mx-auto pt-16 lg:pt-28 xl:pt-28 2xl:pt-28">
            <div className="block lg:flex xl:flex 2xl:flex justify-between">
              <div className="case-study-card lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-0 lg:mx-3 xl:mx-3 2xl:mx-3 bg-white shadow-lg rounded-md pt-0 py-5">
                <div className="items-center text-justify">
                  <div className="case-study-img-sec">
                    <Image
                      className="case-study-img w-full"
                      src="/case-study/case-study-img-1.svg"
                      alt="Insight-Global-Case-Study-Img"
                      width={300}
                      height={100}
                      priority
                    />
                  </div>
                  <div className="px-4">
                    <div className="heading pt-5">
                      <p className="text-blue-700 text-base font-semibold leading-7">
                        多種多様な化粧品の在庫を見える化！
                        有効なキャンペーンが立案でき、スタッフの工数も圧縮
                      </p>
                      <p className="text-gray-700 text-base mt-3 font-medium">
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
              <div className="case-study-card lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-0 lg:mx-3 xl:mx-3 2xl:mx-3 mt-7 lg:mt-0 xl:mt-0 2xl:mt-0 bg-white shadow-lg rounded-md pt-0 py-5">
                <div className="items-center text-justify">
                  <div className="case-study-img-sec">
                    <Image
                      className="case-study-img w-full"
                      src="/case-study/case-study-img-2.svg"
                      alt="Insight-Global-Case-Study-Img"
                      width={300}
                      height={100}
                      priority
                    />
                  </div>  
                  <div className="px-4">
                    <div className="heading pt-5">
                      <p className="text-blue-700 text-base font-semibold leading-7">
                        M＆Aのデューデリ時に、INSIGHT
                        GLOBALを導入！隠れていた“不正”が浮き彫りに
                      </p>
                      <p className="text-gray-700 text-base mt-3 font-medium">
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
              <div className="case-study-card lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-0 lg:mx-3 xl:mx-3 2xl:mx-3 mt-7 lg:mt-0 xl:mt-0 2xl:mt-0 bg-white shadow-lg rounded-md pt-0 py-5">
                <div className="items-center text-justify">
                  <div className="case-study-img-sec">
                    <Image
                      className="case-study-img w-full"
                      src="/case-study/case-study-img-3.svg"
                      alt="Insight-Global-Case-Study-Img"
                      width={300}
                      height={100}
                      priority
                    />
                  </div>
                  <div className="px-4">
                    <div className="heading pt-5">
                      <p className="text-blue-700 text-base font-semibold leading-7">
                        取引先からの売掛金の回収に苦戦
                        ツール導入で課題を特定しキャッシュフローを改善
                      </p>
                      <p className="text-gray-700 text-base mt-3 font-medium">
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
              className="py-3 px-14 md:px-10 lg:px-10 xl:px-10 text-sm md:mx-2 text-white text-center font-semibold rounded-3xl bg-gradient-to-r from-blue-800 to-sky-600 hover:bg-white"
            >
              事例をもっと見る
            </a>
          </div>
        </section>
      </div>
    </main>
    <Footer></Footer>
        </>        
    )
}