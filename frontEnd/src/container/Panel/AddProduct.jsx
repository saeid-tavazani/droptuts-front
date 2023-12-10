import Input from "../../components/UI/Input";
import TextEditor from "../../components/UI/TextEditor";
import { useRef } from "react";
import ToggleBtn from "../../components/UI/ToggleBtn";
export default function AddProduct() {
  const editorRef = useRef(null);
  return (
    <div className="w-full rounded-xl p-5 bg-white shadow-sm border flex flex-col gap-7">
      <form className="flex gap-3 flex-wrap">
        <Input type="text" label="عنوان" name="title" />

        <TextEditor
          name="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
        />

        <ToggleBtn label="وضعیت" />
      </form>
    </div>
  );
}
