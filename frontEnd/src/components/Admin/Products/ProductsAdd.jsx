import Input from "../../UI/Input";
import Buttom from "../../UI/Button";
import axios from "../../../assets/axios/Axios";
import { useDispatch } from "react-redux";
import { products as productsData } from "../../../store/productsSlice";
import TextEditor from "../../UI/TextEditor";
import { useRef } from "react";

export default function ProductsAdd({ id, token }) {
  const editorRef = useRef(null);
  const dispatch = useDispatch();

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
      <form onSubmit={addProduct} className="flex gap-2 flex-col flex-wrap">
        <Input placeholder="عنوان" type="text" className="w-96" name="title" />

        <TextEditor
          name="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
        />
        <div className="flex gap-2 flex-wrap">
          <Input
            placeholder="فیمت"
            type="text"
            defaultValue="0"
            className="w-60"
            name="price"
          />
          <Input
            placeholder="عکس محصول"
            type="text"
            className="w-96"
            name="poster"
          />
          <Input
            placeholder="تخفیف"
            type="text"
            className="w-60"
            defaultValue="0"
            name="discount"
          />
        </div>
        <Buttom className="w-fit">ثبت</Buttom>
      </form>
    </div>
  );
}
