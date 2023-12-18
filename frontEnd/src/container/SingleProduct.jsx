import styles from "../assets/styles/style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../assets/axios";
import { setProducts } from "../store/products";
import { useSelector, useDispatch } from "react-redux";
import Toastify from "../components/UI/Toastify";
import { error } from "../assets/handlerToastify.js";
import parse from "html-react-parser";
import Button from "../components/UI/Button";
import { MdOutlineDateRange } from "react-icons/md";
import { HiOutlineServer } from "react-icons/hi2";
import { BsCash } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
export default function SingleProduct() {
  const products = useSelector((state) => state.products.value);
  let { id } = useParams();
  const [activeProduct, setProduct] = useState(null);
  const dispatch = useDispatch();
  console.log("====================================");
  console.log(activeProduct);
  console.log("====================================");
  useEffect(() => {
    if (products) {
      setProduct(products.find((element) => element.id == id));
    } else {
      axios.get(`/product/${id}`).then((response) => {
        if (response.data.success) {
          setProduct(response.data.data);
        } else {
          error("خطا در ارتباط با سرور");
        }
      });
    }
  }, []);

  // const handlerText = (htmlContent) => {
  //   const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  //   return parse(sanitizedHtml);
  // };

  return activeProduct ? (
    <>
      <Toastify />
      <div className={`${styles.container} grid grid-cols-12 gap-4`}>
        <div className="col-span-9 flex flex-col gap-4">
          <img
            className="w-full rounded-lg"
            src={activeProduct.poster}
            alt={activeProduct.title}
          />
          <h1 className="font-bold">{activeProduct.title}</h1>
          <p>{parse(activeProduct.description)}</p>
        </div>
        <div className="col-span-3 border rounded-lg p-4 h-fit">
          <ul className="flex flex-col gap-y-3 text-sm">
            <li className="text-sm flex items-center">
              <BsCash /> قیمت :{" "}
              {activeProduct.price == 0 ? "رایگان" : ctiveProduct.price}
            </li>
            <li className="text-sm flex items-center">
              <HiOutlineServer size={20} />
              حجم فایل : 5.8GB
            </li>
            <li className="text-sm flex items-center">
              <MdOutlineDateRange size={20} /> تاریخ بروز رسانی :{" "}
              {activeProduct.update_at
                ? activeProduct.update_at
                : "بدون بروز رسانی"}
            </li>
            <li className="text-sm flex items-center">
              <RiLockPasswordLine size={20} />
              رمز عبور : {activeProduct.password}
            </li>
          </ul>
          <Button className="mt-8 w-full">افزودن به سبد خرید</Button>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
