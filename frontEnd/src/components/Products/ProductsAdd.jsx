import Input from "../UI/Input";
import Buttom from "../UI/Button";
import axios from "../../assets/axios/Axios";
import { useDispatch } from "react-redux";
import { products as productsData } from "../../store/productsSlice";
import TextEditor from "../UI/TextEditor";
import { useRef, useState } from "react";
import AddHeader from "./AddHeader";

export default function ProductsAdd({ id, token }) {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const [headings, setHeadings] = useState([]);

  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const price = formData.get("price");
    const poster = formData.get("poster");
    const discount = formData.get("discount");
    const title = formData.get("title");
    const description = editorRef.current.getContent();
    axios
      .post(
        "/products/new",
        { id, title, description, price, poster, discount },
        { headers: { authorization: token } }
      )
      .then((response) => {
        dispatch(productsData(response.data.data));
      });
  };

  return (
    <div>
      <form onSubmit={addProduct} className="flex gap-3 flex-wrap items-center">
        <Input
          placeholder="عنوان"
          type="text"
          className="w-[500px]"
          name="title"
        />
        <TextEditor
          name="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
        />
        <label>
          قیمت
          <Input
            placeholder="قیمت"
            type="text"
            defaultValue="0"
            className="w-96"
            name="price"
          />
        </label>
        <label>
          عکس محصول
          <Input
            placeholder="عکس محصول"
            type="text"
            className="w-96"
            name="poster"
          />
        </label>
        <label>
          میزان تخفیف
          <Input
            placeholder="تخفیف"
            type="text"
            className="w-96"
            defaultValue="0"
            name="discount"
          />
        </label>

        <AddHeader />

        <div className="my-2 flex flex-col gap-2 w-full">
          <label className="w-fit flex items-center gap-2 whitespace-nowrap cursor-pointer">
            <Input
              type="radio"
              name="status"
              value="performing"
              defaultChecked
            />
            در حال برگذاری
          </label>
          <label className="w-fit flex items-center gap-2 whitespace-nowrap cursor-pointer">
            <Input type="radio" name="status" value="end" />
            به پایان رسیده
          </label>{" "}
          <label className="w-fit flex items-center gap-2 whitespace-nowrap cursor-pointer">
            <Input type="radio" name="status" value="update" />
            درحال بروز رسانی
          </label>
        </div>

        <div className="w-full">
          <Buttom className="w-fit h-fit">ثبت</Buttom>
        </div>
      </form>
    </div>
  );
}
