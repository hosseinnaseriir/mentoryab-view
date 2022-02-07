import React, { useRef, useState } from "react";
import Head from "next/head";
import Typography from "../../components/common/Typography";
import TextField from "./../../components/common/TextField";
import { svgIcons } from "./../../assets/icons/svgIcons";
import Button from "./../../components/common/Button";
import SimpleReactValidator from "simple-react-validator";
import postFetch from "./../../utils/postFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookies } from "cookies-next";
import { useEffect } from "react";
import Header from './../../components/common/Header';

const HomeScreen = () => {

  return (
    <div className="container">
      <Head>
        <title> خانه | منتور یاب</title>
        <meta name="description" content="صفحه ورود به حساب منتور یاب" />
      </Head>

      <main className="d-flex justify-content-center mb-5 pb-5">
            <Header/>
            <h1>slider</h1>
      </main>
    </div>
  );
};

export default HomeScreen;
