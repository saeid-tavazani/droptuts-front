import Input from "../../UI/Input";
import axios from "../../../assets/axios/Axios";
import Button from "../../UI/Button";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { usersInfo } from "../../../store/Admin/usersSlice";

export default function UsersAdd({ token }) {
  const dispatch = useDispatch();
  const handlerUser = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const password2 = formData.get("password2");
    const email = formData.get("email");
    const name = formData.get("name");
    const picture = formData.get("picture");

    if (password == password2) {
      if (username != "" && email != "" && phone != "")
        axios
          .post(
            "/users/add",
            {
              password,
              email,
              name,
              phone,
              picture,
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
      <form className="flex flex-col w-96 gap-2" onSubmit={handlerUser}>
        <Input placeholder="نام" type="text" name="name" />
        <Input placeholder="ایمیل" type="email" name="email" />
        <Input placeholder="رمز عبور" type="password" name="password" />
        <Input
          placeholder=" تکرار رمز عبور "
          type="password"
          name="password2"
        />
        <Input placeholder="تصویر" type="text" name="picture" />
        <Input placeholder="شماره تلفن" type="tel" name="phone" />
        <Button>ثبت</Button>
      </form>
    </div>
  );
}
