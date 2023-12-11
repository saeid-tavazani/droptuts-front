import Input from "../../components/UI/Input";
import TextEditor from "../../components/UI/TextEditor";
import { useRef, useState, useEffect } from "react";
import ToggleBtn from "../../components/UI/ToggleBtn";
import axios from "../../assets/axios/";
import { useSelector } from "react-redux";
import SelectInput from "../../components/UI/SelectInput";
import Button from "../../components/UI/Button";

export default function AddProduct() {
  const token = useSelector((state) => state.token.value);
  const editorRef = useRef(null);
  const [pass, setPass] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    if (token) {
      axios
        .get("/product/pass", { headers: { authorization: token } })
        .then((res) => {
          if (res.data.success) {
            setPass(res.data.data);
          }
        });
    }
  }, [token]);

  const addProductHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const status = formData.get("status");
    const link = formData.get("link");
    const price = formData.get("price");
    const poster = formData.get("poster");
    const discount = formData.get("discount");
    const description = editorRef.current.getContent();
    axios
      .post(
        "/product/new",
        {
          title,
          description,
          status,
          price,
          poster,
          discount,
          link,
          pass: selectedValue,
        },
        { headers: { authorization: token } }
      )
      .then((response) => {
        console.log("====================================");
        console.log(response);
        console.log("====================================");
        if (response.success) {
          alert(56465);
        }
        // dispatch(productsData(response.data.data));
      });
  };

  return (
    <div className="w-full rounded-xl p-5 bg-white shadow-sm border flex flex-col gap-7">
      <form onSubmit={addProductHandler} className="flex gap-3 flex-wrap">
        <Input className="w-full" type="text" label="عنوان" name="title" />

        <TextEditor
          name="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
        />

        <ToggleBtn label="وضعیت" name="status" />
        {pass ? (
          <SelectInput
            value={selectedValue}
            onChange={handleSelectChange}
            name="passfile"
            list={pass}
          />
        ) : (
          ""
        )}
        <Input type="text" label="لینک دانلود" name="link" />
        <Input type="text" label="قیمت" name="price" defaultValue={0} />
        <Input type="text" label="تخفیف" name="discount" defaultValue={0} />
        <Input type="text" label="لینک تصویر محصول" name="poster" />
        <Button type="submit" className="w-fit">
          ثبت
        </Button>
      </form>
    </div>
  );
}
