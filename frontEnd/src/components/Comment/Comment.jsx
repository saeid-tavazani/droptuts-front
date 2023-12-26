import Button from "../UI/Button";
import Input from "../UI/Input";
import { Textarea } from "@material-tailwind/react";
import { error } from "../../assets/handlerToastify";
export default function Comment() {
  const addComment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");
  };

  return (
    <div className="w-full mt-8">
      <form onSubmit={addComment} className="flex flex-col gap-y-3">
        <Input name="title" type="text" label="موضوع" />
        <Textarea name="description" color="blue" label="پیغام" />
        <Button type="submit">ثبت</Button>
      </form>
    </div>
  );
}
