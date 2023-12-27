import Button from "../UI/Button";
import Input from "../UI/Input";
import { Textarea } from "@material-tailwind/react";
import { error } from "../../assets/handlerToastify";
import { useSelector } from "react-redux";
import Toastify from "../UI/Toastify";

export default function AddComment() {
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.token.value);
  const addComment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");
    if (!token) {
      error("برای ثبت نظر باید وارد حساب کاربری بشود");
    } else {
    }
  };

  return (
    <div className="w-full mt-8">
      <Toastify />
      <h2 className="font-bold">افزودن نظر</h2>
      <form onSubmit={addComment} className="flex flex-col gap-y-3 mt-3">
        <Input name="title" type="text" label="موضوع" />
        <Textarea name="description" color="blue" label="پیغام" />
        <Button type="submit">ثبت</Button>
      </form>
    </div>
  );
}
