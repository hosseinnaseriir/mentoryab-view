import React, { useRef, useState , useEffect} from "react";
import Head from "next/head";
import Typography from "../../components/common/Typography";
import TextField from "../../components/common/TextField";
import { svgIcons } from "./../../assets/icons/svgIcons";
import Button from "./../../components/common/Button";
import SimpleReactValidator from "simple-react-validator";
import postFetch from "./../../utils/postFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import { BASE_API } from "./../../api/index";
import { getCookies  } from "cookies-next";

const RegisterScreen = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [iWantBeMentor, setIWantBeMentor] = useState(false);
  const [readRules, setReadRules] = useState(true);

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

  const registerUser = (e) => {
    e.preventDefault();
    postFetch(
      simpleValidator.current?.allValid(),
      `${BASE_API}/auth/register`,
      {
        fullName,
        email,
        password,
        confirmPassword,
        iWantBeMentor,
      },
      null
    ).then(
      (res) => {
        if (res.status === 201) {
          if (iWantBeMentor) return router.push("/complete-register") ;
          router.push("/login");
        }
      })
  };
  useEffect(()=>{
    if((getCookies("token").token))router.push("/");
  },[])
  return (
    <div className="container">
      <Head>
        <title>ثبت نام | منتور یاب</title>
        <meta name="description" content="صفحه ثبت نام در منتور یاب" />
      </Head>

      <main className="d-flex justify-content-center mb-5 pb-5">
        <form className="col-md-5 py-5">
          <Typography className="my-5 py-5" component="h1">
            ثبت نام
          </Typography>
          <TextField
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={() => {
              simpleValidator.current.showMessageFor("name");
            }}
            icon={svgIcons.user}
            component="input"
            placeholder="نام کامل شما "
            validationMessage={simpleValidator.current.message(
              "name",
              fullName,
              "required|min:3|max:255"
            )}
          />

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

          <TextField
            icon={svgIcons.luck}
            type="password"
            component="input"
            placeholder="رمز عبور "
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              simpleValidator.current.showMessageFor("password");
            }}
            validationMessage={simpleValidator.current.message(
              "password",
              password,
              "required|min:4|max:255"
            )}
          />

          <TextField
            icon={svgIcons.luck}
            type="password"
            component="input"
            placeholder="تکرار رمز عبور "
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => {
              simpleValidator.current.showMessageFor("confirmPassword");
            }}
            validationMessage={simpleValidator.current.message(
              "confirmPassword",
              confirmPassword,
              `required|min:4|max:255|in:${password}`
            )}
          />

          <TextField
            type="checkbox"
            component="checkbox"
            label="میخوام مربی یا منتور باشم . "
            onChange={(e) => setIWantBeMentor(e.target.checked)}
          />
      
          <TextField
            type="checkbox"
            component="checkbox"
            label={
              <p>
                <Link href="#">قوانین منتوریاب </Link> را مطالعه کرده و می پذیرم
                .
              </p>
            }
            name="readRules"
            checked={readRules}
            onChange={(e) => setReadRules(e.target.checked)}
          />

          <div className="d-flex justify-content-between align-items-end">
            <Link href={"/login"}>
              <a className="text-primary pb-1 d-flex align-items-center gap-1">
                {svgIcons.forward}
                <span className="text-primary">ورود به حساب کاربری </span>
              </a>
            </Link>
            {iWantBeMentor ? (
              <Button
                disabled={readRules}
                className="mt-3"
                onClick={registerUser}
              >
                مرحله بعد
              </Button>
            ) : (
              <Button
                disabled={readRules}
                onClick={registerUser}
                className="mt-3"
              >
                ثبت نام
              </Button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegisterScreen;
