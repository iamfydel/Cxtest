import { useState } from "react";
import SlideToggle from "../components/slide-content";
import Image from "next/image";
function Example() {
    const [toggleState, setToggleState] = useState(false);
    const clickEvent = () => {
        setToggleState(prev => !prev)
    }
    const Faq2 = () => {
        setToggleState(prev => !prev)
    }
    return (
        <><div>
            <div className="bg-white p-7 shadow-md rounded" onClick={clickEvent}>
                <h1 className="text-xl font-bold">
                    <span className="text-sky-700 text-3xl pr-5">Q.</span>なぜInsight Global を導入するべきなのでしょうか？
                </h1>
            </div>
            {/* <SlideToggle>
                <div className="test p-7 flex">
                    <span className="text-blue-800 text-3xl pr-5">A.</span>
                    <div className="faq-content">

                    </div>
                </div>
            </SlideToggle> */}
        </div>
            <div className="mt-10">
                <div className="bg-white p-7 shadow-md rounded" onClick={clickEvent}>
                    <h1 className="text-xl font-bold">
                        <span className="text-sky-700 text-3xl pr-5">Q.</span>他のツールとの違いを教えて下さい。
                    </h1>
                </div>
                {/* <SlideToggle>
                    <div className="test p-7 flex">
                        <span className="text-blue-800 font-bold text-3xl pr-5">A.</span>
                        <div className="faq-content">
                            <Image
                                className="faq-img w-full"
                                src="/faq/faq-1.svg"
                                alt="Insight-Global-Faq-Img"
                                width={330}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                </SlideToggle> */}
            </div>
            <div className="mt-10">
                <div className="bg-white p-7 shadow-md rounded" onClick={clickEvent}>
                    <h1 className="text-xl font-bold">
                        <span className="text-sky-700 text-3xl pr-5">Q.</span>Insight Globalを導入して、どのような変化がありましたか？
                    </h1>
                </div>
                {/* <SlideToggle>
                    <div className="test p-7 flex">
                        <span className="text-blue-800 font-bold text-3xl pr-5">A.</span>
                        <div className="faq-content">
                            <Image
                                className="faq-img w-full"
                                src="/faq/faq-2.svg"
                                alt="Insight-Global-Faq-Img"
                                width={330}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                </SlideToggle> */}
            </div>
            <div className="mt-10">
                <div className="bg-white p-7 shadow-md rounded" onClick={clickEvent}>
                    <h1 className="text-xl font-bold">
                        <span className="text-sky-700 text-3xl pr-5">Q.</span>データの安全性について教えてください。
                    </h1>
                </div>
                {/* <SlideToggle>
                    <div className="test p-7 flex">
                        <span className="text-blue-800 font-bold text-3xl pr-5">A.</span>
                        <div className="faq-content">
                            <p className="text-black text-base text-justify">クラウドコンピューティングサービスに「Microsoft Azure」を採用</p>
                            <p className="text-black text-base text-justify">Microsoftのパートナーとして、質の高いソリューションを提供しています。データストレージ、データ分析、ビジュアリゼーションなどの最先端の技術を導入します。また、世界トップレベルのセキュリティを誇る「Microsoft Azure」を採用しており、安心のデータ管理体制。Microsoftの最先端のＩＴ技術とセキュリティ技術を最大限活用し、貴社に最も適したサービス導入をサポートさせていただきます。</p>
                        </div>
                    </div>
                </SlideToggle> */}
            </div>
        </>
    );
}

export default Example;