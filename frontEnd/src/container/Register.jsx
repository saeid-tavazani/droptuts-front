import { Link } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useEffect } from "react";
import Cookies from "js-cookie";
import jsonData from "../assets/jsonData.json";
import axios from "../assets/axios/";
import { error } from "../assets/handlerToastify";
import { isPassword, isEmail } from "../assets/validator";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toastify from "../components/UI/Toastify";

export default function Register() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const cookie = Cookies.get(jsonData.cookieTokenName);
  useEffect(() => {
    if (cookie || user) {
      navigate("/");
    }
  }, []);

  const registerUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const phone = formData.get("phone");
    const name = formData.get("name");
    const family = formData.get("family");
    const password = formData.get("password");

    if (isEmail(email)) {
      if (isPassword(password)) {
        axios
          .post("/users/new", { email, password, phone, name, family })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate("/login");
            }
          });
      } else {
        error("رمز عبور حد اقل باید 8 کاراکتر و حد اکثر 16 کاراکتر باشد.");
      }
    } else {
      error("ایمبل نادرست");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Toastify />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ساخت حساب کاربری
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={registerUser} className="space-y-6 mb-3">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ایمیل
            </label>
            <div className="mt-2">
              <Input name="email" type="email" required />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              شماره تلفن
            </label>
            <div className="mt-2">
              <Input name="phone" type="text" />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4">
            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نام
              </label>
              <div className="mt-2">
                <Input name="name" type="text" required />
              </div>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نام خانوادگی
              </label>
              <div className="mt-2">
                <Input name="family" type="text" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                رمز عبور
              </label>
            </div>
            <Input name="password" type="password" required />
          </div>

          <Button type="submit">ثبت نام</Button>
        </form>

        <Link
          to="/login"
          className="font-semibold text-sm text-indigo-600 hover:text-indigo-500"
        >
          ورود
        </Link>
      </div>
    </div>
  );
}
