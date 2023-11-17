import Input from "../UI/Input";
import axios from "../../assets/axios/Axios";
import Button from "../UI/Button";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { usersInfo } from "../../store/usersSlice";
import validator from "validator";

export default function UsersAdd({ token }) {
  const dispatch = useDispatch();
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
  const handlerUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const email = formData.get("email");
    const name = formData.get("name");
    const family = formData.get("family");
    const phone = formData.get("phone");
    if (
      validator.isEmail(email) &&
      validator.isLength(name, { min: 3, max: 25 }) &&
      validator.isLength(phone, { min: 11, max: 11 }) &&
      validator.isLength(family, { min: 0, max: 35 }) &&
      validator.isLength(validator.trim(password), { max: 16, min: 8 })
    ) {
      axios
        .post(
          "/users/add",
          {
            password,
            email,
            name,
            phone,
            family,
          },
          { headers: { authorization: token } }
        )
        .then((response) => {
          if (response.data.success) {
            toast.success("کاربر با موفقیت اضافه شد", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            dispatch(usersInfo(response.data.data));
          } else {
            handlerError("مشکلی پیش امده");
          }
        })
        .catch((error) => {
          handlerError("مشکلی پیش امده");
        });
    } else {
      handlerError("مقدار نامعتبر");
    }
  };

  return (
    <div>
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
      <form className="flex flex-col w-96 gap-2" onSubmit={handlerUser}>
        <Input placeholder="نام" type="text" name="name" />
        <Input placeholder="نام خانوادگی" type="text" name="family" />
        <Input placeholder="ایمیل" type="email" name="email" />
        <Input placeholder="رمز عبور" type="password" name="password" />
        <Input placeholder="شماره تلفن" type="tel" name="phone" />
        <Button>ثبت</Button>
      </form>
    </div>
  );
}
