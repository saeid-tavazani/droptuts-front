import Button from "../../components/UI/Button";
import axios from "../../assets/axios/";
import { useEffect, useState } from "react";
import Table from "../../components/UI/Table";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../store/products";
export default function ProductsPanel() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.value);
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const thead = [
    "ردیف",
    "عنوان",
    "توضیحات",
    "قیمت",
    "تخفیف",
    "وضعیت",
    "رمز فایل",
    "تاریخ افزودن",
    "تاریخ بروزرسانی",
    "بنر محصول",
  ];
  const keysValues = [
    { value: "title", type: "text" },
    { value: "description", type: "text" },
    { value: "price", type: "price" },
    { value: "discount", type: "text" },
    { value: "status", type: "text" },
    { value: "password", type: "text" },
    { value: "create_at", type: "date" },
    { value: "update_at", type: "date" },
    { value: "poster", type: "img" },
  ];
  useEffect(() => {
    if (token) {
      axios
        .get("/product/admin", { headers: { authorization: token } })
        .then((response) => {
          if (response.data.success) {
            dispatch(setProducts(response.data.data));
          }
        });
    }
  }, [token]);
  return (
    <div className="w-full rounded-xl p-5 bg-box shadow-sm border border-gray-400 flex flex-col gap-7">
      <div className="flex items-center justify-between gap-2">
        <h1 className="whitespace-nowrap font-bold">محصولات شما</h1>
        <Button onClick={() => navigate("/panel/addproduct")} className="w-fit">
          افزودن محصول جدید
        </Button>
      </div>
      <div className="w-full overflow-x-auto">
        {products && products.length ? (
          <Table data={products} keys={keysValues} titles={thead} />
        ) : (
          <p>محصولی یافت نشد</p>
        )}
      </div>
    </div>
  );
}
