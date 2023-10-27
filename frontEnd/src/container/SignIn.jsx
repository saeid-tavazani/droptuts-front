import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userInfo } from "../store/userSlice";
import Loding from "../components/UI/Loding";
import { Outlet, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [inputEmail, setInputEmail] = useState(null);
  const [inputPassword, setInputPassword] = useState(null);
  const [inputRemember, setInputRemember] = useState(false);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();
    dispatch(userInfo({ userName: inputEmail, password: inputPassword }));
    navigate("/");
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-96 p-10">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">
            ورود به حساب کاربری
          </h1>
        </div>
        <form className="mt-5" onSubmit={() => loginUser(event)}>
          <div className="grid gap-y-4">
            <label className="block text-sm mb-2">
              ایمیل
              <Input
                type="email"
                aria-describedby="email-error"
                className="mt-2 w-full"
                onChange={() => setInputEmail(event.target.value)}
                required
              />
            </label>
            <label className="block text-sm mb-2">
              رمز عبور
              <Input
                type="password"
                className={`${
                  error && "focus:border-red-500 focus:ring-red-500"
                } mt-2 w-full`}
                required
                aria-describedby="password-error"
                onChange={() => setInputPassword(event.target.value)}
              />
            </label>
            <label className="text-sm flex items-center gap-2 cursor-pointer">
              <Input
                type="checkbox"
                onChange={() => setInputRemember(event.target.checked)}
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 w-fit"
              />
              منا بخاطر بسبار
            </label>
            <Button type="submit">{loding ? <Loding /> : "ورود"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
