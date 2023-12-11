import { Link } from "react-router-dom";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { useEffect } from "react";
import Cookies from "js-cookie";
import jsonData from "../../assets/jsonData.json";
import axios from "../../assets/axios/";
import { error, success } from "../../assets/handlerToastify";
import { isPassword, isEmail } from "../../assets/validator";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toastify from "../../components/UI/Toastify";
import PageLoding from "../../components/UI/PageLoding";
export default function EditeProfile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);
  const registerUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const phone = formData.get("phone");
    const name = formData.get("name");
    const family = formData.get("family");
    // const password = formData.get("password");
    // const curentpass = formData.get("curentpass");

    if (isEmail(email)) {
      // if (isPassword(password) || password == "") {
      axios
        .put(
          "/users/edit",
          { id: user.id, email, phone, name, family },
          { headers: { authorization: token } }
        )
        .then((res) => {
          if (res.data.success) {
            success("مشخصات تغییر یافت");
            setTimeout(() => {
              navigate("/logout");
            }, 2000);
          } else {
            error("متاسفانه مشکلی پیش اومده");
          }
        });
      // } else {
      //   error("رمز عبور حد اقل باید 8 کاراکتر و حداکثر 16 کاراکتر باشد.");
      // }
    } else {
      error("ایمبل نادرست");
    }
  };

  return user ? (
    <div className="flex h-full flex-1 flex-col justify-center overflow-y-auto">
      <Toastify />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={registerUser} className="space-y-6 mb-3">
          <Input
            defaultValue={user.email}
            name="email"
            type="email"
            label="ایمیل"
            required
          />
          <Input
            defaultValue={user.phone}
            name="phone"
            label="شماره تلفن"
            type="text"
          />

          {/* <div className="grid grid-cols-2 mt-2 items-center gap-4 w-full"> */}
          <Input
            name="name"
            className="col-span-1"
            label="نام"
            type="text"
            defaultValue={user.name}
            required
          />
          <Input
            name="family"
            className="col-span-1"
            label="نام خانوادگی"
            defaultValue={user.family}
            type="text"
          />
          {/* </div> */}

          {/* <Input
            name="curentpass"
            label="رمز عبور فعلی"
            type="password"
            required
          />
          <Input name="password" label="رمز عبور جدید " type="password" /> */}

          <Button type="submit">ثبت </Button>
        </form>
      </div>
    </div>
  ) : (
    <PageLoding />
  );
}
