import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Solution(){
    return(
        <>
    <Header></Header>
    <main className="Solution-Page bg-white pt-10">
      <div className="w-full pt-60 lg:py-60 xl:py-60 2xl:py-60 mx-auto bg-cover bg-no-repeat bg-right-top bg-[url('/bg/bg-insight-global.svg')]">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-4 md:px-0 lg:px-0 xl:px-0 absolute bottom-3/4 lg:bottom-0 xl:bottom-0 2xl:bottom-0 lg:top-1/4 xl:top-1/4 2xl:top-1/4 left-auto tracking-widest">
            <h5 className="text-sky-700 text-xl font-semibold">Solution</h5>
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold mt-2">
            ソリューション
            </h1>
          </div>
        </div>
      </div>      
      <section className="max-w-screen-lg mx-auto py-10 lg:py-20 xl:py-20 2xl:py-20 px-4 md:px-0 lg:px-0 xl:px-0">
        <div className="providing-solutions">
          <div className="solutions-heading text-justify">
            <p className="text-sky-700 text-sm tracking-widest">Functions</p>
            <h5 className="text-black text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-semibold pt-3 tracking-widest">
              ワンストップでソリューションを提供
            </h5>
            <p className="text-black text-base pt-4 leading-7 tracking-widest">
              Insight Global は、経営陣および運用メンバー向けのワンストップ
              ソリューションであり、<br></br>
              チームがデータから意思決定を迅速に行うのに役立つリアルタイムの分析および計画プラットフォームを提供します。
            </p>
          </div>
          <div className="Frame-img py-14">
            <Image
              className="mx-auto hidden lg:block xl:block 2xl:block"
              src="/solution/Frame.svg"
              alt="Insight-Global-Solutions-Frame"
              width={525}
              height={525}
              priority
            />
            <Image
              className="mx-auto w-full block lg:hidden xl:hidden 2xl:hidden"
              src="/solution/Frame.svg"
              alt="Insight-Global-Solutions-Frame"
              width={525}
              height={525}
              priority
            />
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto pt-5 py-20 px-4 md:px-0 lg:px-0 xl:px-0">
        <div className="providing-solutions">
          <div className="solutions-heading text-justify">
            <p className="text-sky-700 text-sm tracking-widest">Use Case</p>
            <h5 className="text-black text-xl font-semibold pt-3 tracking-widest">
              ユースケース
            </h5>
            <p className="text-black text-base pt-4 leading-7 tracking-widest">
              Insight Global、大きく『Financial Planing
              Analytics』についての機能を提供。企業の課題に応じて適切な機能を
              <br></br>
              ご利用いただけます。
            </p>
          </div>
          <div className="block lg:flex xl:flex justify-between pt-14">
            <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-4 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
              <div className="list-no">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  01
                </h1>
              </div>
              <div className="items-center text-center">
                <div className="service-img pt-3">
                  <Image
                    className="service-img mx-auto"
                    src="/service/service-1.svg"
                    alt="Insight-Global-Service-Img"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
                <div className="heading pt-5">
                  <h5 className="text-base text-gray-700 font-medium">
                    海外子会社の管理<br></br>
                    モニタリング
                  </h5>
                </div>
                <div className="down-arrow mx-auto mt-3">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-4 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
              <div className="list-no">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  02
                </h1>
              </div>
              <div className="items-center text-center">
                <div className="service-img pt-3">
                  <Image
                    className="service-img mx-auto"
                    src="/service/service-2.svg"
                    alt="Insight-Global-Service-Img"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
                <div className="heading pt-5">
                  <h5 className="text-base text-gray-700 font-medium">
                    国内子会社<br></br>
                    支店の経営管理強化
                  </h5>
                </div>
                <div className="down-arrow mx-auto mt-3">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-4 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
              <div className="list-no">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  03
                </h1>
              </div>
              <div className="items-center text-center">
                <div className="service-img pt-3">
                  <Image
                    className="service-img mx-auto"
                    src="/service/service-3.svg"
                    alt="Insight-Global-Service-Img"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
                <div className="heading pt-5">
                  <h5 className="text-base text-gray-700 font-medium">
                    デューデリシャス
                  </h5>
                </div>
                <div className="down-arrow mx-auto mt-3">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto bg-no-repeat bg-cover bg-right-top bg-[url('/solution/bg-frame.svg')]">
        <div className="max-w-screen-lg mx-auto px-4 md:px-0 lg:px-0 xl:px-0">
          <div className="pt-7 block lg:flex xl:flex 2xl:flex justify-between">
            <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-4">
              <div className="list-no">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  04
                </h1>
              </div>
              <div className="items-center text-center">
                <div className="service-img pt-3">
                  <Image
                    className="service-img mx-auto"
                    src="/service/service-4.svg"
                    alt="Insight-Global-Service-Img"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
                <div className="heading pt-5">
                  <h5 className="text-base text-gray-700 font-medium">
                    ベンチャー企業支援
                  </h5>
                </div>
                <div className="down-arrow mx-auto mt-3">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-4 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
              <div className="list-no">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  05
                </h1>
              </div>
              <div className="items-center text-center">
                <div className="service-img pt-3">
                  <Image
                    className="service-img mx-auto"
                    src="/service/service-5.svg"
                    alt="Insight-Global-Service-Img"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
                <div className="heading pt-5">
                  <h5 className="text-base text-gray-700 font-medium">
                    複数経営管理側面<br></br>
                    の連携
                  </h5>
                </div>
                <div className="down-arrow mx-auto mt-3">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="service-card w-full md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 md:px-10 lg:px-10 xl:px-10 md:mx-4 lg:mx-4 xl:mx-4 bg-white shadow-lg rounded-lg py-4 mt-5 md:mt-0 lg:mt-0 xl:mt-0">
              <div className="list-no">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  06
                </h1>
              </div>
              <div className="items-center text-center">
                <div className="service-img-sec pt-3">
                  <Image
                    className="service-img mx-auto"
                    src="/service/service-6.svg"
                    alt="Insight-Global-Service-Img"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
                <div className="heading pt-5">
                  <h5 className="text-base text-gray-700 font-medium">
                    経営陣、管理職への<br></br>
                    レポーティング
                  </h5>
                </div>
                <div className="down-arrow mx-auto mt-3">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-1-section pt-12 pb-28 max-w-screen-xl mx-auto bg-no-repeat bg-cover bg-right-top bg-[url('/solution/Frame-1.svg')]">
        <div className="max-w-screen-lg mx-auto bg-gray-100 p-10 px-4 md:px-5 lg:px-10 xl:px-10">
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch items-start">
            <div className="case-content text-left pr-0 lg:pr-20 xl:pr-20 2xl:pr-20">
              <div className="case-tap bg-white px-2 py-1 rounded text-left w-fit">
                <h5 className="text-base lg:text-lg xl:text-lg 2xl:text-lg tracking-wider font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
                  Case 1
                </h5>
              </div>
              <div className="case-heading mt-6">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl tracking-wider font-extrabold text-blue-900">
                  海外子会社の管理・モニタリング
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  経営実態把握、予算・実績の管理がより明確に可視化されるため、各海外子会社の経営状況を正確に把握することができ、経営意思決定のPDCAサイクルが早く回るようになります。経営会議の場において、Insight
                  Global
                  の数値もとに議論する体制を構築することができ、より戦略的かつ迅速なグローバルでの経営意思決定が可能となります。
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto hidden lg:block xl:block 2xl:block"
                src="/solution/case-1.svg"
                alt="Insight-Global-Service-Img"
                width={320}
                height={100}
                priority
              />
              <Image
                className="case-img mx-auto block lg:hidden xl:hidden 2xl:hidden"
                src="/solution/case-1.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch mt-7">
            <div className="case-content text-left pr-0 lg:pr-20 xl:pr-20 2xl:pr-20">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  在庫管理が楽に
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  タイムラグが生じがちな海外拠点の在庫管理も、Insight
                  Globalからリアルタイムで確認できます。過剰在庫の兆候が現れた時にアラートが通知されるよう設定すれば、セールの実施・店舗ディスプレイの変更・宣伝を強化などの対策を、経営陣が迅速に実施できます。
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto hidden lg:block xl:block 2xl:block"
                src="/solution/system-1.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
              <Image
                className="case-img mx-auto w-full block lg:hidden xl:hidden 2xl:hidden"
                src="/solution/system-1.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex mt-5">
            <div className="case-content text-left">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  報告書作成が不要
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  経営陣が必要な情報は、Insight Global
                  のダッシュボード上に自動で集約・分析・グラフや表などで可視化されます。また、経営会議では、見たい情報をInsight
                  Global
                  で表示させるだけなので、報告書の作成は必要ありません。これまで報告書作成に費やしていた時間を、戦略を練るための議論に使うことができます。
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex mt-5">
            <div className="case-content text-left">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  国毎に異なる会計データを統合
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  高度なKPI管理を実現: Insight
                  Globalでは、従来のシステムのままで情報を吸い上げて、同じフォーマットにしてあげ、容易にデータ統合ができます。
                  海外子会社を管理する課題の一つに、日本と海外では異なる会計システムを採用している事が挙げられます。例えば日本では勘定奉行や弥生会計、インドではTallyなどが使用されていますが、このままだとデータが分散され、フォーマットも違うため、データ収集や分析が非効率になってしまいます。しかし、データの統合により、これまで別々に管理されているデータを単体で分析しただけのレベルから、多角的な視野で深い分析が可能になり、そこから新たな知見が得られる事が期待されます。
                  また、これら精度の高い情報収集と分析により、適切なKPI管理も実現できます。例えば製造業の場合、売上や利益だけではなく、減損減耗や製造工程の失敗率、残業代、営業に費やしたコスト
                  など、今まで上げられなかった経済活動も数値化し、KPIとして設定できます。最終的なゴールを達成するため留意すべき根幹的な数値をタイムリーに入手・分析できれば、更なる飛躍のためのプランを打ち出すことができます。
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex mt-5">
            <div className="case-content text-left">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  多言語対応で現地スタッフとの協業が円滑に
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  現地経営陣・スタッフと、情報共有・意思決定が可能になります。コミュニケーションが原因のすれ違いが起きる心配がなく、グループ全体が同じ方向を向いて動ける様になりました。今後、海外拠点の新設や外国人スタッフの雇用を計画している企業にとって、多言語対応のシステムは必要不可欠です。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto bg-gray-100 p-10 mt-10 px-4 md:px-5 lg:px-10 xl:px-10">
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch items-start">
            <div className="case-content text-left pr-0 lg:pr-20 xl:pr-20 2xl:pr-20">
              <div className="case-tap bg-white px-2 py-1 rounded text-left w-fit">
                <h5 className="text-base lg:text-lg xl:text-lg 2xl:text-lg tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  Case 2
                </h5>
              </div>
              <div className="case-heading mt-6">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl tracking-wider font-extrabold text-blue-900">
                  国内子会社・支店の経営管理強化
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  国内においても、国内子会社や支店などの拠点の経営実態の把握がよりスムーズになり、経営管理強化が可能となります。経営会議で、すぐに欲しい数字を確認することが出来るので、前年比較、予実分析が効率的に行えるため、経営の意思決定スピードが速くなります。
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto"
                src="/solution/case-2.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex mt-5">
            <div className="case-content text-left">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  経営の意思決定がスピーディーに
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  これまでの子会社や支店が本社へ行う報告は、各担当者がエクセルでデータをまとめ、メールに添付する形が一般的でした。しかし、本社が各地のデータをまとめ、報告書を経営陣に提出する頃には、状況が変化している事が多々ありました。また、人の手が複数加わる事で入力ミスが起こり、データの信頼性も低くなっている問題もありました。しかし、Insight
                  Globalでは、各拠点の担当者が直接入力したデータが反映されるため、信頼性の高いデータがリアルタイムで入手できます。更に、データはグラフや表で表されるので、スピーディーな
                  現状把握と経営判断が可能になります。
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex mt-5">
            <div className="case-content text-left">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  リモートワークが円滑に
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  Insight
                  Globalは、クラウドサービスであるため、国内外全ての情報にいつでも・どこからでもアクセス可能です。情報共有機能も充実しており、リモートによるコミュニケーションロスの心配もありません。そのため、コロナ禍でも作業効率を落とさず、且つ、働く場所の選択肢が増えた事でスタッフのQOLが飛躍的に向上しました。
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch mt-7 items-center">
            <div className="case-content text-left pr-0 lg:pr-20 xl:pr-20 2xl:pr-20">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  国内拠点のモニタリング強化
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  コロナ禍で出張が制限される中、国内子会社・支店の不正防止対策としてInsight
                  Globalは大きな力を発揮しました。特に中小企業は、業務の属人化・ブラックボックス化に陥りやすく注意が必要ですが、Insight
                  Globalでは会社の全情報が可視化されるため、スタッフに「常に見られている」と言う意識を持たせる事が可能です。
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto"
                src="/solution/system-1.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto bg-gray-100 p-10 mt-10 px-4 md:px-5 lg:px-10 xl:px-10">
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch items-start">
            <div className="case-content text-left pr-0 lg:pr-20 xl:pr-20 2xl:pr-20">
              <div className="case-tap bg-white px-2 py-1 rounded text-left w-fit">
                <h5 className="text-base lg:text-lg xl:text-lg 2xl:text-lg tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  Case 3
                </h5>
              </div>
              <div className="case-heading mt-6">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl tracking-wider font-extrabold text-blue-900">
                  デューデリジェンス
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  海外でのデューデリジェンスの際に、財務データを入手して、分析を進めることが可能です。詳細な取引情報が把握できるため、不透明な取引や不正の兆候の存在も把握することが可能となります。
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto"
                src="/solution/case-3.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex mt-5">
            <div className="case-content text-left">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  誰でも使いやすい。ユーザーフレンドリーなインターフェース
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  インドの市場で最も使用されている汎用的な会計ソフトウェアに、Tallyがあります。言わばインド版の勘定奉行や弥生会計と言ったソフトで、インド人には使いやすいと広く使用されています。しかし、このTally、日本人にはとても使いにくく、企業の実態を把握するのが難しいのです。
                  しかし、Insight
                  Globalはユーザーフレンドリーなインターフェースであるため、現地企業の詳細データまで簡単に確認が可能になります。データとしてクラウドに吸い上げ、日本側が確認しやすいように加工を行えるので、問題発見が容易にできます。また、会計ソフトは何を使っていても問題ないという点も魅力です。
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch mt-7 items-center">
            <div className="case-content text-left pr-0 lg:pr-20 xl:pr-20 2xl:pr-20">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  対象企業を徹底調査。不正を見逃さない！
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  海外の企業は商習慣や文化の違いが障壁となり、調査には細心の注意が必要になるケースが多くあります。例えばアジア各国では、家族の結びつきが強く、親族間で上手くビジネスを回す事がよくあります。しかし、「親族だから何でもあり」という状況を生み、不正リスクが高まりやすくなる欠点もあります。
                  <br></br>
                  Insight
                  Globalでは、対象企業の全データをクラウド上に吸い上げて、早く・正確に経営状態を分析でき、データもグラフや表で分かりやすく表されるので、直感的に状況を把握できます。また、異常値や資金の不自然な動きにシグナルが出る機能を実装する事により、数字を並べただけでは見逃しがちな不自然な資金の流れも明らかにする事ができます。
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto"
                src="/solution/system-1.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto bg-gray-100 p-10 mt-10 px-4 md:px-5 lg:px-10 xl:px-10">
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch items-start">
            <div className="case-content text-left pr-0 lg:pr-48 xl:pr-48 2xl:pr-48">
              <div className="case-tap bg-white px-2 py-1 rounded text-left w-fit">
                <h5 className="text-base lg:text-lg xl:text-lg 2xl:text-lg tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  Case 4
                </h5>
              </div>
              <div className="case-heading mt-6">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl tracking-wider font-extrabold text-blue-900">
                  ベンチャー企業支援
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  計画の更新や変更をスピーディにできる柔軟かつ安定的な予算管理システムで経営環境の変化に迅速に対応できます。予算を短い期間に区切って柔軟に戦略を変更しながら、大きな成長に繋がる年間目標を達成を支援します。
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto"
                src="/solution/case-4.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
          <div className="block lg:flex xl:flex 2xl:flex mt-5">
            <div className="case-content text-left">
              <div className="case-heading mt-6">
                <h1 className="text-base lg:text-xl xl:text-xl 2xl:text-xl tracking-wider font-extrabold text-black">
                  <span className="break-before-left border-solid border-blue-600"></span>
                  スピーディーな経営管理・経営計画で目標を達成
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  創業から早いペースで事業が成長している企業では、各拠点の管理が追いつかず、経営管理・経営計画に課題が生じる事があります。
                  <br></br>
                  Insight
                  Globalは、グループ全体と各拠点の予算から月次収支、負債の状況、当座預金の残高、金利データなど、経営管理分野全体を確認できます。
                  <br></br>
                  また、より正確なデータをタイムリーに収集・分析できるようになった事で、財務および設備投資のKPIを計算し、中長期的なシナリオのシミュレーションを実施したり、予算を短い期間に区切りPDCAサイクルの中で柔軟に戦略を変更するなど、スピーディー且つ柔軟な経営計画を立てながら目標を達成できます。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto bg-gray-100 p-10 mt-10 px-4 md:px-5 lg:px-10 xl:px-10">
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch items-start">
            <div className="case-content text-left pr-0 lg:pr-20 xl:pr-20 2xl:pr-20">
              <div className="case-tap bg-white px-2 py-1 rounded text-left w-fit">
                <h5 className="text-base lg:text-lg xl:text-lg 2xl:text-lg tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  Case 5
                </h5>
              </div>
              <div className="case-heading mt-6">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl tracking-wider font-extrabold text-blue-900">
                  複数経営管理側面の連携
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  Cross functional collaboration: Finance, HR, marketing etc., 複数の経営管理側面の連携。財務、人事、マーケティングなど
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto"
                src="/solution/case-5.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto bg-gray-100 p-10 mt-10 px-4 md:px-5 lg:px-10 xl:px-10">
          <div className="block lg:flex xl:flex 2xl:flex justify-items-stretch items-start">
            <div className="case-content text-left pr-0 lg:pr-20 xl:pr-20 2xl:pr-20">
              <div className="case-tap bg-white px-2 py-1 rounded text-left w-fit">
                <h5 className="text-base lg:text-lg xl:text-lg 2xl:text-lg tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400">
                  Case 6
                </h5>
              </div>
              <div className="case-heading mt-6">
                <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl tracking-wider font-extrabold text-blue-900">
                  経営陣、管理職への
                  レポーティング
                </h1>
              </div>
              <div className="para mt-5">
                <p className="text-sm lg:text-base xl:text-base 2xl:text-base text-black leading-7 tracking-widest">
                  Reporting to management, mid-level employees. 経営陣、管理職へのレポーティング
                </p>
              </div>
            </div>
            <div className="case-1-image">
              <Image
                className="case-img mx-auto"
                src="/solution/case-6.svg"
                alt="Insight-Global-Service-Img"
                width={250}
                height={100}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
    )
}