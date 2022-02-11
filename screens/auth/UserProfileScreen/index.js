import React, { useState, useRef } from "react";
import Head from "next/head";
import AddAvatar from "./../CompleteRegister/AddAvatar";
import { Box } from "@mui/material";
import Button from "./../../../components/common/Button";
import TextField from "./../../../components/common/TextField/index";
import Link from "next/link";
import SimpleReactValidator from "simple-react-validator";
import Typography from "./../../../components/common/Typography";
import { svgIcons } from "./../../../assets/icons/svgIcons";

const UserProfileScreen = () => {
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

  return (
    <>
      <Head>
        <title>تکمیل ثبت نام | منتور یاب</title>
        <meta name="description" content="صفحه ثبت نام در منتور یاب" />
      </Head>
      <main className="d-flex justify-content-center mb-5 pb-5">
        <form>
          <Typography className="my-5 py-5" component="h1">
            ثبت نام
          </Typography>
          <AddAvatar
          //avatar={avatar} setAvatar={setAvatar}
          />
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

          <Box className="row mt-md-5 pt-md-5 mb-5">
            <Box display="flex" gap={2} flexDirection="row-reverse">
              {true ? (
                <Button
                  type="submit"
                  variant="contained"
                  //   onClick={(e) => handleCompleteProfile(e)}
                  parentClassName="d-flex flex-row-reverse"
                >
                  ویرایش
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  //   onClick={(e) => handleCompleteProfile(e)}
                  parentClassName="d-flex flex-row-reverse"
                >
                  تکمیل پروفایل
                </Button>
              )}
              <Button
                type="link"
                href="/"
                variant="outlined"
                parentClassName="d-flex flex-row-reverse"
              >
                انصراف
              </Button>
            </Box>
          </Box>
        </form>
      </main>
    </>
  );
};

export default UserProfileScreen;

{
  /* <TextField
name="birthDay"
value={birthDay}

onBlur={() => {
  simpleValidator.current.showMessageFor("birthDay");
}}
icon={svgIcons.birthDay}
component="input"
placeholder="آدرس دقیق محل کار"
validationMessage={simpleValidator.current.message(
  "birthDay",
  birthDay,
  "required|min:2|max:255"
)}
icon={svgIcons.birthDay}
inputId='datepicker'
> */
}
