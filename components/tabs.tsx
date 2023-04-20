import React, { useState } from 'react';

const Tabs = () => {

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

    const handleTabClick = (event: { target: { id: React.SetStateAction<string>; }; }) => {
        setCurrentTab(event.target.id);
    }

    return (
        <div className='container'>
            
        </div>
    );
}

export default Tabs;