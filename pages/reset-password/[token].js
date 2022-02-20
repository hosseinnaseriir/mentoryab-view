import React from "react";
import { useRouter } from "next/router";
import getFetch from "./../../utils/getFetch";
import { BASE_API } from "./../../api/index";
import Typography from "./../../components/common/Typography";
import TextField from "./../../components/common/TextField/index";
import Button from "./../../components/common/Button";
import { svgIcons } from "./../../assets/icons/svgIcons";
import SimpleReactValidator from "simple-react-validator";
import postFetch from "./../../utils/postFetch";

const ResetPassword = () => {
  const router = useRouter();

  const [password, setPassword] = React.useState("");
  const [userID, setUserID] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");

  const simpleValidator = React.useRef(
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

  React.useEffect(() => {
    if (router.query.token) {
      getFetch(
        true,
        `${BASE_API}/auth/reset-password/${router.query.token}`
      ).then((res) => {
        console.log(res.data._id);
        setUserID(res.data._id);
      });
    }
  }, [router.query.token]);

  const handleChangePassword = () => {
    postFetch(true, `${BASE_API}/auth/reset-password`, {
      _id: userID,
      password,
      repeatPassword,
    }).then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  return (
    <main className="d-flex justify-content-center mb-5 pb-5">
      <form className="col-md-5 py-5">
        <Typography className="my-5 py-5" component="h1">
          رمز جدید را وارد کنید
        </Typography>

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
          placeholder="تکرار رمز عبور"
          name="repeatPassword"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          onBlur={() => {
            simpleValidator.current.showMessageFor("repeatPassword");
          }}
          validationMessage={simpleValidator.current.message(
            "repeatPassword",
            repeatPassword,
            "required|min:4|max:255"
          )}
        />

        <div className="d-flex justify-content-end align-items-end">
          <Button
            onClick={handleChangePassword}
            variant="contained"
            className="mt-3"
            disabled={simpleValidator.current?.allValid()}
          >
            ورود
          </Button>
        </div>
      </form>
    </main>
  );
};

export default ResetPassword;
