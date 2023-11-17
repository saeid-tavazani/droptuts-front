import { useSelector } from "react-redux";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { ToastContainer, toast } from "react-toastify";
import axios from "../assets/axios/Axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";

export default function EditProfile() {
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();

  const handlerError = (err) => {
    toast.error(err, {
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
  const successHandler = (err) => {
    toast.success(err, {
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
  };

  const formSubmitPass = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const currentPassword = formData.get("currentPassword");
    const password = formData.get("password");
    const password2 = formData.get("password2");
    if (
      validator.isLength(validator.trim(password), { max: 16, min: 8 }) &&
      validator.trim(password2) == validator.trim(password)
    ) {
      if (
        validator.isLength(validator.trim(currentPassword), { max: 16, min: 8 })
      ) {
        axios
          .put(
            "/users/update/pass",
            { id: user.id, password, currentPassword },
            { headers: { authorization: token } }
          )
          .then((res) => {
            if (res.data.success) {
              successHandler("رمز با موفقیت تغییر یافت");
            }
          });
      } else {
        handlerError("رمز عبور خداقل 8 کاراکتر و حد اکثر 16 کاراکتر باشد");
      }
    } else {
      handlerError("رمز عبور و تکرار ان یک نیست");
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name");
    const family = formData.get("family");
    const phone = formData.get("phone");
    if (
      validator.isEmail(email) &&
      validator.isLength(name, { min: 3, max: 25 }) &&
      validator.isLength(phone, { min: 11, max: 11 }) &&
      validator.isLength(family, { min: 0, max: 35 })
    ) {
      axios
        .put(
          "/users/update/info",
          { id: user.id, name, family, phone, email },
          { headers: { authorization: token } }
        )
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            successHandler("اطلاعات با موفقیت تغییر یافت");
          } else {
            handlerError("مقدار نامعتبر");
          }
        });
    } else {
      handlerError("مقدار نامعتبر");
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
            <span className="text-sm">تام</span>
            <Input
              dir="ltr"
              className="w-96"
              type="text"
              defaultValue={user.name.split(" ")[0]}
              name="name"
            />
          </label>
          <label>
            <span className="text-sm">نام خانوادگی</span>
            <Input
              dir="ltr"
              className="w-96"
              type="text"
              defaultValue={user.name.split(" ")[1]}
              name="family"
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
            <Input className="w-96" type="password" name="password" />
          </label>
          <label>
            <span className="text-sm">تکرار رمز جدید</span>
            <Input className="w-96" type="password" name="password2" />
          </label>
          <Button className="w-fit">ثبت</Button>
        </form>
      </div>
    </>
  );
}
