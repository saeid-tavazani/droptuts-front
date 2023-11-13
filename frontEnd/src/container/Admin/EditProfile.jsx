import { useSelector } from "react-redux";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../assets/axios/Axios";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);

  const navigate = useNavigate();
  const formSubmitPass = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const currentPassword = formData.get("currentPassword");
    const password = formData.get("password");
    const password2 = formData.get("password2");
    if (password.trim() === password2.trim()) {
      if (currentPassword.trim().length) {
        axios
          .put(
            "/users/update/pass",
            { id: user.id, password, currentPassword },
            { headers: { authorization: token } }
          )
          .then((res) => {
            if (res.data.success) {
              toast.success("رمز با موفقیت تغییر یافت", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                navigate("/logout");
              }, 2000);
            }
          });
      }
    } else {
      toast.error("رمز عبور و تکرار ان یک نیست", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const picture = formData.get("picture");
    const phone = formData.get("phone");
    if (
      picture.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim().includes("@")
    ) {
      axios
        .put(
          "/users/update/info",
          { id: user.id, picture, phone, email },
          { headers: { authorization: token } }
        )
        .then((res) => {
          if (res.data.success) {
            toast.success("اطلاعات با موفقیت تغییر یافت", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              navigate("/logout");
            }, 2000);
          } else {
            toast.error("مقدار نامعتبر", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        });
    } else {
      toast.error("مقدار نامعتبر", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
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
      <div className="flex flex-wrap gap-5 justify-evenly">
        <form onSubmit={formSubmit} className="flex flex-col gap-4">
          <label>
            <span className="text-sm">عکس حساب کاربری</span>
            <Input
              dir="ltr"
              className="w-96"
              type="text"
              defaultValue={user.picture}
              name="picture"
            />
          </label>
          <label>
            <span className="text-sm"> شماره تلفن </span>
            <Input
              dir="ltr"
              className="w-96"
              type="tel"
              defaultValue={user.phone}
              name="phone"
            />
          </label>
          <label>
            <span className="text-sm"> ایمیل </span>
            <Input
              dir="ltr"
              className="w-96"
              type="email"
              defaultValue={user.email}
              name="email"
            />
          </label>
          <Button className="w-fit">ثبت</Button>
        </form>
        <form onSubmit={formSubmitPass} className="flex flex-col gap-4">
          <label>
            <span className="text-sm">رمز قبلی</span>
            <Input name="currentPassword" className="w-96" type="text" />
          </label>
          <label>
            <span className="text-sm">رمز جدید</span>
            <Input
              onChange={() => setPassword(event.target.value)}
              className="w-96"
              type="password"
              name="password"
            />
          </label>
          <label>
            <span className="text-sm">تکرار رمز جدید</span>
            <Input
              onChange={() => setPassword2(event.target.value)}
              className="w-96"
              type="password"
              name="password2"
            />
          </label>
          <Button className="w-fit">ثبت</Button>
        </form>
      </div>
    </>
  );
}
