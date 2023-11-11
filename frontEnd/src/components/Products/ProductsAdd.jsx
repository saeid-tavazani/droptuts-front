import Input from "../UI/Input";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import Buttom from "../UI/Button";
import axios from "../../assets/axios/Axios";
import { useSelector, useDispatch } from "react-redux";
import { products as productsData } from "../../store/productsSlice";

export default function ProductsAdd({ id, token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [poster, setPoster] = useState("");
  const [discount, setDiscount] = useState("0");
  // const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addProduct = (e) => {
    e.preventDefault();

    axios
      .post(
        "/products/new",
        { id, title, description, price, poster, discount },
        { headers: { authorization: token } }
      )
      .then((response) => {
        console.log("====================================");
        console.log(response);
        console.log("====================================");
        dispatch(productsData(response.data.data));
      });
  };

  return (
    <div>
      <form
        onSubmit={() => addProduct(event)}
        className="flex gap-2 flex-col flex-wrap"
      >
        <Input
          onChange={() => setTitle(event.target.value)}
          placeholder="عنوان"
          type="text"
          className="w-96"
        />
        <textarea
          onChange={() => setDescription(event.target.value)}
          placeholder="توضیحات"
          type="text"
          className="py-3 px-4 block transition-all  border-gray-200 border rounded text-sm focus:border-blue-500 focus:ring-blue-500 w-full"
        ></textarea>
        <div className="flex gap-2 flex-wrap">
          <Input
            onChange={() => setPrice(event.target.value)}
            placeholder="فیمت"
            type="text"
            defaultValue="0"
            className="w-60"
          />
          <Input
            onChange={() => setPoster(event.target.value)}
            placeholder="عکس محصول"
            type="text"
            className="w-96"
          />
          <Input
            onChange={() => setDiscount(event.target.value)}
            placeholder="تخفیف"
            type="text"
            className="w-60"
            defaultValue="0"
          />
        </div>
        <Buttom className="w-fit">ثبت</Buttom>
        {/* <Input
          onChange={() => setUserName(event.target.value)}
          placeholder="نام"
          type="text"
        /> */}
      </form>
    </div>
  );
}
