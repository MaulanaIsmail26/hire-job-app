import React from "react";
import Head from "next/head";
import style from "../../../styles/pages/detailStyle.module.scss";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";

export default function detail() {
  return (
    <>
      <Head>
        <title>Detail | Hire Job app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${style.main}`}>
        <div className="container-fluid p-0">
          {/* NAVBAR sticky-top fixed-top */}
          <nav
            className={`container-fluid sticky-sm-top shadow-sm ${style.containerNavbar}`}
          >
            <Navbar />
          </nav>
          {/* END OF NAVBAR */}
        </div>
      </main>
    </>
  );
}
