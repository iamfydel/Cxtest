import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useSelector } from "react-redux";
import Link from "next/link";
import '../styles/Card.module.css'

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false); 

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} className='bg-black text-white pt-10 pr-0 pb-10 pl-10 relative z-Index-9'>
    <ul>
    <li className='leading-10'>
    <Link className="menu-item" href="/insight-global" onClick={closeSideBar}>
    Insight Globalとは
  </Link>
    </li>

  <li className='leading-10'>
  <Link className="menu-item" href="/solution" onClick={closeSideBar}>
    ソリューション
  </Link>
  </li>

  <li className='leading-10'>
  <Link className="menu-item" href="/case-study" onClick={closeSideBar}>
    導入事例
  </Link>
  </li>

  <li className='leading-10'>
  <Link className="menu-item" href="/plan" onClick={closeSideBar}>
    導入の流れ
  </Link>
  </li>

  <li className='leading-10'>
  <Link className="menu-item" href="/login" onClick={closeSideBar}>
    ログイン
  </Link>
  </li>

  <li className='leading-10'>
  <Link className="menu-item" href="/document-download" onClick={closeSideBar}>
    資料ダウンロード
  </Link>  
  </li>
      </ul>    
</Menu>
  );
};

export default HeaderMobile;
