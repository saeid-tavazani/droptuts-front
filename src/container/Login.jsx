import { Link } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Checkbox from "../components/UI/Checkbox";
import Cookies from "js-cookie";
import jsonData from "../assets/jsonData.json";
import axios from "../assets/axios/";
import { useEffect } from "react";
import { isPassword, isEmail } from "../assets/validator";
import { useSelector, useDispatch } from "react-redux";
import { error } from "../assets/handlerToastify";
import { useNavigate } from "react-router-dom";
import Toastify from "../components/UI/Toastify";
import { userInfo } from "../store/userSlice";
import { setToken } from "../store/token";

export default function Login() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const cookie = Cookies.get(jsonData.cookieTokenName);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cookie || user) {
      navigate("/");
    }
  }, []);

  const userLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const remember = formData.get("remember");

    if (isEmail(email)) {
      if (isPassword(password)) {
        axios.post("/session", { email, password }).then((res) => {
          if (res.data.success) {
            dispatch(userInfo(res.data.data));
            dispatch(setToken(res.data.token));
            if (remember) {
              Cookies.set(jsonData.cookieTokenName, res.data.token, {
                expires: jsonData.expiresDate,
              });
            }
            navigate("/");
          }
        });
      } else {
        error("رمز عبور حد اقل باید 8 کاراکتر و حداکثر 16 کاراکتر باشد.");
      }
    } else {
      error("ایمبل نادرست");
    }
  };

  return (
    <div className="flex h-screen flex-1 flex-col justify-center overflow-y-auto">
      <Toastify />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ورود به حساب کاربری
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 mb-3" onSubmit={userLogin}>
          <Input name="email" label=" ایمیل" type="email" required />

          <div>
            <div className="text-sm mb-1">
              <Link
                to=""
                className="font-semibold text-sm text-indigo-600 hover:text-indigo-500"
              >
                فراموشی رمز عبور
              </Link>
            </div>
            <Input label="رمز عبور" name="password" type="password" required />
          </div>
          <Checkbox name="remember" label="منو بخاطر بسپار" />
          <Button type="submit">ورود</Button>
        </form>
        <Link
          to="/register"
          className="font-semibold text-sm text-indigo-600 hover:text-indigo-500"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
}
