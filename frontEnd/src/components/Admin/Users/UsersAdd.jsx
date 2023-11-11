import Input from "../../UI/Input";
import { useState } from "react";
import axios from "../../../assets/axios/Axios";
import Button from "../../UI/Button";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { usersInfo } from "../../../store/usersSlice";

export default function UsersAdd({ token }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();
  const handlerUser = (event) => {
    event.preventDefault();
    if (password == password2) {
      if (username != "" && email != "" && phone != "")
        axios
          .post(
            "/users/add",
            {
              password: password,
              email: email,
              name: username,
              phone: phone,
              picture: picture,
            },
            { headers: { authorization: token } }
          )
          .then((response) => {
            dispatch(usersInfo(response.data.data));
          });
    } else {
      toast.error("رمز عبور و تکرار ان مساوی نمی باشد", {
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
      <form
        className="flex flex-col w-96 gap-2"
        onSubmit={() => handlerUser(event)}
      >
        <Input
          onChange={() => setUserName(event.target.value)}
          placeholder="نام"
          type="text"
        />
        <Input
          onChange={() => setEmail(event.target.value)}
          placeholder="ایمیل"
          type="email"
        />
        <Input
          onChange={() => setPassword(event.target.value)}
          placeholder="رمز عبور"
          type="password"
        />
        <Input
          onChange={() => setPassword2(event.target.value)}
          placeholder=" تکرار رمز عبور "
          type="password"
        />
        <Input
          onChange={() => setPicture(event.target.value)}
          placeholder="تصویر"
          type="text"
        />
        <Input
          onChange={() => setPhone(event.target.value)}
          placeholder="شماره تلفن"
          type="tel"
        />
        <Button>ثبت</Button>
      </form>
    </div>
  );
}
