import { useSelector } from "react-redux";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "../assets/axios/Axios";

export default function EditProfile() {
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);
  const [profile, setProfile] = useState(user.picture);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  console.log(user);

  const formSubmit = (event) => {
    event.preventDefault();
    if (password.trim() === password2.trim()) {
      axios
        .put(
          "/users/update",
          { id: user.id, password, currentPassword, picture: profile },
          { headers: { authorization: token } }
        )
        .then((res) => {
          console.log("====================================");
          console.log(res);
          console.log("====================================");
        });
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
      <form onSubmit={() => formSubmit(event)} className="flex flex-col gap-4">
        <label>
          <span className="text-sm">عکس حساب کاربری</span>
          <Input
            dir="ltr"
            className="w-96"
            type="text"
            defaultValue={user.picture}
            onChange={() => setProfile(event.target.value)}
          />
        </label>
        <label>
          <span className="text-sm">رمز قبلی</span>
          <Input
            onChange={() => setCurrentPassword(event.target.value)}
            dir="ltr"
            className="w-96"
            type="text"
          />
        </label>
        <label>
          <span className="text-sm">رمز جدید</span>
          <Input
            onChange={() => setPassword(event.target.value)}
            className="w-96"
            type="password"
          />
        </label>
        <label>
          <span className="text-sm">تکرار رمز جدید</span>
          <Input
            onChange={() => setPassword2(event.target.value)}
            className="w-96"
            type="password"
          />
        </label>
        <Button className="w-fit">ثبت</Button>
      </form>
    </>
  );
}
