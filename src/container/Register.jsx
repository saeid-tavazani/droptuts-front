import { Link } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useEffect } from "react";
import Cookies from "js-cookie";
import jsonData from "../assets/jsonData.json";
import axios from "../assets/axios/";
import { error } from "../assets/handlerToastify";
import { isPassword, isEmail } from "../assets/validator";
import { useSelector } from "react-redux";
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
            if (res.data.success) {
              navigate("/login");
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
          ساخت حساب کاربری
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={registerUser} className="space-y-6 mb-3">
          <Input name="email" type="email" label="ایمیل" required />

          <Input name="phone" label="شماره تلفن" type="text" />

          <div className="grid grid-cols-2 mt-2 items-center gap-4 w-full">
            <Input
              name="name"
              className="col-span-1"
              label="نام"
              type="text"
              required
            />
            <Input
              name="family"
              className="col-span-1"
              label="نام خانوادگی"
              type="text"
            />
          </div>

          <Input name="password" label="رمز عبور" type="password" required />

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
