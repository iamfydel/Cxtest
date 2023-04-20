"use client"; // this is a client component 👈🏽
import React, { useRef } from 'react';
import { useState,useEffect } from 'react';
import Image from 'next/image';


export default function Tabs(){
     //const [state, setState] = useState(['1']);
     const [currentTab, setCurrentTab] = useState('1');
     const tabs = [
         {
             id: 1,
             tabTitle: 'ワークフロー管理・文書管理',
             Icon: '/about-us/icon_1.svg',
             Image: '/about-us/illust_01.svg',
             title: 'ワークフロー管理・文書管理',
             content1: '各部門／拠点／海外子会社で業務プロセスの進捗やステータスに関する情報を、進捗管理画面のワークフロー機能で一元管理できます。',
             content2: '複数拠点での業務の連携や文書の共有などもプラットフォームを通じて一覧管理ができるため、グローバルでのスムーズな協業が可能です。',
             content3: '各海外子会社の決算数値や予算数値で共有すべき情報を相互かつタイムリーに把握できるため、コミュニケーションコストの削減にも繋がります。'
         },
         {
             id: 2,
             tabTitle: '財務プロセスの自動化',
             Icon: '/about-us/icon_2.svg',
             Image: '/about-us/illust_02.svg',
             title: '財務プロセスの自動化',
             content1: '各種計算や各数値の整合性チェックなど、定型的・反復的な業務の自動化により、スタッフはより付加価値の高い活動に注力できます。 ',
             content2: '自動化によりヒューマンエラーが減り、業務のクオリティが向上します。二度手間やクレームの発生も防止でき、生産性を高められます。',
             content3:'自動化した業務は人手が必要なくなるため、コスト削減や人手不足の解消にもつながります。'
         },
         {
             id: 3,
             tabTitle: 'レポーティング・分析',
             Icon: '/about-us/icon_3.svg',
             Image: '/about-us/illust_03.svg',
             title: 'レポーティング・分析',
             content1: '膨大なデータは、自動でグラフ、チャート、図など、分かりやすく可視化することができます。 ',
             content2: 'レポーティング作成時にありがちな人的ミスや時間的なロスが無くなり、高いタイムリーな精度の情報を活用できるようになります。',
             content3:' AIの自動分析から、不正の予兆の把握や資金繰りシミュレーションなど、現在はもとより、未来の有益な知見が得られます。'
         },
     ];
 
     const handleTabClick = (e) => {
        setCurrentTab(e.target.id);    
    }
    
    
    
    return(
        <>
        <div className="workflow-management-details flex justify-between" onClick={(handleTabClick)}>            
            {tabs.map((tab, i) => <>                
            <div key={i} defaultValue={tab.id} onClick={(handleTabClick)} className="Tabs Selected workflow px-3 lg:px-10 xl:px-10 2xl:px-10 py-2 lg:py-5 xl:py-5 2xl:py-5">
                <div className="workflow-img" onClick={(handleTabClick)}>
                    <Image
                        className="mx-auto"
                        src={tab.Icon}
                        alt={tab.tabTitle}
                        width={45}
                        height={45}
                        priority />
                </div>
                <div onClick={(handleTabClick)} className="workflow-heading mt-3 text-center lg:text-justify xl:text-justify 2xl:text-justify">
                    <h5 className="text-sky-700 text-xs md:text-sm lg:text-base xl:text-base 2xl:text-base font-semibold">
                        {tab.tabTitle}
                    </h5>
                </div>
            </div></>
            )}
        </div>        
            {tabs.map((tab, i) => <><div className="workflow-management-content delay-1000 ease-in-out mt-10 px-4 md:px-0 lg:px-0 xl:px-0" key={i}>
                {currentTab === `${tab.id}` && <><div className='block lg:flex xl:flex 2xl:flex justify-items-stretch workflow'>
                    <div className='workflow-tabs-contents'>
                        <div className='workflow-heading'>
                            <h2 className="text-base lg:text-xl xl:text-xl 2xl:text-xl text-black font-semibold">
                                {tab.title}
                            </h2>
                        </div>
                        <div className="title flex justify-items-stretch pt-8 w-full">
                            <div className="check-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="text-sky-400 w-10 h-6 font-medium"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <p className="text-base text-black">
                                {tab.content1}
                            </p>
                        </div>
                        <div className="title flex justify-items-stretch pt-8 w-full">
                            <div className="check-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="text-sky-400 w-10 h-6 font-medium"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <p className="text-base text-black">
                                {tab.content2}
                            </p>
                        </div>
                        <div className="title flex justify-items-stretch pt-8 w-full">
                            <div className="check-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="text-sky-400 w-10 h-6 font-medium"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <p className="text-base text-black">
                                {tab.content3}
                            </p>
                        </div>
                    </div>
                    <div className="workflow mt-10 lg:mt-0 xl:mt-0 2xl:mt-0">
                    <div className="workflow-img">
                        <Image
                            className="mx-auto translate-x-6"
                            src={tab.Image}
                            alt={tab.title}
                            width={400}
                            height={400}
                            priority />
                    </div>
                </div>
                </div></>}
            </div>                
            </>
            )}
        </>
    )
}

