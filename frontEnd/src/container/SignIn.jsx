import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import jsonData from "../assets/jsonData.json";
import axios from "../assets/axios/Axios";
import { userInfo } from "../store/userSlice";
import Loding from "../components/UI/Loding";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { setToken } from "../store/token";
import validator from "validator";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SignIn() {
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(false);
  const [passwordType, changePasswordType] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const cookie = Cookies.get(jsonData.cookieTokenName);
  useEffect(() => {
    if (cookie || user) {
      navigate("panel");
    }
  }, []);

  const headerError = (error) => {
    setLoding(false);
    setError(true);
    toast.error(error, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const loginUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputEmail = formData.get("inputEmail");
    const inputPassword = formData.get("inputPassword");
    const inputRemember = formData.get("inputRemember");
    setLoding(true);

    if (
      validator.isEmail(validator.trim(inputEmail)) &&
      validator.isLength(validator.trim(inputPassword), { max: 16, min: 8 })
    ) {
      axios
        .post("/session", {
          email: inputEmail.trim(),
          password: inputPassword.trim(),
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            dispatch(userInfo(res.data.data));
            dispatch(setToken(res.data.token));
            if (inputRemember) {
              Cookies.set(jsonData.cookieTokenName, res.data.token, {
                expires: jsonData.expiresDate,
              });
            }
            navigate("/panel");
          } else {
            headerError("متاسفانه اطلاعات وارد شده صحیح نمی‌باشند");
          }
        })
        .catch((e) => {
          headerError("متاسفانه اطلاعات وارد شده صحیح نمی‌باشند");
        });
    } else {
      headerError("فرمت مقدار های وارد شده درست نمی باشد");
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-96 p-10">
        <h1 className="block text-center text-2xl font-bold text-gray-800">
          ورود به حساب کاربری
        </h1>
        <form className="mt-5 grid gap-y-4" onSubmit={loginUser}>
          <label className="block text-sm mb-2">
            ایمیل
            <Input
              type="email"
              aria-describedby="email-error"
              className={`mt-2 w-full ${
                error && "focus:border-red-500 focus:ring-red-500"
              }`}
              name="inputEmail"
              required
            />
          </label>
          <label className="block text-sm mb-2 relative ">
            رمز عبور
            <Input
              type={passwordType}
              className={`${
                error && "focus:border-red-500 focus:ring-red-500"
              } mt-2 w-full`}
              required
              aria-describedby="password-error"
              name="inputPassword"
            />
            <span
              onMouseDown={() => changePasswordType("text")}
              onMouseUp={() => changePasswordType("password")}
              className="w-fit absolute left-4 bottom-3.5 flex cursor-pointer"
            >
              {passwordType == "password" ? (
                <FaEyeSlash size={17} />
              ) : (
                <FaEye size={17} />
              )}
            </span>
          </label>
          <label className="text-sm flex items-center gap-2 cursor-pointer">
            <Input
              type="checkbox"
              name="inputRemember"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 w-fit"
            />
            منا بخاطر بسبار
          </label>
          <Button type="submit">
            {loding ? (
              <>
                {"ورود"} <Loding />
              </>
            ) : (
              "ورود"
            )}
          </Button>
          <Link
            className="text-sm flex items-center gap-2 cursor-pointer text-blue-500 underline"
            to="/register"
          >
            ثبت نام
          </Link>
        </form>
      </div>
    </section>
  );
}
