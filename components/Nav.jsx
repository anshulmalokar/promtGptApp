"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  const isUserLogined = true;
  return (
    <div className="border-b-2 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={30}
            height={30}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Link>
        <p className="text-lg pl-2 hidden md:block">Promptopia</p>
      </div>

      {/* Desktop Navigation */}

      <div>
        <div className="sm:flex px-2 items-center hidden sm:block">
          {isUserLogined ? (
            <>
              <Link href="/create-prompt">
                <div className="px-2">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Create Prompt
                  </button>
                </div>
              </Link>
              <div className="px-2 ">
                <button class="bg-slate-200 text-slate-900 hover:text-white shadow-sm hover:bg-black text-white font-bold py-2 px-4 rounded-full">
                  Sign Out
                </button>
              </div>
              <div>
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
