import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";
import HeaderMobile from './mobile-header';
import '../styles/Card.module.css'
import Index from './../pages/index';

export default function Header() {  
  return (    
    <header className="w-full fixed top-0 z-10">   
    <HeaderMobile></HeaderMobile>   
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 md:px-8 lg:px-12 xl:px-12 mx-auto max-w-screen-2xl md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-xl text-indigo-600" defaultValue={"Logo"}>              
            <Image
                className="logo"
                src="/logo/insight-global-main-logo.svg"
                alt="Insight-Global-Logo"
                width={180}
                height={35}
                priority
              />
            </Link>            
            <button
              className="px-3 py-1 text-gray-600 lg:hidden"
              id="navbar-toggle"
            >
              <div className="relative group">
                <div className="relative flex overflow-hidden items-center justify-end w-[50px] h-[50px] transform transition-al duration-200">
                  <div className="flex flex-col justify-between w-[25px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-700 h-[2px] w-7 transform transition-all duration-300 origin-left"></div>
                    <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-700 h-[2px] w-7 rounded transform transition-all duration-300"></div>
                    <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-700 h-[2px] w-7 transform transition-all duration-300 origin-left"></div>

                    <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10">
                      <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300"></div>
                      <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>            
          </div>
         
          <div
            className="hidden lg:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <ul className="flex items-center">
              <li className="flex relative group">
                <Link scroll={true} href="insight-global" className="p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  Insight Globalとは
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-6 relative top-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              <li className="flex relative group">
                <Link scroll={true} href="solution" className="p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  ソリューション
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-6 relative top-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              <li>
                <Link scroll={true} href="case-study" className="p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  導入事例
                </Link>
              </li>
              <li>
                <Link scroll={true} href="plan" className="p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  導入の流れ
                </Link>
              </li>
              <li>
                <Link scroll={true} href="login" className="p-2 lg:px-4 md:mx-2 text-sm text-black-600 rounded font-semibold hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  ログイン
                </Link>
              </li>
              <li>
                <Link scroll={true} href="document-download" className="bg-gradient-to-r from-blue-800 to-sky-600 p-2 lg:px-4 md:mx-2 text-sm text-white text-center font-semibold rounded-3xl transition-colors duration-700">
                  資料ダウンロード
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
