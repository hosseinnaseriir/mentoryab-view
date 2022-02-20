import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Typography from "../../components/common/Typography";
import TextField from "./../../components/common/TextField";
import { svgIcons } from "./../../assets/icons/svgIcons";
import Button from "./../../components/common/Button";
import SimpleReactValidator from "simple-react-validator";
import postFetch from "./../../utils/postFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCookies, setCookies } from "cookies-next";
import { useSelector } from "react-redux";

const ForgotPasswordScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const simpleValidator = useRef(
    new SimpleReactValidator({
      className: "text-danger",
      messages: {
        faild: "موارد خواسته شده را به درستی وارد کنید !",
        name: "مقدار نام را به درستی وارد کنید",
        email: "ایمیل را به درستی وارد کنید",
        password: "رمز عبور را به درستی وارد کنید",
        confirmPassword: "تکرار رمز به درستی وارد نشده !",
      },
    })
  );

  const handleForgotPassword = (e) => {
    e.preventDefault();

    postFetch(
      simpleValidator.current?.allValid(),
      `http://localhost:5000/auth/forgot-password`,
      {
        email,
      },
      null
    ).then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  useEffect(() => {
    if (getCookies("token").token) router.push("/");
  }, []);

  return (
    <div className="container">
      <Head>
        <title> ورود | منتور یاب</title>
        <meta name="description" content="صفحه ورود به حساب منتور یاب" />
      </Head>

      <main className="d-flex justify-content-center mb-5 pb-5">
        <form className="col-md-5 py-5">
          <Typography className="my-5 py-5" component="h1">
            فراموشی رمز عبور
          </Typography>

          <TextField
            icon={svgIcons.email}
            type="email"
            component="input"
            placeholder="ایمیل "
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              simpleValidator.current.showMessageFor("email");
            }}
            validationMessage={simpleValidator.current.message(
              "email",
              email,
              "required|email"
            )}
          />

          <div className="d-flex justify-content-between align-items-end">
            <Link href={"/register"}>
              <a className="text-primary pb-1 d-flex align-items-center gap-1">
                {svgIcons.forward}
                <span className="text-primary">ساخت حساب کاربری</span>
              </a>
            </Link>

            <Button
              onClick={(e) => handleForgotPassword(e)}
              variant="contained"
              className="mt-3"
              disabled={simpleValidator.current?.allValid()}
            >
              ارسال ایمیل بازیابی
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPasswordScreen;
