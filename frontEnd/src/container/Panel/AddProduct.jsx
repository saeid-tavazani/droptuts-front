import Input from "../../components/UI/Input";
import TextEditor from "../../components/UI/TextEditor";
import { useRef, useState, useEffect } from "react";
import ToggleBtn from "../../components/UI/ToggleBtn";
import axios from "../../assets/axios/";
import { useSelector } from "react-redux";
import SelectInput from "../../components/UI/SelectInput";

export default function AddProduct() {
  const token = useSelector((state) => state.token.value);
  const editorRef = useRef(null);
  const [pass, setPass] = useState(null);
  useEffect(() => {
    if (token) {
      axios
        .get("/product/pass", { headers: { authorization: token } })
        .then((res) => {
          console.log("====================================");
          console.log(res);
          console.log("====================================");
          if (res.data.success) {
            setPass(res.data.data);
          }
        });
    }
  }, [token]);

  return (
    <div className="w-full rounded-xl p-5 bg-white shadow-sm border flex flex-col gap-7">
      <form className="flex gap-3 flex-wrap">
        <Input type="text" label="عنوان" name="title" />

        <TextEditor
          name="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
        />

        <ToggleBtn label="وضعیت" />
        {pass ? <SelectInput list={pass} /> : ""}
      </form>
    </div>
  );
}
