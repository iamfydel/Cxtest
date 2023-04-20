"use client";
import Image from "next/image";
import Tabs from "../components/tab";
import Header from "../components/header";
import Footer from "../components/footer";
import SlideToggle from '../components/slide-toggle'


export default function InsightGlobal(){
    return(
<><Header></Header>
    <main className="Insight-Global-Page bg-white pt-10">
      <div className="w-full pt-60 lg:py-60 xl:py-60 2xl:py-60 mx-auto bg-cover bg-no-repeat bg-right-top bg-[url('/bg/bg-insight-global.svg')]">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-4 md:px-0 lg:px-0 xl:px-0 absolute bottom-3/4 lg:bottom-0 xl:bottom-0 2xl:bottom-0 lg:top-1/4 xl:top-1/4 2xl:top-1/4 left-auto tracking-widest">
            <h5 className="text-sky-700 text-xl font-semibold">About Us</h5>
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold mt-2">
              Insight Globalとは
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto bg-no-repeat bg-left-top bg-[url('/bg/bg-mech-growth.svg')]">
        <div className="text-center relative py-12 lg:py-20 xl:py-20 2xl:py-20">
          <h5 className="text-black text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold">
            <span className="text-sky-700">成長をサポート</span>する仕組み
          </h5>
        </div>
        <div className="justify-center">
          <Image
            className="about-us-img mx-auto"
            src="/about-us/platform.svg"
            alt="Insight-Global-About-Us-Img"
            width={500}
            height={400}
            priority />
        </div>
        <div className="max-w-5xl mx-auto mt-28 lg:mt-14 xl:mt-14 2xl:mt-14">
          <Tabs></Tabs>
          <div className="text-center py-10 w-full">
            <a
              href="#"
              className="p-2 px-14 py-3 lg:px-8 md:px-6 bg-gradient-to-r from-blue-800 to-sky-600 text-sm text-white text-center font-semibold rounded-3xl transition-colors duration-700"
            >
              資料ダウンロード
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-20 px-4 md:px-0 lg:px-0 xl:px-0 bg-no-repeat bg-left-top bg-[url('/bg/bg-point.svg')]">
        <div className="text-center relative">
          <h5 className="text-black text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold">
            データ管理も<span className="text-sky-700">安心</span>
          </h5>
          <p className="pt-10 text-black text-sm lg:text-base xl:text-base 2xl:text-base">
            初心者でも安心してデータ管理ができる仕組みを揃えています
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl uppercase font-bold stroke-full text-white tracking-widest">
            Point
          </h1>
        </div>
        <div className="max-w-5xl mx-auto relative bottom-5">
          <div className="block lg:flex xl:flex 2xl:flex justify-center">
            <div className="point-sale p-5 text-center">
              <div className="point-sale-img">
                <Image
                  className="mx-auto"
                  src="/about-us/point-sale-1.svg"
                  alt="Insight-Global-About-Us-point-sale"
                  width={350}
                  height={350}
                  priority />
              </div>
              <div className="para mt-1">
                <h4 className="text-black text-lg font-medium">
                  データの一元管理
                </h4>
              </div>
            </div>
            <div className="point-sale p-5 text-center">
              <div className="point-sale-img">
                <Image
                  className="mx-auto"
                  src="/about-us/point-sale-2.svg"
                  alt="Insight-Global-About-Us-point-sale"
                  width={350}
                  height={350}
                  priority />
              </div>
              <div className="para mt-1">
                <h4 className="text-black text-lg font-medium">
                  豊富なエクセルテンプレート
                </h4>
              </div>
            </div>
            <div className="point-sale p-5 text-center">
              <div className="point-sale-img">
                <Image
                  className="mx-auto"
                  src="/about-us/point-sale-3.svg"
                  alt="Insight-Global-About-Us-point-sale"
                  width={350}
                  height={350}
                  priority />
              </div>
              <div className="para mt-1">
                <h4 className="text-black text-lg font-medium">
                  ガバナンスセキュリティ
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full px-4 md:px-0 lg:px-0 xl:px-0">
        <div className="text-center py-20 pb-5 relative">
          <h5 className="text-black text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold">
            <span className="text-sky-700">お客様に寄り添った</span>サポート体制
          </h5>
          <p className="pt-10 text-black text-justify lg:text-center xl:text-center 2xl:text-center">
            導入後もお客様が安心してサービスをご利用いただけるようしっかりとサポートさせていただきます。
          </p>
        </div>
        <section className="workflow-management-details max-w-5xl mx-auto block lg:flex xl:flex 2xl:flex justify-between">
          <div className="workflow lg:px-20 xl:px-20 2xl:px-20 py-5">
            <div className="workflow-img">
              <Image
                className="mx-auto"
                src="/about-us/support_01.svg"
                alt="Insight-Global-About-Us-Icon"
                width={250}
                height={250}
                priority />
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
          <div className="workflow lg:px-20 xl:px-20 2xl:px-20 py-5">
            <div className="workflow-img">
              <Image
                className="mx-auto"
                src="/about-us/support_02.svg"
                alt="Insight-Global-About-Us-Icon"
                width={250}
                height={250}
                priority />
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
        </section>

      </section>
      <section className="bg-sky-200 py-20 px-4 md:px-0 lg:px-0 xl:px-0">
        <div className="workflow-heading mt-5">
          <h5 className="text-black text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-center font-semibold">
            <span className="text-sky-700">優秀なスタッフ</span>
            がサポートするから安心
          </h5>
          <div className="text-center pt-5">
            <p className="text-base text-black tracking-wider leading-7">
              経験豊富なスタッフが組織の課題解決を全力でサポートいたします。
            </p>
          </div>
          <div className="max-w-2xl pt-5 mx-auto">
            <div className="block lg:flex xl:flex 2xl:flex justify-between px-4 lg:px-0 xl:px-0 2xl:px-0">
              <div className="profile-card shadow-lg rounded-md bg-white mx-5">
                <div className="profile-img">
                  <Image
                    className="mx-auto w-full rounded-tr-md rounded-tl-md"
                    src="/profile/kumomoto-san.svg"
                    alt="Insight-Global-Profile-Icon"
                    width={150}
                    height={50}
                    priority />
                </div>
                <div className="profile-heading p-3">
                  <h5 className="text-black text-xl font-medium">熊本 浩明</h5>
                </div>
                <div className="profile-content pt-0 p-3">
                  <p className="text-black text-base">
                    金融機関勤後、プライスウォーターハウスクーパース（PwC）でコンサルタントとして15年の経験。
                  </p>
                </div>
              </div>
              <div className="profile-card shadow-lg rounded-md bg-white mx-5 mt-5 lg:mt-0 xl:mt-0 2xl:mt-0">
                <div className="profile-img">
                  <Image
                    className="mx-auto w-full rounded-tr-md rounded-tl-md"
                    src="/profile/vikas-san.svg"
                    alt="Insight-Global-Profile-Icon"
                    width={150}
                    height={50}
                    priority />
                </div>
                <div className="profile-heading p-3">
                  <h5 className="text-black text-xl font-medium">
                    ヴィカス クマール
                  </h5>
                </div>
                <div className="profile-content pt-0 p-3">
                  <p className="text-black text-base">
                    弁護士と原価会計士（インド）の資格を持つ。外事業展開について幅広いアドバイスを行います。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="FAQ-Section">
          <h5 className="text-black text-3xl text-center font-semibold">
            よくあるご質問
          </h5>
          <div className="max-w-5xl mx-auto mt-10">

          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
    )
}

