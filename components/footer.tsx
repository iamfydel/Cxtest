import { EXAMPLE_PATH } from '../components/lib/constants'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white">
    <div className="footer-1 bg-gradient-to-r from-blue-800 to-sky-600 py-12">
      <div className="container max-w-screen-lg mx-auto px-4 md:px-0 lg:px-0 xl:px-0 2xl-px-0">
        <div className="block md:flex lg:flex xl:flex 2xl:flex justify-between">
          <div className="content text-justify">
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-white font-bold pb-4">
              Insight Globalで
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-white font-semibold pb-4">
              さらなる成長を目指しませんか？
            </h2>
            <div className="para">
              <p className="text-sm text-white">
                サービス導入に関してお気軽にお問合せください。
              </p>
            </div>
            <div className="btn-list grid md:flex lg:flex xl:flex 2xl:flex justify-items-stretch pt-12">
              <a
                href="#"
                className="py-3 md:px-10 lg:px-10 xl:px-10 text-sm md:mx-2 text-sky-700 text-center font-semibold border border-transparent rounded-3xl bg-white hover:bg-white"
              >
                資料ダウンロード
              </a>
              <a
                href="#"
                className="py-3 md:px-10 lg:px-10 xl:px-10 mt-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 text-sm md:mx-2 text-white text-center font-semibold border border-white rounded-3xl"
              >
                オンライン相談
              </a>
            </div>
          </div>
          <div className="content-img lg:absolute xl:absolute 2xl:absolute">
            <div className="footer-bg-img lg:relative xl:relative 2xl:relative left-full bottom-36">
              <Image
                className="Footer-bg"
                src="/bg/footer-bg-img.svg"
                alt="Insight-Global-Footer-Bg"
                width={550}
                height={0}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-2 bg-white py-10 md:py-20 lg:py-20 xl:py-20 2xl:py-20 px-4 md:px-0 lg:px-0 xl:px-0 2xl-px-0">
      <div className="container max-w-screen-lg mx-auto">
        <div className="lg:flex md:flex justify-between items-center">
          <div className="image">
            <Image
              className="logo"
              src="/logo/insight-global-footer-logo.svg"
              alt="Insight-Global-Footer-Logo"
              width={180}
              height={70}
              priority
            />
          </div>            
          <div className="px-0 md:px-4 lg:px-4 xl:px-4 2xl:px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <ul className="list-none footer-links leading-loose">
              <li className="mb-2">
                <h5 className="text-sm font-semibold">Insight Globalとは</h5>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                >
                  機能紹介
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                >
                  サポート体制
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                >
                  サポートスタッフ
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                >
                  よくある質問
                </a>
              </li>
            </ul>
          </div>
          <div className="px-0 md:px-4 lg:px-4 xl:px-4 2xl:px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <ul className="list-none footer-links leading-loose">
              <li className="mb-2">
                <h5 className="text-sm font-semibold">ソリューション</h5>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                >
                  ユースケース
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                >
                  導入事例
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                >
                  料金・導入の流れ
                </a>
              </li>
            </ul>
          </div>
          <div className="px-0 md:px-4 lg:px-4 xl:px-4 2xl:px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <ul className="list-none footer-links leading-loose">
              <li className="mb-2">
                <h5 className="text-sm font-semibold">ご検討中のお客様へ</h5>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mt-2 w-6 h-5 font-semibold text-gray-400 float-left"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  資料ダウンロード
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mt-2 w-6 h-5 font-semibold text-gray-400 float-left"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  オンラインデモ
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mt-2 w-6 h-5 font-semibold text-gray-400 float-left"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  オンライン相談
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-sm border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mt-2 w-6 h-5 font-semibold text-gray-400 float-left"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  お問合せ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
