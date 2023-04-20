import Image from "next/image";
import Header from "../components/header";

export default function Login(){
    return(
        <>
        <Header></Header>
        <main className="Insight-Global-Login-Page bg-slate-50 pt-0 py-20">
            <div className="pt-28 md:pt-8 lg:pt-24 xl:pt-28 px-4 md:px-0 lg:px-0 xl:px-0">
                <div className="max-w-md mx-auto bg-white shadow-xl rounded my-8 pt-7">
                    <div className="login-logo py-5">
                    <Image
                        className="logo mx-auto"
                        src="/logo/insight-global-main-logo.svg"
                        alt="Insight-Global-Logo"
                        width={180}
                        height={35}
                        priority
                    />
                    <h1 className="text-center font-bold text-lg text-black pt-5">ログイン</h1>
                    </div>
                    
                    <div className="bg-white mt-5 pb-16">
                        <div className="w-4/5 mx-auto">
                            <div className="user-name">
                            <div>
                                <label className="text-sm text-black">メールアドレス</label>
                            </div>
                            <div className="flex items-center bg-white rounded mt-2 mb-4">
                                <input className="w-full pl-3 border-2 text-lg border-gray-300 h-12 focus:outline-none" type="text" />
                            </div>
                            </div>
                            <div className="password mt-7">
                            <div>
                                <label className="text-sm text-black">パスワード</label>
                            </div>
                            <div className="flex items-center bg-white rounded mt-2 mb-4">
                                <input className="w-full pl-3 border-2 text-lg border-gray-300 h-12 focus:outline-none" type="password" />
                            </div>
                            </div>
                            <div className="login-btn max-w-xs mx-auto mt-8 pb-10 px-10">
                                <a
                                    href="#"
                                    className="block mx-auto py-2 p-2 lg:px-4 md:mx-2 bg-gradient-to-r from-blue-800 to-sky-600 text-sm text-white text-center font-semibold rounded-3xl transition-colors duration-700"
                                >
                                    ログイン
                                </a>
                            </div>
                            <div className="forget-password pt-10 border-gray-300 border-t-2">
                            <a
                                    href="#"
                                    className="block mx-auto text-base text-black text-center"
                                >
                                    パスワードをお忘れの方はこちら
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}