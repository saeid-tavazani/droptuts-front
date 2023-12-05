import Input from "../../components/UI/Input";
import TextEditor from "../../components/UI/TextEditor";
import { useRef } from "react";
import ToggleBtn from "../../components/UI/ToggleBtn";
export default function AddProduct() {
  const editorRef = useRef(null);
  return (
    <div className="w-full rounded-xl p-5 bg-white shadow-sm border flex flex-col gap-7">
      <form className="flex gap-3 flex-wrap">
        <label>
          عنوان
          <Input type="text" name="title" />
        </label>
        <TextEditor
          name="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
        />

        <label>
          وضعیت
          <ToggleBtn />
        </label>
      </form>
    </div>
  );
}
