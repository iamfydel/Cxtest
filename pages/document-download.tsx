import Image from "next/image";
import Header from "../components/header";


export default function DocumentDownload(){
    return(
        <>
        <Header></Header>
        <main className="Insight-Global-Document-Page bg-slate-50 py-20">
            <div className="max-w-screen-xl mx-auto">
                <div className="block lg:flex xl:flex 2xl:flex mt-28 px-4 md:px-0 lg:px-0 xl:px-0">
                    <div className="download-details pr-0 md:pr-16 lg:pr-16 xl:pr-16">
                        <div className="heading">
                            <h1 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl tracking-wider font-extrabold text-blue-900">3分でわかるInsight Globalダウンロード</h1>
                        </div>
                        <div className="para mt-10">
                            <p className="text-black text-base leading-7 text-justify tracking-widest">Insight Globalにご興味をお持ちいただき誠にありがとうございます！</p>
                            <p className="text-black text-base leading-7 text-justify tracking-widest mt-0 lg:mt-5 xl:mt-5 2xl:mt-5">
                                Insight Globalの機能や価格、事例や画面紹介など、気になる点やご不明点を、お気軽にお問い合わせください！
                            </p>
                            <p className="text-black text-base leading-7 text-justify tracking-widest mt-0 lg:mt-5 xl:mt-5 2xl:mt-5">お問い合わせ内容に応じて、弊社の担当よりご連絡させていただきます。</p>
                        </div>
                        <div className="company-information py-5">
                            <Image
                                className="mx-auto bg-white"
                                src="./company-information.svg"
                                alt="Insight-Global-Solutions-Frame"
                                width={700}
                                height={700}
                                priority
                            />
                        </div>
                        <div className="mt-8">
                            <ul className="footer-links leading-loose list-disc">
                                <li className="mb-2">
                                    <h5 className="text-sm font-semibold">資料概要</h5>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                                    >
                                        サービス概要
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                                    >
                                        Insight Global導入のメリット
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                                    >
                                        システム紹介
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
                                        開発者対談
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-sm font-medium border-b border-solid border-transparent hover:border-sky-800 hover:text-sky-800"
                                    >
                                        メンバー紹介
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="download-form">
                        <div className="bg-white mt-5 p-4 lg:p-10 xl:p-10 2xl:p-10">
                            <div className="">
                                <div className="flex">
                                    <div className="surname">
                                        <div>
                                            <label className="text-sm text-black">姓<i className="text-red-600">*</i></label>
                                        </div>
                                        <div className="flex items-center bg-white rounded mt-2 mb-4">
                                            <input className="rounded w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" placeholder="山田"/>
                                        </div>
                                    </div>
                                    <div className="given-name pl-6">
                                        <div>
                                            <label className="text-sm text-black">名<i className="text-red-600">*</i></label>
                                        </div>
                                        <div className="flex items-center bg-white rounded mt-2 mb-4">
                                            <input className="rounded w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" placeholder="花子"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="block mt-3">
                                    <div className="email-address">
                                        <div>
                                            <label className="text-sm text-black">メールアドレス(勤務先)<i className="text-red-600">*</i></label>
                                        </div>
                                        <div className="bg-white rounded mt-2 mb-4">
                                            <input className="rounded w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" placeholder="insight_global@example.com"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="block mt-5">
                                    <div className="company-name">
                                        <div>
                                            <label className="text-sm text-black">貴社名<i className="text-red-600">*</i></label>
                                        </div>
                                        <div className="bg-white rounded mt-2 mb-4">
                                            <input className="rounded w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <div className="department-name">
                                        <div>
                                            <label className="text-sm text-black">部署名<i className="text-red-600">*</i></label>
                                        </div>
                                        <div className="flex items-center bg-white rounded mt-2 mb-4">
                                            <input className="rounded w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text"/>
                                        </div>
                                    </div>
                                    <div className="director pl-6">
                                        <div>
                                            <label className="text-sm text-black">役職<i className="text-red-600">*</i></label>
                                        </div>
                                        <div className="flex items-center bg-white rounded mt-2 mb-4">
                                            <input className="rounded w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="block mt-3">
                                    <div className="phone-no">
                                        <div>
                                            <label className="text-sm text-black">連絡のつきやすい電話番号<i className="text-red-600">*</i></label>
                                        </div>
                                        <div className="bg-white rounded mt-2 mb-4">
                                            <input className="rounded w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="number" placeholder="080-0000-0000"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="block mt-5">
                                    <div className="questions-requests">
                                        <div>
                                            <label className="text-sm text-black">ご質問・ご要望</label>
                                        </div>
                                        <div className="bg-white rounded mt-2 mb-4">
                                            <textarea className="rounded w-full pl-3 border-2 text-sm border-gray-300 focus:outline-none"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="block text-center mt-5">
                                    <input type={"checkbox"}/>
                                    <label><span className="text-sky-400 text-sm">プライバシーポリシー</span>に同意する</label>
                                </div>
                                <div className="login-btn max-w-xs mx-auto mt-8 pb-10 px-10">
                                    <a
                                        href="#"
                                        className="block mx-auto py-2 p-2 lg:px-4 md:mx-2 bg-gradient-to-r from-blue-800 to-sky-600 text-sm text-white text-center font-semibold rounded-3xl transition-colors duration-700"
                                    >
                                        送信
                                    </a>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        </>
    )
}

