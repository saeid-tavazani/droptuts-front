import Input from "../UI/Input";
import Buttom from "../UI/Button";
import axios from "../../assets/axios/Axios";
import { useDispatch } from "react-redux";
import { products as productsData } from "../../store/productsSlice";
import TextEditor from "../UI/TextEditor";
import { useRef, useState } from "react";
import AddHeader from "./AddHeader";
import Select from "../UI/Select";

export default function ProductsAdd({ id, token }) {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  // const [headings, setHeadings] = useState([]);
  const [educations, setEducations] = useState([]);

  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const price = formData.get("price");
    const poster = formData.get("poster");
    const discount = formData.get("discount");
    const title = formData.get("title");
    const category = formData.get("category");
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
        <label>
          عنوان
          <Input
            placeholder="عنوان"
            type="text"
            className="w-[500px]"
            name="title"
          />
        </label>
        <label>
          دسته بندی
          <Select className="w-52" name="category">
            <option value="file">فایل</option>
            <option value="course">دوره آموزشی</option>
          </Select>
        </label>
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

        <label>
          وضعیت
          <Select name="status">
            <option value="performing"> در حال برگذاری</option>
            <option value="end"> به پایان رسیده</option>
            <option value="update">درحال بروز رسانی</option>
          </Select>
        </label>

        <AddHeader educations={educations} setEducations={setEducations} />

        <div className="w-full">
          <Buttom className="w-fit h-fit">ثبت</Buttom>
        </div>
      </form>
    </div>
  );
}
